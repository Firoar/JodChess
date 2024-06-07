// thi is important for
// if there is a check and there is no more moves possible => checkmate
// if there is no check but there is no more moves possible => stalemate => draw
import { DICTIONARY } from "../utilities/getPositionOfKing.js";
import bishop_moves from "../validator/bishop.js";
import king_moves from "../validator/king.js";
import horse_moves from "../validator/horse.js";
import rook_moves from "../validator/rook.js";
import queen_moves from "../validator/queen.js";
import pawn_moves from "../validator/pawn.js";
import highlighter from "../utilities/highlighter.js";

const PIECES = {
  P: pawn_moves,
  Q: queen_moves,
  R: rook_moves,
  N: horse_moves,
  K: king_moves,
  B: bishop_moves,
};

const isThereaMovePossible = (game_state, color, enpassnt_history) => {
  // first thing first, get me position all available pawns;
  const TypeOfPiece = color === "white" ? "w" : "b";
  const AvailablePiecesPosition = []; // this a array of object => [ {Position : "h1", type_of_piece : "knight" }]
  const Game_Position = game_state[game_state.length - 1];
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if (Game_Position[i][j].startsWith(TypeOfPiece)) {
        let str = String(i) + "," + String(j);

        let Position = DICTIONARY[str];
        // console.log(Game_Position[i][j], str, Position);
        AvailablePiecesPosition.push({
          Position: Position,
          type_of_piece: Game_Position[i][j][1],
        });
      }
    }
  }

  for (let i = 0; i < AvailablePiecesPosition.length; i++) {
    let box = document.querySelector(
      `.box_${AvailablePiecesPosition[i]["Position"]}`
    );
    let func = PIECES[AvailablePiecesPosition[i]["type_of_piece"]];
    // console.log("boxy : ", box, " funcy : ", func);
    let arr = highlighter(box, func, color, game_state, enpassnt_history, true);
    // arr=[BlueBoxes, Pure_VALIDMOVES ] => i want to know if there a valid moves present
    // if present return true(no stalemate or checkmate) else it is stalemate or checkmate
    // console.log(arr);
    if (arr[1].length !== 0) {
      return true; // moves are posiible
    }
  }
  return false; // no more moves possible
};
export default isThereaMovePossible;
