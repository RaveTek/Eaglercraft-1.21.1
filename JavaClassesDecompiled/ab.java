/* Decompiler 39ms, total 213ms, lines 185 */
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import io.netty.util.ResourceLeakDetector;
import io.netty.util.ResourceLeakDetector.Level;
import java.time.Duration;
import javax.annotation.Nullable;

public class ab {
   @Deprecated
   public static final boolean a = false;
   @Deprecated
   public static final int b = 3955;
   @Deprecated
   public static final String c = "main";
   @Deprecated
   public static final String d = "1.21.1";
   @Deprecated
   public static final int e = 767;
   @Deprecated
   public static final int f = 204;
   public static final int g = 3937;
   private static final int bm = 30;
   public static final boolean h = false;
   @Deprecated
   public static final int i = 34;
   @Deprecated
   public static final int j = 48;
   @Deprecated
   public static final int k = 1;
   public static final int l = 1;
   public static final String m = "DataVersion";
   public static final boolean n = false;
   public static final boolean o = false;
   public static final boolean p = false;
   public static final boolean q = false;
   public static final boolean r = false;
   public static final boolean s = false;
   public static final boolean t = false;
   public static final boolean u = false;
   public static final boolean v = false;
   public static final boolean w = false;
   public static final boolean x = false;
   public static final boolean y = false;
   public static final boolean z = false;
   public static final boolean A = false;
   public static final boolean B = false;
   public static final boolean C = false;
   public static final boolean D = false;
   public static final boolean E = false;
   public static final boolean F = false;
   public static final boolean G = false;
   public static final boolean H = false;
   public static final boolean I = false;
   public static final boolean J = false;
   public static final boolean K = false;
   public static final boolean L = false;
   public static final boolean M = false;
   public static final boolean N = false;
   public static final boolean O = false;
   public static final boolean P = false;
   public static final boolean Q = false;
   public static final boolean R = false;
   public static final boolean S = false;
   public static final boolean T = false;
   public static final boolean U = false;
   public static final boolean V = false;
   public static final boolean W = false;
   public static final boolean X = false;
   public static final boolean Y = false;
   public static final boolean Z = false;
   public static final boolean aa = false;
   public static final boolean ab = false;
   public static final boolean ac = false;
   public static final boolean ad = false;
   public static final boolean ae = false;
   public static final boolean af = false;
   public static final boolean ag = false;
   public static final boolean ah = false;
   public static final boolean ai = false;
   public static final boolean aj = false;
   public static final boolean ak = false;
   public static final boolean al = false;
   public static final boolean am = false;
   public static final boolean an = false;
   public static final boolean ao = false;
   public static final boolean ap = false;
   public static final boolean aq = false;
   public static boolean ar = false;
   public static boolean as = false;
   public static final boolean at = false;
   public static final boolean au = false;
   public static final boolean av = false;
   public static final boolean aw = false;
   public static final boolean ax = false;
   public static final boolean ay = false;
   public static final boolean az = false;
   public static final boolean aA = false;
   public static final boolean aB = false;
   public static final boolean aC = false;
   public static final int aD = 25565;
   public static final boolean aE = false;
   public static final boolean aF = false;
   public static final int aG = 0;
   public static final int aH = 0;
   public static final Level aI;
   public static final boolean aJ = false;
   public static final boolean aK = false;
   public static final boolean aL = false;
   public static final boolean aM = false;
   public static final boolean aN = false;
   public static final boolean aO = false;
   public static final boolean aP = false;
   public static final long aQ;
   public static final float aR = 3600000.0F;
   public static final boolean aS = false;
   public static final boolean aT = false;
   public static boolean aU;
   public static boolean aV;
   public static final int aW = 16;
   public static final int aX = 256;
   public static final int aY = 32500;
   public static final int aZ = 2000000;
   public static final int ba = 16;
   public static final int bb = 1000000;
   public static final int bc = 32;
   public static final char[] bd;
   public static final int be = 20;
   public static final int bf = 50;
   public static final int bg = 1200;
   public static final int bh = 24000;
   public static final float bi = 1365.3334F;
   public static final float bj = 0.87890625F;
   public static final float bk = 17.578125F;
   public static final int bl = 64;
   @Nullable
   private static ae bn;

   public static void a(ae $$0) {
      if (bn == null) {
         bn = $$0;
      } else if ($$0 != bn) {
         throw new IllegalStateException("Cannot override the current game version!");
      }

   }

   public static void a() {
      if (bn == null) {
         bn = t.a();
      }

   }

   public static ae b() {
      if (bn == null) {
         throw new IllegalStateException("Game version not set");
      } else {
         return bn;
      }
   }

   public static int c() {
      return 767;
   }

   public static boolean a(dcd $$0) {
      int $$1 = $$0.d();
      int $$2 = $$0.e();
      if (!ar) {
         return false;
      } else {
         return $$1 > 8192 || $$1 < 0 || $$2 > 1024 || $$2 < 0;
      }
   }

   static {
      aI = Level.DISABLED;
      aQ = Duration.ofMillis(300L).toNanos();
      aU = true;
      bd = new char[]{'/', '\n', '\r', '\t', '\u0000', '\f', '`', '?', '*', '\\', '<', '>', '|', '"', ':'};
      ResourceLeakDetector.setLevel(aI);
      CommandSyntaxException.ENABLE_COMMAND_STACK_TRACES = false;
      CommandSyntaxException.BUILT_IN_EXCEPTIONS = new en();
   }
}
