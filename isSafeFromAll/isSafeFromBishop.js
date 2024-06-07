const isSafeFromBishop = (
  color,
  Index_Of_King,
  Projected_Game_Position,
  isQueen
) => {
  const Possibilities = [
    ["-1+1", "-2+2", "-3+3", "-4+4", "-5+5", "-6+6", "-7+7"], // top right
    ["-1-1", "-2-2", "-3-3", "-4-4", "-5-5", "-6-6", "-7-7"], // top left
    ["+1-1", "+2-2", "+3-3", "+4-4", "+5-5", "+6-6", "+7-7"], // bottom left
    ["+1+1", "+2+2", "+3+3", "+4+4", "+5-5", "+6+6", "+7+7"], // bottom right
  ];

  let Attacker = color === "white" ? "bB" : "wB";
  if (isQueen) {
    Attacker = color === "white" ? "bQ" : "wQ";
  }
  let i, j;
  if (Index_Of_King) {
    [i, j] = Index_Of_King;
  }

  for (let p = 0; p < Possibilities.length; p++) {
    for (let x = 0; x < Possibilities[p].length; x++) {
      let I = Number(Possibilities[p][x].slice(0, 2));
      let J = Number(Possibilities[p][x].slice(2));

      let m = i + I <= 7 && i + I >= 0 ? i + I : undefined;
      let n = j + J <= 7 && j + J >= 0 ? j + J : undefined;

      if (m !== undefined && n !== undefined) {
        if (Projected_Game_Position[m][n] === "--") {
          continue;
        } else if (Projected_Game_Position[m][n] === Attacker) {
          return false;
        } else {
          break;
        }
      }
    }
  }
  return true;
};
export default isSafeFromBishop;
