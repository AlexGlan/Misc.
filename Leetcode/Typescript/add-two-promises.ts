type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    try {
        const [x, y] = await Promise.all([promise1, promise2]);
        return new Promise(resolve => {
            setTimeout( () => resolve(x + y), 0 );
        });
    } catch (err) {
        return Promise.reject(err);
    }
};