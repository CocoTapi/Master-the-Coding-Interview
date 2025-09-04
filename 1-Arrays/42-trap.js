/*
1. set variables called, total, currentWater, 
2. iterate through heights array
    a. set a variable called maxL = 0, maxR = 0, leftP = p, rightP= p.
    b. while leftP >= 0
        i. get the larger number between maxLeft and the value of leftP
        ii. decrement leftP by 1
    c. while rightP < the heights length,
        i. get the larger number between maxRight and the value of rightP
        ii. increment rightP by 1
    d. get the currentWater by the smaller number of maxLeft and maxRight minus currentP value
    e. if currentWater is more than 0
        i, add currentWater into total
3. return total
time: O(N^2)
space: O(1)
*/

// const getTrappingRainwater = function(heights) {
//     let total = 0;
//     let currentWater = 0;
   
//     for (let p = 0; p < heights.length; p++) {
//         let maxLeft = 0;
//         let maxRight = 0;
//         let leftP = p;
//         let rightP = p;

//         while (leftP >= 0) {
//             maxLeft = Math.max(maxLeft, heights[leftP]);
//             leftP--;
//         }

//         while (rightP < heights.length) {
//             maxRight = Math.max(maxRight, heights[rightP]);
//             rightP++;
//         }

//         currentWater = Math.min(maxLeft, maxRight) - heights[p];
//         console.log("currentWater: ", currentWater, "maxLeft: ", maxLeft, "maxRight: ", maxRight, "currentValue:", heights[p]);

//         if (currentWater > 0) {
//             total+= currentWater;
//         }
//     }

//     return total;
// }

/*
1. identify pointer with lesser value
2. is this pointer value less than or equal to max on that side
    a. yes. update max on that side
    b. no. get water for pointer value, add to total 
3. move pointer inward
4. repeat for other pointer
*/

const getTrappingRainwater = function(heights) {
    let total = 0;
    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;

    while(left < right) {
        if(heights[left] <= heights[right]) {
            if(heights[left] >= leftMax) {
                leftMax = heights[left];            
            } else {
                total += (maxLeft - heights[left]);
            }
            left++;
        } else {
            if(heights[right] >= rightMax) {
                rightMax = heights[right];
            } else {
                total += (maxRight - heights[right]);
            }
            right--;
        }
    }

    return total;
}


console.log("answer", getTrappingRainwater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
