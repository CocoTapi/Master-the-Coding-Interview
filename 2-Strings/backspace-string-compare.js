// Brute force solution.
// const isEqual = function (s, t) {
//     const arrS = makeArr(s);
//     const arrT = makeArr(t);

//     if (arrS.length !== arrT.length){
//         return false;
//     } else {
//         for (let i = 0; i < arrS.length; i++){
//             if (arrS[i] !== arrT[i]) return false
//         }
//     }

//     return true;
// }

// function makeArr(string) {
//     const arr = [];

//     for (let i = 0; i < string.length; i++){
//         if (string[i] === '#') {
//             arr.pop();
//         } else {
//             arr.push(string[i]);
//         }
//     }

//     return arr;
// }

// optimized solution
const isEqual = function(s, t) {
    let p1 = s.length - 1, p2 = t.length - 1;

    while (p1 >= 0 || p2 >= 0) {
        if (s[p1] === '#') {
            let backSpace = 2;

            while (backSpace > 0) {
                p1--;
                backSpace--;

                if(s[p1] === '#'){
                    backSpace = backSpace + 2;
                }
            }
        } else if (t[p2] === '#'){
            let backSpace = 2;

            while (backSpace > 0) {
                p2--;
                backSpace--;

                if(t[p2] === '#'){
                    backSpace = backSpace + 2;
                }
            }
        } else {
            if (s[p1] !== t[p2]) return false;
            p1--;
            p2--;
        }
    }

    return true;
}

console.log(isEqual('ab#z', 'az#z')); //true
console.log(isEqual('abc#d', 'acc#c')); //false
console.log(isEqual('a###b', 'b')); //true
