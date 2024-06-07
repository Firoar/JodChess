import getPositionOfKing from "./getPositionOfKing.js";

const highlight_king = (doIt, color, game_position, KingPos) => {
  const King_Pos =
    KingPos === undefined ? getPositionOfKing(color, game_position) : KingPos; // will return h2 or b6 etc..
  if (doIt) {
    // add class highlight_king
    document
      .querySelector(`.box_${King_Pos}`)
      .querySelector("img")
      .classList.add("highlight_king");
  } else {
    // remove class highlight_king
    document
      .querySelector(`.box_${King_Pos}`)
      .querySelector("img")
      .classList.remove("highlight_king");
  }
};
export default highlight_king;
