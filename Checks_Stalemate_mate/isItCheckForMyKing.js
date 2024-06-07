import isSafeFromAll from "../isSafeFromAll/isSafeFromAll.js";
import { STR_TO_INDEX_ARRAY } from "../utilities/ProjectGamePostion.js";
import getPositionOfKing from "../utilities/getPositionOfKing.js";

const isItCheckForMyKing = (color, game_position) => {
  // now I have To find index of my king
  const MyKingPosition = getPositionOfKing(color, game_position); // will return a1 d4 or whateer the position my king is
  const MyKingIndex = STR_TO_INDEX_ARRAY(MyKingPosition); // will return an array [i,j] => [number , letter]

  //   console.log(
  //     `${color} king position : `,
  //     MyKingPosition,
  //     `${color} king index : `,
  //     MyKingIndex
  //   );
  let z = [isSafeFromAll(color, MyKingIndex, game_position), MyKingPosition]; // [bool , string]
  //isSafeFromAll returns true if no check , else false, but we have reply true if there is check , so we have to send compliment of z
  //   console.log("verdict : ", z);

  return z; // this will return true if no checks else false;
};
export default isItCheckForMyKing;
