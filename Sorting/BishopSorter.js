import { numbers, letters } from "../validator/bishop.js";

const BishopSorter = (moves) => {
  const ArrayOfArray = [];
  let arr = [];

  moves.forEach((ele) => {
    let letter = ele[0];
    let number = ele[1];
    const indexNum = numbers.indexOf(number);
    const indexLet = letters.indexOf(letter);
    if (indexNum == 7 || indexNum == 0 || indexLet == 7 || indexLet == 0) {
      arr.push(ele);

      ArrayOfArray.push([...arr]);

      arr.length = 0;
    } else {
      arr.push(ele);
    }
  });

  return ArrayOfArray;
};

export default BishopSorter;
