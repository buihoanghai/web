function BracketCombinations(num) {

    // code goes here
    let result = {count: 0,str:[]};
    let str = '(';
    BracketCombinationsRecursy(str, num, result)
    return result.count;

}

function BracketCombinationsRecursy(str, num, result) {
    // console.log('try with' + str);
    if (str.length === num * 2) {
        if (isValid(str) && !result.str.includes(str)) {
            result.str.push(str);
            result.count++;
        }
        return;
    }
    while (str.length <= num * 2 - 1) {
        let originalStr = str;
        str = originalStr + '(';
        BracketCombinationsRecursy(str, num, result);
        str = originalStr + ')';
        BracketCombinationsRecursy(str, num, result);
    }
}

function isValid(input) {
    let stack = [];

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false; // No matching opening parenthesis
            }
            stack.pop();
        }
    }

    return stack.length === 0; // True if all parentheses are matched
}

// keep this function call here
