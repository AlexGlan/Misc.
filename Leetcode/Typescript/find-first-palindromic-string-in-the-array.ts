function firstPalindrome(words: string[]): string {
    for (const word of words) {
        const middle: number = Math.ceil(word.length / 2);
        let left: number = 0;
        let right: number = word.length - 1;

        while (left <= middle) {            
            if (word[left] !== word[right]) {
                break;
            } else if (left === middle) {
                return word;
            } else {
                left++;
                right--;
            }
        }
    }

    return '';  
};