import handleBlackKing from "./handleBlackKing.js";
import handleWhiteKing from "./handleWhiteKing.js";

const handleKing = (ClickedFrom, ClickedTo, Turn, game_state, WhichPiece) => {
  if (Turn === "white") {
    handleWhiteKing(ClickedFrom, ClickedTo, Turn, game_state, WhichPiece);
  } else {
    handleBlackKing(ClickedFrom, ClickedTo, Turn, game_state, WhichPiece);
  }
};
export default handleKing;
