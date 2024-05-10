class Solution {
    fun divideArray(nums: IntArray): Boolean {
        val count: HashMap<Int, Int> = hashMapOf()

        for (num in nums) {
            count[num] = count.getOrDefault(num, 0) + 1
        }

        for (value in count.values) {
            if (value % 2 != 0) return false
        }

        return true        
    }
}