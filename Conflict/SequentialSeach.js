public class SequentialSearch {
        public static boolean contains(long[] a, long b){
                for (int i = 0; i<a.length ; i++) {
                        if (a[i]==b){
                                return true;
                        }
                }
                return false;
        }
}
