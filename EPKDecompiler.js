class EPKDecompiler {
    constructor(data) {
        this.in2 = new Uint8Array(data);
        this.zis = null;
        this.crc32 = new CRC32();
        this.numFiles = 0;
        this.isFinished = false;

        const header = this.in2.slice(0, 8);
        if (this.isEPKFile(header)) {
            const endCode = new Uint8Array([58, 58, 58, 89, 69, 69, 58, 62]);

            for (let i = 0; i < 8; ++i) {
                if (data[data.length - 8 + i] !== endCode[i]) {
                    throw new Error("EPK file is missing EOF code (:::YEE:>)");
                }
            }

            this.in2 = this.in2.slice(8, data.length - 8);
            const is = this.in2;
            const vers = this.readASCII(is);
            if (!vers.startsWith("ver2.")) {
                throw new Error("Unknown or invalid EPK version: " + vers);
            } else {
                this.skip(is, is[0]);
                this.skip(is, this.loadShort(is));
                this.skip(is, 8);
                this.numFiles = this.loadInt(is);
                const compressionType = String.fromCharCode(is[0]);

                switch (compressionType) {
                    case '0':
                        this.zis = is;
                        break;
                    case 'G':
                        this.zis = EaglerZLIB.newGZIPInputStream(is);
                        break;
                    case 'Z':
                        this.zis = EaglerZLIB.newInflaterInputStream(is);
                        break;
                    default:
                        throw new Error("Invalid or unsupported EPK compression: " + compressionType);
                }
            }
        } else {
            throw new Error("FILE IS NOT AN EPK FILE!");
        }
    }

    isEPKFile(header) {
        const validHeaders = [
            new Uint8Array([69, 65, 71, 80, 75, 71, 36, 36]),
            new Uint8Array([69, 65, 71, 80, 75, 71, 33, 33])
        ];
        return validHeaders.some(h => h.every((value, index) => value === header[index]));
    }

    readFile() {
        if (this.isFinished) {
            return null;
        } else {
            const typeBytes = new Uint8Array(4);
            this.readFully(this.zis, typeBytes);
            const type = this.readASCII(typeBytes);

            if (this.numFiles === 0) {
                if (type !== "END$") {
                    throw new Error("EPK file is missing END code (END$)");
                } else {
                    this.isFinished = true;
                    return null;
                }
            } else if (type === "END$") {
                throw new Error("Unexpected END when there are still " + this.numFiles + " files remaining");
            } else {
                const name = this.readASCII(this.zis);
                const len = this.loadInt(this.zis);
                let data;

                if (type === "FILE") {
                    if (len < 5) {
                        throw new Error("File '" + name + "' is incomplete (no crc)");
                    }

                    const loadedCrc = this.loadInt(this.zis);
                    data = new Uint8Array(len - 5);
                    this.readFully(this.zis, data);
                    this.crc32.reset();
                    this.crc32.update(data);

                    if (this.crc32.getValue() !== loadedCrc) {
                        throw new Error("File '" + name + "' has an invalid checksum");
                    }

                    if (this.zis[0] !== 58) {
                        throw new Error("File '" + name + "' is incomplete");
                    }
                } else {
                    data = new Uint8Array(len);
                    this.readFully(this.zis, data);
                }

                if (this.zis[0] !== 62) {
                    throw new Error("Object '" + name + "' is incomplete");
                } else {
                    this.numFiles--;
                    return new FileEntry(type, name, data);
                }
            }
        }
    }

    loadShort(is) {
        return (is[0] << 8) | is[1];
    }

    loadInt(is) {
        return (is[0] << 24) | (is[1] << 16) | (is[2] << 8) | is[3];
    }

    readASCII(bytesIn) {
        return String.fromCharCode(...bytesIn);
    }

    readASCII(is) {
        const len = is[0];
        const charIn = new Uint8Array(len);
        for (let i = 0; i < len; ++i) {
            charIn[i] = is[i + 1];
        }
        return String.fromCharCode(...charIn);
    }

    readFully(stream, buffer) {
        // Implement logic to read from stream into buffer
    }

    skip(stream, bytes) {
        // Implement logic to skip bytes in the stream
    }
}

class FileEntry {
    constructor(type, name, data) {
        this.type = type;
        this.name = name;
        this.data = data;
    }
}
