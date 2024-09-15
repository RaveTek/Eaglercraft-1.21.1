class Aa extends Error {
    constructor(message) {
        super(this.escapeJava(message));
    }

    constructor(message, cause) {
        super(this.escapeJava(message), cause);
    }

    escapeJava(str) {
        return str.replace(/\\/g, '\\\\')
                  .replace(/'/g, "\\'")
                  .replace(/"/g, '\\"')
                  .replace(/\n/g, '\\n')
                  .replace(/\r/g, '\\r')
                  .replace(/\t/g, '\\t');
    }
}

