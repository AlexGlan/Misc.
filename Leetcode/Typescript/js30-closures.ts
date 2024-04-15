function createHelloWorld() {
    let s: string = 'Hello World';

    return function(...args): string {
        return s;
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

function createCounter1(n: number): () => number {    
    return function() {
        return ++n;
    }
}

/** 
 * const counter = createCounter1(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe(expected) {
            if (val === expected) return true;
            else throw new Error('Not Equal');
        },
        notToBe(expected) {
            if (val !== expected) return true;
            else throw new Error('Equal');
        }
    }    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter2(init: number): Counter {
    const n: number = init;

    return {
        increment() { return ++init },
        decrement() { return --init },
        reset() { init = n; return init; }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */