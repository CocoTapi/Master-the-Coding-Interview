const longestNum = function(str) {
    const obj = {};
    let count = 0;

    for (let i = 0; i < str.length; i++){
        const current = str[i];

        if(!obj[current]) {
            obj[current] = i;
            count++;
        } else {
            obj[current] = i;
            count 
        }
    }
}

console.log(longestNum('abccabb')); //3
console.log(longestNum('ccccccc')); //1
console.log(longestNum('')); //0
console.log(longestNum('abcbcda')); //4
