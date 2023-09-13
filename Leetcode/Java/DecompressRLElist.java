import java.util.ArrayList;

class Solution {
    public int[] decompressRLElist(int[] nums) {
        ArrayList<Integer> arrayList = new ArrayList<Integer>();

        for (int i = 0; i < nums.length; i++) {
            int freq = nums[i];
            int val = nums[i + 1];
            for (int j = 0; j < freq; j++) {
                    arrayList.add(val);
                }
            i++;
        }

        int[] ans = new int[arrayList.size()];

        for (int i = 0; i < arrayList.size(); i++) {
            ans[i] = arrayList.get(i);
        }
        return ans;        
    }
}