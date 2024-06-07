import BishopSorter from "../Sorting/BishopSorter.js";
import RookSorter from "../Sorting/RookSorter.js";
import bishop_moves from "./bishop.js";
import rook_moves from "./rook.js";

// combination of both rook and bishop

function queen_moves(position) {
  let mves1 = bishop_moves(position);
  let fromBishop = BishopSorter(mves1); // rray of array

  let mves2 = rook_moves(position);
  let fromRook = RookSorter(mves2); // array of array
  let mves = [fromBishop, fromRook];
  return mves;
}

export default queen_moves;
