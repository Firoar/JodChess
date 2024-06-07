import { STR_TO_INDEX_ARRAY } from "../utilities/ProjectGamePostion.js";
import getPositionOfKing from "../utilities/getPositionOfKing.js";
import isSafeFromBishop from "./isSafeFromBishop.js";
import isSafeFromKing from "./isSafeFromKing.js";
import isSafeFromKnight from "./isSafeFromKnight.js";
import isSafeFromPawn from "./isSafeFromPawn.js";
import isSafeFromQueen from "./isSafeFromQueen.js";
import isSafeFromRook from "./isSafeFromRook.js";

const isSafeFromAll = (color, Index_Of_King, Projected_Game_Position) => {
  if (Index_Of_King === null) {
    const getNewPositionOfKing = getPositionOfKing(
      color,
      Projected_Game_Position
    );
    Index_Of_King = STR_TO_INDEX_ARRAY(getNewPositionOfKing);
  }

  if (
    isSafeFromBishop(color, Index_Of_King, Projected_Game_Position) &&
    isSafeFromRook(color, Index_Of_King, Projected_Game_Position) &&
    isSafeFromKing(color, Index_Of_King, Projected_Game_Position) &&
    isSafeFromKnight(color, Index_Of_King, Projected_Game_Position) &&
    isSafeFromPawn(color, Index_Of_King, Projected_Game_Position) &&
    isSafeFromQueen(color, Index_Of_King, Projected_Game_Position)
  ) {
    return true;
  }
  return false;
};
export default isSafeFromAll;

/*


  console.log(
    "checking => (bishop) :",
    isSafeFromBishop(
      move,
      Current_Position,
      box,
      game_state,
      color,
      Position_Of_King,
      Index_Of_King,
      Projected_Game_Position
    ),
    Projected_Game_Position
  );

  console.log(
    "checking => (rook) :",
    isSafeFromRook(
      move,
      Current_Position,
      box,
      game_state,
      color,
      Position_Of_King,
      Index_Of_King,
      Projected_Game_Position
    ),
    Projected_Game_Position
  );

  console.log(
    "checking => (pawn) :",
    isSafeFromPawn(
      move,
      Current_Position,
      box,
      game_state,
      color,
      Position_Of_King,
      Index_Of_King,
      Projected_Game_Position
    ),
    Projected_Game_Position
  );

  console.log(
    "checking => (king) :",
    isSafeFromKing(
      move,
      Current_Position,
      box,
      game_state,
      color,
      Position_Of_King,
      Index_Of_King,
      Projected_Game_Position
    ),
    Projected_Game_Position
  );

  console.log(
    "checking => (knight) :",
    isSafeFromKnight(
      move,
      Current_Position,
      box,
      game_state,
      color,
      Position_Of_King,
      Index_Of_King,
      Projected_Game_Position
    ),
    Projected_Game_Position
  );

  console.log(
    "checking => (queen) :",
    isSafeFromQueen(
      move,
      Current_Position,
      box,
      game_state,
      color,
      Position_Of_King,
      Index_Of_King,
      Projected_Game_Position
    ),
    Projected_Game_Position
  );


*/
