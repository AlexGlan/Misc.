class Solution {
    fun secondHighest(s: String): Int {
        var (ans, max) = Pair(-1, -1)

        for (c in s) {
            if (!c.isDigit()) continue
            val num: Int = c - '0'

            if (num > max) {
                ans = max
                max = num
            } else if (num > ans && num < max) {
                ans = num
            }
        }

        return ans
    }
}