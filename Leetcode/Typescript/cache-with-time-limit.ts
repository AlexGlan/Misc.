type C = Map<number, {value: number, timeoutID}>;

class TimeLimitedCache {
    private cache: C = new Map();
    
    set(key: number, value: number, duration: number): boolean {
        if (!this.cache.has(key)) {
            const timeoutID = setTimeout(() => { this.cache.delete(key); }, duration);
            this.cache.set(key, {value: value, timeoutID: timeoutID});
            return false;
        } else {
            clearTimeout(this.cache.get(key)?.timeoutID);
            const timeoutID = setTimeout(() => { this.cache.delete(key); }, duration);
            this.cache.set(key, {value, timeoutID});
            return true;
        }
    }
    
    get(key: number): number {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }
    
    count(): number {
        return this.cache.size;
    }
}