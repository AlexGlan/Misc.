type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache: Map<string, number> = new Map();
    
    return function(...args) {
        const key: string = JSON.stringify(args);

        if (cache.has(key)) {
            const cachedResult = cache.get(key);
            if (cachedResult !== undefined) {
                return cachedResult;
            }
        }

        const result: number = fn(...args);
        cache.set(key, result);
        return result;
    }
}