// import CheckSafe from "./CheckSafe.js";
// import EvaluateMves from "./EvaluateMves.js";

import EvaluateMves from "../EvaluteMves/EvaluateMves.js";
import CheeckSafe from "./CheeckSafe.js";

function highlighter(box, func, color, game_state, enpassnt_history, checker) {
  let box_class_list = box.classList;
  let image = box.querySelector("img");
  let ImageClassList = image.classList;
  let piece;
  for (let i = 0; i < ImageClassList.length; i++) {
    if (
      ImageClassList[i].startsWith("black-") ||
      ImageClassList[i].startsWith("white-")
    ) {
      piece = ImageClassList[i].split("-")[1];
      break;
    }
  }

  let OppColor = color == "white" ? "black" : "white";
  let present_cell;
  box_class_list.forEach((cl) => {
    if (cl.startsWith("box_")) {
      present_cell = cl;
      present_cell = present_cell.split("_")[1];
    }
  });

  let mves = func(present_cell, color, game_state, enpassnt_history); // this func will return the blue higisghetd moves

  const VALIDMOVES = EvaluateMves(piece, mves, OppColor, box, game_state);
  // console.log("VM : ", VALIDMOVES);

  // there is more layerof diltering required, check filtering
  const Pure_VALIDMOVES = CheeckSafe(
    box,
    VALIDMOVES,
    game_state,
    piece,
    color,
    present_cell
  );

  // this mves just has all possible and valid moves
  // now i have evaluate this mves if this is valid or not
  // mves = VALIDMOVES.length == 0 ? mves : VALIDMOVES;
  //   console.log(mves);
  const BlueBoxes = [];

  if (!checker) {
    // this checker is important because we use highlighter in 2 places => 1) to generate moves
    // 2) to check if there is move possible(stalemate) => so in 2) place we dont want to highlight it thats why we pass true as last argument
    Pure_VALIDMOVES.forEach((m) => {
      let s = "box_" + m;
      // console.log(s);
      const b = document.querySelector("." + s);
      // console.log(b);
      b.style.backgroundColor = "blue";
      BlueBoxes.push(b);
    });
  }

  return [BlueBoxes, Pure_VALIDMOVES];
}

export default highlighter;
