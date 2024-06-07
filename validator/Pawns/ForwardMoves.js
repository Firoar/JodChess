const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

const ForwardMoves = (letter, number, indexNum, myColor) => {
  let valid_postions = [];
  if (myColor == "white") {
    if (number == "2") {
      valid_postions.push(letter + "3");
      valid_postions.push(letter + "4");
    } else if (indexNum <= 6) {
      valid_postions.push(letter + numbers[indexNum + 1]);
    }
  } else if (myColor == "black") {
    if (number == "7") {
      valid_postions.push(letter + "6");
      valid_postions.push(letter + "5");
    } else if (indexNum >= 1) {
      valid_postions.push(letter + numbers[indexNum - 1]);
    }
  }

  return valid_postions;
};
export default ForwardMoves;
