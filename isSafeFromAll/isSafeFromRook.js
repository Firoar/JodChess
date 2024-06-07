const isSafeFromRook = (
  color,
  Index_Of_King,
  Projected_Game_Position,
  isQueen
) => {
  const Possibilities = [
    ["+0+1", "+0+2", "+0+3", "+0+4", "+0+5", "+0+6", "+0+7"], // right
    ["+0-1", "+0-2", "+0-3", "+0-4", "+0-5", "+0-6", "+0-7"], // left
    ["+1+0", "+2+0", "+3+0", "+4+0", "+5+0", "+6+0", "+7+0"], //bottom
    ["-1+0", "-2+0", "-3+0", "-4+0", "-5+0", "-6+0", "-7+0"], //top
  ];

  let Attacker = color === "white" ? "bR" : "wR";
  if (isQueen) {
    Attacker = color === "white" ? "bQ" : "wQ";
  }
  // console.log("my attacker : ", Attacker);

  let [i, j] = Index_Of_King;
  // console.log("id : ", Index_Of_King, Projected_Game_Position);
  for (let p = 0; p < 4; p++) {
    for (let x = 0; x < 7; x++) {
      let I = Number(Possibilities[p][x].slice(0, 2));
      let J = Number(Possibilities[p][x].slice(2));

      // console.log("om : ", i + I, j + J);
      let m = i + I <= 7 && i + I >= 0 ? i + I : null;
      let n = j + J <= 7 && j + J >= 0 ? j + J : null;
      // console.log("om 2: ", m, n);
      if (m !== null && n !== null) {
        // console.log(m, n, Projected_Game_Position[m][n]);
        if (Projected_Game_Position[m][n] === "--") {
          // console.log("-- : ", m, n);
          continue;
        } else if (Projected_Game_Position[m][n] == Attacker) {
          // console.log(`${Attacker} at  : `, m, n);
          return false;
        } else {
          // console.log(Projected_Game_Position[m][n], "hmmmmmm");
          break;
        }
      }
    }
  }
  return true;
};
export default isSafeFromRook;
