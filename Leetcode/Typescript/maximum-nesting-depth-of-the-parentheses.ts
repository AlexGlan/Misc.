function maxDepth(s: string): number {
    let maxDepth: number = 0;
    let depth: number = 0;

    for (const char of s) {
        if (char === '(') {
            depth++;
            if (depth > maxDepth) maxDepth = depth;
        } else if (char === ')') {
            depth--;
        } 
    }

    return maxDepth;
};