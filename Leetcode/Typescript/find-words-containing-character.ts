function findWordsContaining(words: string[], x: string): number[] {
    const ans: number[] = [];
    
    for (let i = 0; i < words.length; i++) {

        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                ans.push(i);
                break;
            }
        }
    }
    
    return ans;
};