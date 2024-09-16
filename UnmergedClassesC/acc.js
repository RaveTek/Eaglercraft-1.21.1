class Acc {
    static a = Zg.a(Acc.a, Acc.new);
    constructor(b, e, c, d) {
        this.b = b;
        this.e = e;
        this.c = c;
        this.d = d;
    }

    static fromWk(wk) {
        const b = wk.e();
        const c = wk.readUnsignedByte();
        const d = wk.readUnsignedByte();
        const e = Yv.a(Lu.f).decode(wk);
        return new Acc(b, e, c, d);
    }

    toWk(wk) {
        wk.a(this.b);
        wk.k(this.c);
        wk.k(this.d);
        Yv.a(Lu.f).encode(wk, this.e);
    }

    a() {
        return Agg.j;
    }

    a(abu) {
        abu.a(this);
    }

    b() {
        return this.b;
    }

    e() {
        return this.c;
    }

    f() {
        return this.d;
    }

    g() {
        return this.e;
    }

    a(param1) {
        this.a(param1);
    }
}
