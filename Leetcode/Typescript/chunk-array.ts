type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const chunks: Obj[][] = [];
    let i: number = 0;
    
    while (i < arr.length) {
        chunks.push(arr.slice(i, i + size));
        i += size;
    }

    return chunks;
};