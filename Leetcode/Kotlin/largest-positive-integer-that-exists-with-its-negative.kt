class Solution {
    fun findMaxK(nums: IntArray): Int {
        var ans: Int = -1

        for (i in nums.indices) {

            for (j in i + 1..<nums.size) {
                if (nums[i] == nums[j] * -1) {
                    val k: Int = if (nums[i] > 0) nums[i] else nums[i] * - 1
                    if (k > ans) ans = k
                    break
                }
            }
        }

        return ans        
    }
}