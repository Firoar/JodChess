import isSafeFromBishop from "./isSafeFromBishop.js";
import isSafeFromRook from "./isSafeFromRook.js";

const isSafeFromQueen = (color, Index_Of_King, Projected_Game_Position) => {
  // if safe from both rook and bishop then queen safe because queen = bishop+rook;
  const isQueen = true;
  // console.log(
  //   "rook safe : ",
  //   isSafeFromRook(color, Index_Of_King, Projected_Game_Position, isQueen)
  // );

  return (
    isSafeFromBishop(color, Index_Of_King, Projected_Game_Position, isQueen) &&
    isSafeFromRook(color, Index_Of_King, Projected_Game_Position, isQueen)
  );
};
export default isSafeFromQueen;
