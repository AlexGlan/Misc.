type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let calls: number = 0;
    
    return function (...args) {
        if (calls > 0) {
            return undefined;
        } else {
            calls++;
            return fn(...args);
        }
    };
}