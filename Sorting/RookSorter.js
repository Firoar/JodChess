const RookSorter = (mves) => {
  // it either starts from 1 and stops in middle
  // or starts from middle to end
  let moves = [...mves];
  let FirstHalf_moves = moves.splice(0, 7);
  let SecondHalf_moves = [...moves];
  let test1 = [];
  let test2 = [];
  let ArrayOfArray = [];

  // console.log(FirstHalf_moves, SecondHalf_moves);

  if (FirstHalf_moves[0][1] === "1") {
    let num = 1;
    let store = 8;

    for (let i = 1; i < FirstHalf_moves.length; i++) {
      if (Number(FirstHalf_moves[i][1]) !== num + 1) {
        store = i;
        // console.log(FirstHalf_moves[i][1], i, num + 1);
        break;
      }
      num += 1;
    }
    if (store != 8) {
      test1.push([...FirstHalf_moves.slice(0, store)]);
      test1.push([...FirstHalf_moves.slice(store)]);
    } else {
      test1.push([...FirstHalf_moves]);
      test1.push([]);
    }
  } else {
    test1.push([]);
    test1.push([...FirstHalf_moves]);
  }

  // console.log("test 1 : ", test1);

  if (SecondHalf_moves[0][0] === "a") {
    let num = SecondHalf_moves[0].charCodeAt(0);
    let store = 8;
    for (let i = 1; i < SecondHalf_moves.length; i++) {
      let x = SecondHalf_moves[i].charCodeAt(0);
      if (x !== num + 1) {
        store = i;
        break;
      }
      num += 1;
    }
    if (store !== 8) {
      test2.push([...SecondHalf_moves.slice(0, store)]);
      test2.push([...SecondHalf_moves.slice(store)]);
    } else {
      test2.push([...SecondHalf_moves]);
      test2.push([]);
    }
  } else {
    test2.push([]);
    test2.push([...SecondHalf_moves]);
  }

  test1.forEach((arr) => {
    ArrayOfArray.push([...arr]);
  });
  test2.forEach((arr) => {
    ArrayOfArray.push([...arr]);
  });

  for (let i = 0; i < ArrayOfArray.length; i++) {
    if (i == 0) {
      ArrayOfArray[i].sort((a, b) => {
        return b.localeCompare(a);
      });
    } else if (i == 2) {
      ArrayOfArray[i].sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      });
    }
  }

  // sort the first one in descending, leave second, third sort in decsindg based on letter descinding, leave the fourth one

  return ArrayOfArray;
};

// const findOne = (moves) => {
//   for (let i = 1; i < moves.length; i++) {
//     if (moves[i][1] == "1") {
//       return i - 1;
//     }
//   }
//   return moves.length - 1;
// };

// const findFirstPointOfDiffrence = (arr) => {
//   let fNum = Number(arr[0][1]);
//   for (let i = 1; i < arr.length; i++) {
//     if (Number(arr[i][1]) == fNum + 1) {
//       fNum += 1;
//     } else {
//       return arr.indexOf(arr[i - 1]);
//     }
//   }
//   return arr.length - 1;
// };

export default RookSorter;
