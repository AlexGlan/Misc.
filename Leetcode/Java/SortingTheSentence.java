class Solution {
    public String sortSentence(String s) {
        String[] arr = s.split(" ");
        String[] res = new String[arr.length];

        for (String i : arr) {
            int sentenceIndice = Character.getNumericValue(i.charAt(i.length() - 1));
            String word = i.substring(0, i.length() - 1);
            res[sentenceIndice - 1] = word;      
        }

        return String.join(" ", res).trim();        
    }
}