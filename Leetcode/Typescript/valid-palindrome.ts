function isPalindrome(s: string): boolean {
    const cleanedStr: string = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let left: number = 0;
    let right: number = cleanedStr.length - 1;   
    while (right > 0) {        
        if (cleanedStr[left] !== cleanedStr[right]) return false;
        left++;
        right--;
    }    
    return true;
};