/*
make a map based on columns. col as id, value is array of rows
make a position map. id as id, value is row and column
iterate through through moves
  a. remove id from the old place
  b. insert id to a new place
update a position map using columns map
return query position
*/

function finalPosition(cards, moves, query) {
    
    // make a map based on columns 
    const cols = new Map();

    // make a position map
    const pos = new Map();

    // step 1 - serialize card data
    for (let [id, row, col] of cards) {
        
        // COLS MAP
        // if there is no slot for the col, make the id 
        if (!cols.has(col)) cols.set(col, []);

        // place card 
        const rowsArr = cols.get(col);

        // if there is no target row area in the array
        if (rowsArr.length <= row) rowsArr.length = row + 1;

        // insert id into rows
        rowsArr[row] = id;

        // POS MAP
        pos.set(id, [row, col]);
    }

    // step 2 - move cards based on moves parameter
    for (let [id, oldRowGiven, oldColGiven, newRow, newCol] of moves) {
        // use id to get the correct old place
        const curr = pos.get(id);
        if (!id) throw new Error(`unknown id ${id}`)

        const oldCol = curr[1];
        const oldRow = curr[0];

        const oldList = cols.get(oldCol);
        const newList = cols.get(newCol);
        
        // if you need to move card to a new spot
        if (!cols.has(newCol)) cols.set(newCol, [])

        // - REMOVE -

        // verify old row; fallback if needed
        let removeIdx = oldRow;
        if (oldList[removeIdx] !== id) {
          const found = oldList.indexOf(id);
          if (found === -1) throw new Error(`Card ${id} not found in column ${oldCol}`);
          removeIdx = found;
        }

        // remove id from the old place
        oldList.splice(removeIdx, 1);

        // update the position map
        updateRows(removeIdx, oldCol, oldList, pos);

        // - INSERT -

        let insertIdx = newRow;

        // When you insert card to the same column, modify insert index 
        if (oldCol === newCol && removeIdx < newRow) {
          insertIdx = newRow - 1;
        }

        // insert id to a new position 
        newList.splice(newRow, 0, id);
        // Update the position map
        updateRows(insertIdx, newCol, newList, pos);
       
        
    }

    // step 3 - update the position map
    // for (let [col, rows] of cols.entries()) {
        
    //     for (let row = 0; row < rows.length; row++) {
    //         const id = rows[row];

    //         // set the new row and col
    //         pos.set(id, [row, col]);
    //     }
    // }

    // step 4 - return current state based on query parameter
    const res = pos.get(query);

    return res;
}

/*
helper function to update position for the position map
*/
function updateRows(startIdx, newCol, list, pos) {
  for (let i = startIdx; i < list.length; i++) {
    const id = list[i];

    // replace row in the same col
    pos.set(id, [i, newCol]);
  }
}




// ---- Example from your prompt ----
// const cards = [
//   [1, 1, 0], [3, 0, 0], [6, 0, 1],
//   [4, 0, 2], [5, 2, 0], [7, 1, 1], [2, 1, 2]
// ];
// const moves = [
//   [6, 0, 1, 2, 0],
//   [7, 0, 1, 0, 2]
// ];
// const query = 2;

// console.log(finalPosition(cards, moves, query)); // [2, 2]

// same-column downward move check
const cards2 = [[10,0,0],[11,1,0],[12,2,0]];
const moves2 = [[10,0,0,2,0]]; // move id 10 from row 0 -> row 2 in same col
console.log(finalPosition(cards2, moves2, 10)); // [2, 0]