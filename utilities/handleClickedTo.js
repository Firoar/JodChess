import GetMeRequiredClass from "./GetMeRequiredClass.js";
import { ProjectGamePostion } from "./ProjectGamePostion.js";
import handleKing from "./handleKing.js";
import handlePawn from "./handlePawn.js";
import highlight_king from "./highlight_king.js";

const handleClickedTo = (ClickedFrom, ClickedTo, Turn, game_state) => {
  const WhichPiece = GetMeRequiredClass(
    `${Turn}-`,
    ClickedFrom.querySelector("img")
  ).slice(6);

  if (WhichPiece === "king" || WhichPiece === "rook") {
    if (ClickedFrom.querySelector("img").classList.contains("not-moved")) {
      ClickedFrom.querySelector("img").classList.remove("not-moved");
      ClickedFrom.querySelector("img").classList.add("moved");
    }
  }

  // console.log(WhichPiece, " : wp");

  if (WhichPiece === "king") {
    handleKing(ClickedFrom, ClickedTo, Turn, game_state, WhichPiece);
  } else if (WhichPiece === "pawn") {
    handlePawn(ClickedFrom, ClickedTo, Turn, game_state, WhichPiece);
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

    // console.log("jai");

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
export default handleClickedTo;
