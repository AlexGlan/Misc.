function reversePrefix(word: string, ch: string): string {
    const index: number = word.indexOf(ch);
    if (index === -1) return word;

    let ans: string = '';
    
    for (let i = index; i >= 0; i--) {
        ans += word[i];
    }

    return ans + word.slice(index + 1);
};