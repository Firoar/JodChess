import GetMeRequiredClass from "./GetMeRequiredClass.js";
import { ProjectGamePostion } from "./ProjectGamePostion.js";
import highlight_king from "./highlight_king.js";

const handleWhiteKing = (
  ClickedFrom,
  ClickedTo,
  Turn,
  game_state,
  WhichPiece
) => {
  const ClickedTo_box = GetMeRequiredClass("box_", ClickedTo).slice(4);
  const ClickedFrom_box = GetMeRequiredClass("box_", ClickedFrom).slice(4);
  if (ClickedTo_box === "g1" && ClickedFrom_box == "e1") {
    // king to g1, rook to f1
    ClickedTo.style.backgroundColor = "#ADFF2F"; // green yellow
    ClickedTo.innerHTML = ClickedFrom.innerHTML;
    ClickedFrom.innerHTML = "";
    const RookFrom_h1 = document.querySelector(".box_h1");
    const RookTo_f1 = document.querySelector(".box_f1");
    RookTo_f1.innerHTML = RookFrom_h1.innerHTML;
    RookFrom_h1.innerHTML = "";

    console.log(`castling white king to g1 from e1, white rook to f1 from h1`);

    game_state.push(
      ProjectGamePostion("g1", "e1", game_state[game_state.length - 1], true)
    );
    // console.log("game position : ", game_state[game_state.length - 1]);
  } else if (ClickedTo_box === "c1" && ClickedFrom_box == "e1") {
    // king to c1, rook to d1
    ClickedTo.style.backgroundColor = "#ADFF2F"; // green yellow
    ClickedTo.innerHTML = ClickedFrom.innerHTML;
    ClickedFrom.innerHTML = "";
    const RookFrom_a1 = document.querySelector(".box_a1");
    const RookTo_d1 = document.querySelector(".box_d1");
    RookTo_d1.innerHTML = RookFrom_a1.innerHTML;
    RookFrom_a1.innerHTML = "";

    console.log(`castling white king to c1 from e1, white rook to d1 from a1`);

    game_state.push(
      ProjectGamePostion("c1", "e1", game_state[game_state.length - 1], true)
    );
    // console.log("game position : ", game_state[game_state.length - 1]);
  } else {
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
export default handleWhiteKing;
