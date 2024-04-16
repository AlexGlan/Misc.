function finalValueAfterOperations(operations: string[]): number {
    return operations.reduce(
        (acc, val) => /(\+)/.test(val) ? acc + 1 : acc - 1,
        0
    );
};