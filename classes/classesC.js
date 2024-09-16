//Class AB With Minecraft Version!
class ab {}
ab.a = false;
ab.b = 3955;
ab.c = 'main';
ab.d = '1.21.1';
ab.e = 767;
ab.f = 204;
ab.g = 3937;
ab.bm = 30;
ab.h = false;
ab.i = 34;
ab.j = 48;
ab.k = 1;
ab.l = 1;
ab.m = 'DataVersion';
ab.n = false;
ab.o = false;
ab.p = false;
ab.q = false;
ab.r = false;
ab.s = false;
ab.t = false;
ab.u = false;
ab.v = false;
ab.w = false;
ab.x = false;
ab.y = false;
ab.z = false;
ab.A = false;
ab.B = false;
ab.C = false;
ab.D = false;
ab.E = false;
ab.F = false;
ab.G = false;
ab.H = false;
ab.I = false;
ab.J = false;
ab.K = false;
ab.L = false;
ab.M = false;
ab.N = false;
ab.O = false;
ab.P = false;
ab.Q = false;
ab.R = false;
ab.S = false;
ab.T = false;
ab.U = false;
ab.V = false;
ab.W = false;
ab.X = false;
ab.Y = false;
ab.Z = false;
ab.aa = false;
ab.ab = false;
ab.ac = false;
ab.ad = false;
ab.ae = false;
ab.af = false;
ab.ag = false;
ab.ah = false;
ab.ai = false;
ab.aj = false;
ab.ak = false;
ab.al = false;
ab.am = false;
ab.an = false;
ab.ao = false;
ab.ap = false;
ab.aq = false;
ab.ar = false;
ab.as = false;
ab.at = false;
ab.au = false;
ab.av = false;
ab.aw = false;
ab.ax = false;
ab.ay = false;
ab.az = false;
ab.aA = false;
ab.aB = false;
ab.aC = false;
ab.aD = 25565;
ab.aE = false;
ab.aF = false;
ab.aG = 0;
ab.aH = 0;
ab.aI = null;
ab.aJ = false;
ab.aK = false;
ab.aL = false;
ab.aM = false;
ab.aN = false;
ab.aO = false;
ab.aP = false;
ab.aQ = 0;
ab.aR = 3600000.0;
ab.aS = false;
ab.aT = false;
ab.aU = false;
ab.aV = false;
ab.aW = 16;
ab.aX = 256;
ab.aY = 32500;
ab.aZ = 2000000;
ab.ba = 16;
ab.bb = 1000000;
ab.bc = 32;
ab.bd = null;
ab.be = 20;
ab.bf = 50;
ab.bg = 1200;
ab.bh = 24000;
ab.bi = 1365.3334;
ab.bj = 0.87890625;
ab.bk = 17.578125;
ab.bl = 64;
ab.bn = null;
ab.a$0 = () => {
  if (this.bn === null) {
    this.bn = this.t.a();
  }
};
ab.a$1 = ($$0) => {
  let $$1 = $$0.d();
  let $$2 = $$0.e();
  if (!this.ar) {
    return false;
  } else {
    return $$1 > 8192 || $$1 < 0 || $$2 > 1024 || $$2 < 0;
  }
};
ab.a = (...args$) => {
  switch (args$.length) {
    case 0:
      return ab.a$0(...args$);
    case 1:
      return ab.a$1(...args$);
  }
};
ab.b = () => {
  if (this.bn === null) {
    throw new IllegalStateException('Game version not set');
  } else {
    return this.bn;
  }
};
ab.c = () => {
  return 767;
};
//Next Part Of Code Goes Here!
