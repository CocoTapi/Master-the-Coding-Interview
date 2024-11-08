/*
	[1, 3, 7, 9, 2]  t = 11               [3, 4]
	[1, 3, 7, 9, 2]  t = 25               null
	[]               t = 1                 null
	[5]              t = 5                null
    [1, 6]           t = 7                 [0, 1]
*/

// function twoSum(arr, target){
//     if (arr.length < 2) return null;

//     let lookUpNum;

//     for(let i = 0; i < arr.length; i++) {
//         lookUpNum = target - arr[i];
//         // console.log(i, lookUpNum);
//        for(let j = i + 1; j < arr.length; j++) {
//            if(lookUpNum === arr[j]){
//             return [i, j];
//            } 
//        } 
//     }

//     return null;
// }


function twoSum(arr, target){
    const numsMap = {};

    for(let i = 0; i < arr.length; i++){
        const currentMapVal = numsMap[arr[i]];
        console.log("currentMapVal", currentMapVal);

        if(currentMapVal >= 0) {
            return [currentMapVal, i];
        } else {
            const numberToFind = target - arr[i];
            numsMap[numberToFind] = i;
        }
    }
    return null;
}

console.log("example", twoSum([-1, 3, 7, 9, 2, 13], 11)); 