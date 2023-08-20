class Solution {
    public int mostWordsFound(String[] sentences) {
        int arrLength = sentences.length;
        int[] wordCountArr = new int[arrLength];  
        
        for (int i = 0; i < arrLength; i++) {
            int numOfWords = sentences[i].split(" ").length;
            wordCountArr[i] = numOfWords;         
        }

        int max = 0;
        for (int ktr = 0; ktr < arrLength; ktr++) {
            if (wordCountArr[ktr] > max) {
                max = wordCountArr[ktr];
            }
        }
        return max;        
    }
}