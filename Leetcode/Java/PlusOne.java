import java.math.BigInteger;

class Solution {
    public int[] plusOne(int[] digits) {
        StringBuilder numSB = new StringBuilder();
        for (int i = 0; i < digits.length; i++) {
            numSB.append(digits[i]);
        }
        
        String numStr = numSB.toString();
        BigInteger numBig = new BigInteger(numStr);
        BigInteger numBigIncremented = numBig.add(BigInteger.ONE);
        String num = numBigIncremented.toString();

        int[] ans = new int[num.length()];
        for (int i = 0; i < ans.length; i++) {
            ans[i] = Character.getNumericValue(num.charAt(i));
        }    
        return ans;         
    }
}