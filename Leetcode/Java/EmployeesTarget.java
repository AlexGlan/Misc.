class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int num = 0;

        for (int i : hours) {
            if (i >= target) {
                num += 1;
            }
        }
        
        return num;        
    }
}