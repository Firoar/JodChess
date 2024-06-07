const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

const checkSideAttacks = (indexLet, indexNum, Oppcolor) => {
  let Possible = Oppcolor == "black" ? ["+1+1", "+1-1"] : ["-1-1", "-1+1"];
  let valid_postions = [];

  // this is for if check if there a black pawn to attck  for white and whte pawn to attack for black, whole Pssible.foreach
  Possible.forEach((pos) => {
    const Num = pos.slice(0, 2);
    const Let = pos.slice(2);
    let indN = -1;
    let indL = -1;
    switch (Num) {
      case "+1":
        indN = indexNum + 1 <= 7 ? indexNum + 1 : -1;
        break;
      case "-1":
        indN = indexNum - 1 >= 0 ? indexNum - 1 : -1;
        break;
      case "+0":
        indN = indexNum + 0 <= 7 ? indexNum + 0 : -1;
        break;
    }
    switch (Let) {
      case "+1":
        indL = indexLet + 1 <= 7 ? indexLet + 1 : -1;
        break;
      case "-1":
        indL = indexLet - 1 >= 0 ? indexLet - 1 : -1;
        break;
      case "+0":
        indL = indexLet + 0 <= 7 ? indexLet + 0 : -1;
        break;
    }

    if (indL != -1 && indN != -1) {
      let s = letters[indL] + numbers[indN];
      let box = "box_" + s;
      const b = document.querySelector("." + box);
      if (b) {
        let OppImg = b.querySelector(`img.${Oppcolor}`);
        // console.log(OppImg, " hmm");
        if (OppImg) {
          valid_postions.push(s);
        }
      }
    }
  });
  return valid_postions;
};

export default checkSideAttacks;
