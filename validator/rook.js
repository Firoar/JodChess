const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
function rook_moves(position) {
  const mves = [];
  let letter = position[0];
  let number = position[1];
  let index_l = letters.indexOf(letter);
  let index_n = numbers.indexOf(number);

  for (let i = 0; i < numbers.length; i++) {
    if (i != index_n) {
      let s = letter + numbers[i];
      mves.push(s);
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (i != index_l) {
      let s = letters[i] + number;
      mves.push(s);
    }
  }
  return mves;
}

export default rook_moves;
