const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

function horse_moves(position) {
  const valid_postions = [];
  let letter = position[0];
  let number = position[1];
  const indexNum = numbers.indexOf(number);
  const indexLet = letters.indexOf(letter);

  const Possible = [
    "+2+1",
    "+1+2",
    "-1+2",
    "-2+1",
    "-2-1",
    "-1-2",
    "+1-2",
    "+2-1",
  ];

  Possible.forEach((pos) => {
    const Num = pos.slice(0, 2);
    const Let = pos.slice(2);
    let indN = -1;
    let indL = -1;

    switch (Num) {
      case "+2":
        indN = indexNum + 2 <= 7 ? indexNum + 2 : -1;
        break;
      case "-2":
        indN = indexNum - 2 >= 0 ? indexNum - 2 : -1;
        break;
      case "+1":
        indN = indexNum + 1 <= 7 ? indexNum + 1 : -1;
        break;
      case "-1":
        indN = indexNum - 1 >= 0 ? indexNum - 1 : -1;
        break;
    }

    switch (Let) {
      case "+2":
        indL = indexLet + 2 <= 7 ? indexLet + 2 : -1;
        break;
      case "-2":
        indL = indexLet - 2 >= 0 ? indexLet - 2 : -1;
        break;
      case "+1":
        indL = indexLet + 1 <= 7 ? indexLet + 1 : -1;
        break;
      case "-1":
        indL = indexLet - 1 >= 0 ? indexLet - 1 : -1;
        break;
    }

    if (indL != -1 && indN != -1) {
      let s = letters[indL] + numbers[indN];
      valid_postions.push(s);
    }
  });
  return valid_postions;
}

export default horse_moves;
