// const getMaxWater = function(height) {
//     let maxArea = 0;
//     let curArea;
//     let curHeight;
//     let curWidth;

//     for (let i = 0; i < height.length - 1; i++) {
//         for (let j = 1; j < height.length; j++) {
//             curHeight = Math.min(height[i], height[j]);
//             curWidth = (j - i);
//             curArea =  curHeight * curWidth; 
//             maxArea = Math.max(curArea, maxArea);
//         }
//     }

//     return maxArea;
// };

const getMaxWater = function(height) {
    let maxArea = 0;
    let curArea;
    let curWidth;
    let curHeight;
    let p1 = 0;
    let p2 = height.length - 1;

    while(p1 < p2) {
        curWidth = p2 - p1;
        curHeight = Math.min(height[p1], height[p2]);
        curArea = curWidth * curHeight;
        console.log("curArea", curArea);
        maxArea = Math.max(maxArea, curArea);
        console.log("maxArea", maxArea);

        if(height[p1] <= height[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return maxArea;
}

console.log("answer", getMaxWater([7, 1, 2, 3, 9]));    