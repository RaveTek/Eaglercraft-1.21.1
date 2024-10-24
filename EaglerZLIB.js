// Ensure you include the pako library in your project
// <script src="https://cdnjs.cloudflare.com/ajax/libs/pako/1.0.11/pako.min.js"></script>

class EaglerZLIB {
    static newDeflaterOutputStream() {
        throw new Error("DeflaterOutputStream is not directly supported in JavaScript.");
    }

    static newGZIPOutputStream(os) {
        return new GZIPOutputStream(os);
    }

    static newInflaterInputStream(is) {
        return new InflaterInputStream(is);
    }

    static newGZIPInputStream(is) {
        return new GZIPInputStream(is);
    }
}

class GZIPOutputStream {
    constructor(outputStream) {
        this.outputStream = outputStream;
    }

    write(data) {
        const compressedData = pako.gzip(data);
        this.outputStream.write(compressedData);
    }

    close() {
        this.outputStream.close();
    }
}

class GZIPInputStream {
    constructor(inputStream) {
        this.inputStream = inputStream;
    }

    read() {
        const compressedData = this.inputStream.read();
        return pako.ungzip(compressedData);
    }

    close() {
        this.inputStream.close();
    }
}

class InflaterInputStream {
    constructor(inputStream) {
        this.inputStream = inputStream;
    }

    read() {
        const compressedData = this.inputStream.read();
        return pako.inflate(compressedData);
    }

    close() {
        this.inputStream.close();
    }
}
