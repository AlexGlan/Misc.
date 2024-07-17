type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const ans: any[] = [];
        let count: number = 0;        
        functions.forEach((fn, i) => {
            fn().then(result => {
                    ans[i] = result;
                    count++;
                    if (count === functions.length) {
                        resolve(ans);
                    }
                })
                .catch(error => reject(error));
         })
    });
};