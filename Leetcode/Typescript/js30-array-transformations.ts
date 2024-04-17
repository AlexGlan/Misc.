// 2635. Apply Transform Over Each Element in Array

type Fn = (n: number, i: number) => number

function map(arr: number[], fn: Fn): number[] {
    const returnedArray: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i));
    }

    return returnedArray;    
};

// 2634. Filter Elements from Array

type F = (n: number, i: number) => any

function filter(arr: number[], fn: F): number[] {
    const filteredArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) filteredArr.push(arr[i]);
    }

    return filteredArr;
};

// 2626. Array Reduce Transformation

type Reducer = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Reducer, init: number): number {
    let accumulator: number = init;

    for (let i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }

    return accumulator;
};