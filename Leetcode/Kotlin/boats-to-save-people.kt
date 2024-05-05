class Solution {
    fun numRescueBoats(people: IntArray, limit: Int): Int {
        var ans: Int = 0
        val sorted: List<Int> = people.sortedDescending()
        var j: Int = sorted.lastIndex

        for (i in sorted.indices) {
            if (i > j) break

            if (sorted[i] + sorted[j] <= limit) j--
            ans++
        }

        return ans      
    }
}