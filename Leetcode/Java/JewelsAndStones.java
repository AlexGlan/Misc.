class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int result = 0;
        char[] jewelsArr = jewels.toCharArray();
        char[] stonesArr = stones.toCharArray();

        for (char i : jewelsArr) {
            for (char j : stonesArr) {
                if (i == j) {
                    result += 1;
                }
            }
        }
        return result;        
    }
}