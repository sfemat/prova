public class SequentialSearch {
        public static boolean contains(int[] a, int b){
                for (int i = 0; i<a.length ; i++) {
                        if (a[i]==b){
                                return true;
                        }
                }
                return false;
        }
}
