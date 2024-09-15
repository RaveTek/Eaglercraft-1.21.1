/* Decompiler 13ms, total 184ms, lines 68 */
public class abw implements zg<abu> {
   public static final yx<vw, abw> a = zg.a(abw::a, abw::new);
   private final int b;
   private final double c;
   private final double d;
   private final double e;
   private final int f;

   public abw(btc $$0, aqt $$1) {
      this.b = $$0.an();
      exc $$2 = $$1.b();
      this.c = $$2.a();
      this.d = $$2.b();
      this.e = $$2.c();
      this.f = $$0.p();
   }

   private abw(vw $$0) {
      this.b = $$0.l();
      this.c = $$0.readDouble();
      this.d = $$0.readDouble();
      this.e = $$0.readDouble();
      this.f = $$0.readShort();
   }

   private void a(vw $$0) {
      $$0.c(this.b);
      $$0.a(this.c);
      $$0.a(this.d);
      $$0.a(this.e);
      $$0.l(this.f);
   }

   public zi<abw> a() {
      return agg.d;
   }

   public void a(abu $$0) {
      $$0.a(this);
   }

   public int b() {
      return this.b;
   }

   public double e() {
      return this.c;
   }

   public double f() {
      return this.d;
   }

   public double g() {
      return this.e;
   }

   public int h() {
      return this.f;
   }

   // $FF: synthetic method
   // $FF: bridge method
   public void a(final wf param1) {
      this.a((abu)var1);
   }
}
