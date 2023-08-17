class Solution {
    public int[] buildArray(int[] nums) {
        int[] ans;
        ans = new int[nums.length];

        for(int i = 0; i < ans.length; i++) {
            ans[i] = nums[nums[i]];
        }

        return ans;            
    }
}