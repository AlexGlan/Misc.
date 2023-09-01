class Solution {
    public String interpret(String command) {
        StringBuilder ans = new StringBuilder("");
        char[] charArr = command.toCharArray();

        for (int i = 0; i < charArr.length; i++) {
            if (charArr[i] == 'G') {
                ans.append("G");
            } else if (charArr[i] == "()".charAt(0) && 
                       charArr[i + 1] == "()".charAt(1)) {
                ans.append("o");
                i++;
            } else if (charArr[i] == 'a') {
                ans.append("al");
                i++;
                i++;
            }
        }
        return ans.toString();    
    }
}