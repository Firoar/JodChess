import GetMeRequiredClass from "./GetMeRequiredClass.js";
import { ProjectGamePostion } from "./ProjectGamePostion.js";
import highlight_king from "./highlight_king.js";

const handleBlackKing = (
  ClickedFrom,
  ClickedTo,
  Turn,
  game_state,
  WhichPiece
) => {
  const ClickedTo_box = GetMeRequiredClass("box_", ClickedTo).slice(4);
  const ClickedFrom_box = GetMeRequiredClass("box_", ClickedFrom).slice(4);
  if (ClickedTo_box === "g8" && ClickedFrom_box === "e8") {
    // king to g8, rook to f8
    ClickedTo.style.backgroundColor = "#ADFF2F"; // green yellow
    ClickedTo.innerHTML = ClickedFrom.innerHTML;
    ClickedFrom.innerHTML = "";
    const RookFrom_h8 = document.querySelector(".box_h8");
    const RookTo_f8 = document.querySelector(".box_f8");
    RookTo_f8.innerHTML = RookFrom_h8.innerHTML;
    RookFrom_h8.innerHTML = "";

    console.log(`castling white king to g8 from e8, white rook to f8 from h8`);

    game_state.push(
      ProjectGamePostion("g8", "e8", game_state[game_state.length - 1], true)
    );
    // console.log("game position : ", game_state[game_state.length - 1]);
  } else if (ClickedTo_box === "c8" && ClickedFrom_box === "e8") {
    // king to c8, rook to d8
    ClickedTo.style.backgroundColor = "#ADFF2F"; // green yellow
    ClickedTo.innerHTML = ClickedFrom.innerHTML;
    ClickedFrom.innerHTML = "";
    const RookFrom_a8 = document.querySelector(".box_a8");
    const RookTo_d8 = document.querySelector(".box_d8");
    RookTo_d8.innerHTML = RookFrom_a8.innerHTML;
    RookFrom_a8.innerHTML = "";

    console.log(`castling white king to c8 from e8, white rook to d8 from a8`);

    game_state.push(
      ProjectGamePostion("c8", "e8", game_state[game_state.length - 1], true)
    );
    // console.log("game position : ", game_state[game_state.length - 1]);
  } // till here
  else {
    ClickedTo.innerHTML = ClickedFrom.innerHTML;
    ClickedFrom.innerHTML = "";

    //

    // now important part - update game state
    let FuturePosition = GetMeRequiredClass("box_", ClickedTo).slice(4);
    let PresentPosition = GetMeRequiredClass("box_", ClickedFrom).slice(4);
    console.log(
      `${Turn} ${WhichPiece}`,
      "from : ",
      PresentPosition,
      " to : ",
      FuturePosition
    );

    game_state.push(
      ProjectGamePostion(
        FuturePosition,
        PresentPosition,
        game_state[game_state.length - 1]
      )
    );
    // console.log("game position : ", game_state[game_state.length - 1]);
    highlight_king(false, Turn, game_state[game_state.length - 1], undefined);
  }
};
export default handleBlackKing;
