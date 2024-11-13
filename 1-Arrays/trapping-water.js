/*
1. set variables called sum to store water amount, 
    maxL to store max height of Left, 
    maxR for max height of Right,
    curHeight fot current Height,
    curWater for current Water Amount
2. set two pointer, p1, p2
3. while p1 < p2
    a. check maxL. if maxL < p1's height,
        maxL = p1,
    b. check maxR. if maxR < p2's height,
        maxR = p2
    c. if p1 <= p2
        i. curWater is smaller one of maxL or maxR minus p1 height.
        ii. add curWater to sum
        iii. move p1 to the left
    d. else
        ii. curWater is smaller one of maxL or maxR minus p2 height.
         ii. add curWater to sum
        iii. move p2 to the right
4. return sum

*/

const getWaterAmount = function(arr){
    let sum = 0;
    let maxL = 0;
    let maxR = 0;
    let curHeight;
    let curWater;
    let p1 = 0;
    let p2 = arr.length - 1;

    while (p1 <= p2){
        if (maxL < arr[p1]) maxL = arr[p1];
        if (maxR < arr[p2]) maxR = arr[p2];

        if (arr[p1] <= arr[p2]) {
            curHeight = arr[p1];
            p1++;
        } else {
            curHeight = arr[p2];
            p2--;
        };

        curWater = Math.min(maxL, maxR) - curHeight;
        sum += curWater
    }

    return sum;
};

console.log("answer", getWaterAmount([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));