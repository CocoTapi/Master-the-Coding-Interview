/* 
1. if there is no reservation, return 0
2. iterate through the reservations
    a. create an array of start time
    b. create an array of end time
3. sort each arrays to place tables in order based on time
4. while start time is exists
    a. if current start time < current end time
        i. increment use table by 1
        ii. update max table
        iii. move the next start time
    b. else 
        i. remove table count
        ii. move the next end time
5. return max table
*/

function maxTable(reservations) {
    // if there are no reservation, exit early
    if (!reservations || reservations.length <= 0) return 0;

    const starts = [];
    const ends = [];

    // step 1 - setup starts list and end lists
    for (let [start, end] of reservations) {
        // if it is zero hour to stay, continue
        if (start === end) continue;
        
        starts.push(start);
        ends.push(end);
    }

    // step 2 - sort each array to place tables in order based on time
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    //  set 2 pointers to trace beginning and end time
    let i = 0;
    let j = 0;
    let inUse = 0;
    let maxTable = 0;

    /* 
    step 3 - trace beginning and end time 
    to count tables simultaneously in use based on start and end times
    */

    while (i < starts.length) {
        
        // if new group come BEFORE other group leave, increment total simultaneous tables used
        if (starts[i] < ends[j]) {
            inUse++;
            maxTable = Math.max(maxTable, inUse);
            i++
        } else {
            // if new group come AFTER other group leave, decrement total simultaneous tables used
            // repeat this until decrement all empty tables because start pointer won't move here
            if (inUse > 0) inUse--;
            j++;
        }
    }

    // step 4 - return max table
    return maxTable;
}

// ---- Example from your prompt ----
const reservations = [[0, 5], [5, 10], [10, 15]];

console.log(maxTable(reservations));