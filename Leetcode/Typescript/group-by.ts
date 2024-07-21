interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const res = {};

    this.forEach(elem => {
        const key: string = fn(elem).toString();
        if (res[key] != null) {
            res[key].push(elem);
        } else {
            res[key] = [elem];
        }
    });
    
    return res;   
}