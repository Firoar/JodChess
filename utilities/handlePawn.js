import handleBlackPawn from "./handleBlackPawn.js";
import handleWhitePawn from "./handleWhitePawn.js";
const handlePawn = (ClickedFrom, ClickedTo, Turn, game_state, WhichPiece) => {
  if (Turn === "white") {
    handleWhitePawn(ClickedFrom, ClickedTo, Turn, game_state, WhichPiece);
  } else {
    handleBlackPawn(ClickedFrom, ClickedTo, Turn, game_state, WhichPiece);
  }
};
export default handlePawn;
