import isSafeFromAll from "../isSafeFromAll/isSafeFromAll.js";
import CheckForCastling from "./CheckForCastling.js";
import GetMeRequiredClass from "./GetMeRequiredClass.js";
import { STR_TO_INDEX_ARRAY } from "./ProjectGamePostion.js";
import { ProjectGamePostion } from "./ProjectGamePostion.js";
import getPositionOfKing from "./getPositionOfKing.js";

const CheeckSafe = (
  box,
  VALIDMOVES,
  game_state,
  piece,
  color,
  present_cell
) => {
  let final = [];
  const Present_Game_Postion = game_state[game_state.length - 1];
  const Current_Position = GetMeRequiredClass("box_", box).slice(4); // slice(4 ) because box_h2
  // console.log("cp : ", Current_Position);
  // console.log("piece : ", piece, color);
  const Position_Of_King =
    piece !== "king" ? getPositionOfKing(color, Present_Game_Postion) : null;
  // piece !== "king" ? getPositionOfKing(color, Present_Game_Postion) : null;
  // console.log("pk : ", Position_Of_King);
  const Index_Of_King =
    Position_Of_King !== null ? STR_TO_INDEX_ARRAY(Position_Of_King) : null;
  // Position_Of_King !== null ? STR_TO_INDEX_ARRAY(Position_Of_King) : null;
  VALIDMOVES.forEach((move) => {
    const Projected_Game_Position = ProjectGamePostion(
      move,
      Current_Position,
      Present_Game_Postion
    );
    // console.log("p p : ", Present_Game_Postion);
    // console.log(
    //   "move to  : ",
    //   move,
    //   " from : ",
    //   Current_Position,
    //   Projected_Game_Position
    // );
    if (isSafeFromAll(color, Index_Of_King, Projected_Game_Position)) {
      final.push(move);
    }
  });
  if (piece === "king") {
    let CastlingMoves = CheckForCastling(box, color, game_state, present_cell);
    if (CastlingMoves.length !== 0) {
      CastlingMoves.forEach((Element) => {
        final.push(Element["king_movement"].slice(4));
      });
    }
  }
  return final;
};
export default CheeckSafe;
