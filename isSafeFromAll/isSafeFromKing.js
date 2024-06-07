const isSafeFromKing = (color, Index_Of_King, Projected_Game_Position) => {
  const Possibilities = [
    "+1+0",
    "+1+1",
    "+1-1",
    "-1+0",
    "-1-1",
    "-1+1",
    "+0+1",
    "+0-1",
  ];

  const Attacker = color === "white" ? "bK" : "wK";

  let [i, j] = Index_Of_King;
  for (let p = 0; p < Possibilities.length; p++) {
    {
      let I = Number(Possibilities[p].slice(0, 2));
      let J = Number(Possibilities[p].slice(2));

      let m = i + I <= 7 && i + I >= 0 ? i + I : undefined;
      let n = j + J <= 7 && j + J >= 0 ? j + J : undefined;

      if (m !== undefined && n !== undefined) {
        if (Projected_Game_Position[m][n] === Attacker) {
          return false;
        }
      }
    }
  }
  return true;
};
export default isSafeFromKing;
