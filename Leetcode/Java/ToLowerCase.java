class Solution {
    public String toLowerCase(String s) {
        // Solution with using ASCII values, not .toLowerCase() method
        StringBuilder lowerStr = new StringBuilder();

        for (int i = 0; i < s.length(); i++) {
            int asciiValue = s.charAt(i);
            if (asciiValue >= 65 && asciiValue <= 90) {
                asciiValue += 32;
            }
            char lowerCharacter = (char) asciiValue;
            lowerStr.append(lowerCharacter);
        }

        return lowerStr.toString();        
    }
}