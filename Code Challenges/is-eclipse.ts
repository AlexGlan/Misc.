/**
 * Challenge description: your function should return true if the string contains
 * the necessary characters to spell "eclipse", and false otherwise
 */

const isEclipse = (s: string): boolean => {
    const regExp: RegExp = /^(?=(.*e){2})(?=.*c)(?=.*l)(?=.*i)(?=.*p)(?=.*s)/i;
    return regExp.test(s);
}