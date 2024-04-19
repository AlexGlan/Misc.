/**
 * Challenge descriptio: Write a function isAltAccount which takes a username argument as a string.
 * The function should return true if all of the below conditions match, or false otherwise.
 * - The string must be a valid username:
 *   Valid usernames may contain any alphanumeric character, either uppercase or lowercase, and underscores;
 * - The string must contain the characters `soup` in that order, somewhere in the string.
 *   The characters do not have to be adjacent;
 * - The o character may be replaced with a numeral 0.
 */

// Solution without using RegEx
function isAltAccount(username: string): boolean {
    const str: string = username.replace('0', 'o').toLowerCase();
    const target: string = 'soup';
    const match: Map<string, string> = new Map();

    for (let i = 0; i < str.length; i++) {
        const ascii: number = str.charCodeAt(i);
        const isLetter: boolean = 97 <= ascii && ascii <= 122;
        const isNumber: boolean = 48 <= ascii && ascii <= 57;        
        const isUnderscore: boolean = ascii === 95;        

        if (!isNumber && !isLetter && !isUnderscore) {
            return false;
        }  
        
        if (!match.has(str[i]) && target.includes(str[i])) {
            match.set(str[i], str[i]);
        }  
    }
    
    return [...match.values()].join('') === target;
}

// Solution with RegEx
function isAltAccountRegEx(username: string): boolean {
    return /[^a-z0-9\_]/i.exec(username) === null
        ? /s(.+)?o(.+)?u(.+)?p(.+)?/i.test(username.replace(/0/, 'o'))
        : false; 
}