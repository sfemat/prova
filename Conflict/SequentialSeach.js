public class SequentialSearch {
        public static boolean contains(int[] a, int b){
                for (int i : a) {
                        if (a[i]==b){
                                return true;
                        }
                }
                return false;
        }
}
