class Solution {
    fun findArray(pref: IntArray): IntArray {
        val ans = IntArray(pref.size)
        ans[0] = pref[0]

        for (i in pref.indices) {
            if (i == 0) continue

            ans[i] = pref[i] xor pref[i - 1]
        }

        return ans        
    }
}