class Ach {
    static a = (vwInstance) => new Ach(vwInstance);
    
    constructor(bqoInstance, boolValue) {
        this.b = bqoInstance;
        this.c = boolValue;
    }

    static fromVw(vwInstance) {
        return new Ach(bqo.a(vwInstance.readUnsignedByte()), vwInstance.readBoolean());
    }

    toVw(vwInstance) {
        vwInstance.k(this.b.a());
        vwInstance.a(this.c);
    }

    getZi() {
        return Agg.m;
    }

    apply(abuInstance) {
        abuInstance.a(this);
    }

    isBool() {
        return this.c;
    }

    getBqo() {
        return this.b;
    }

    // Synthetic method
    static syntheticMethod(param1) {
        this.apply(param1);
    }
}
