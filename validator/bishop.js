export const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

function bishop_moves(position) {
  const valid_postions = [];
  let letter = position[0];
  let number = position[1];
  let index_l = letters.indexOf(letter);
  let index_n = numbers.indexOf(number);

  let back_l = index_l,
    back_n = index_n;
  while ((back_l >= 0) & (back_n >= 0)) {
    if ((back_l !== index_l) & (back_n !== index_n)) {
      let s = letters[back_l] + numbers[back_n];
      valid_postions.push(s);
    }
    back_l -= 1;
    back_n -= 1;
  }
  let front_l = index_l,
    front_n = index_n;
  while ((front_l <= 7) & (front_n <= 7)) {
    if ((front_l !== index_l) & (front_n !== index_n)) {
      let s = letters[front_l] + numbers[front_n];
      valid_postions.push(s);
    }
    front_l += 1;
    front_n += 1;
  }
  back_l = index_l;
  back_n = index_n;
  while ((back_n <= 7) & (back_l >= 0)) {
    if ((back_l !== index_l) & (back_n !== index_n)) {
      let s = letters[back_l] + numbers[back_n];
      valid_postions.push(s);
    }
    back_l -= 1;
    back_n += 1;
  }

  front_l = index_l;
  front_n = index_n;
  while ((front_l <= 7) & (front_n >= 0)) {
    if ((front_l !== index_l) & (front_n !== index_n)) {
      let s = letters[front_l] + numbers[front_n];
      valid_postions.push(s);
    }
    front_l += 1;
    front_n -= 1;
  }

  return valid_postions;
}

export default bishop_moves;
