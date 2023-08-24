class Solution {
    public int numIdenticalPairs(int[] nums) {
        int n = nums.length;
        int result = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (nums[i] == nums[j] && i < j) {
                    result++;
                }
            }
        }
        return result;        
    }
}