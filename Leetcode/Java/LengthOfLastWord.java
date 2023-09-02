class Solution {
    public int lengthOfLastWord(String s) {
        String[] words = s.split(" ");
        int arrLength = words.length;
        return words[arrLength -1].length();        
    }
}