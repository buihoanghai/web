function MinWindowSubstring(strArr) {

    // code goes here
    const N = strArr[0];
    const K = strArr[1];
    let min = K.length;
    while (min < N.length) {
        for (let i = 0; i + min <= N.length; i++) {
            let tryStr = N.slice(i, i + min);
            if (isContainAll(tryStr, K)) {
                return tryStr;
            }
        }
        min++;
    }
    return N;
    function isContainAll(str, chars) {
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            const index = str.indexOf(char);
            if (index >= 0) {
                str = str.slice(0, index) + str.slice(index + 1)
            } else {
                return false;
            }
        }
        return true
    }
}


// keep this function call here 
console.log(MinWindowSubstring(["aaabaaddae", "aed"]));
// console.log(MinWindowSubstring(readline()));