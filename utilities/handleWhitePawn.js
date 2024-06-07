import GetMeRequiredClass from "./GetMeRequiredClass.js";
import {
  ProjectGamePostion,
  STR_TO_INDEX_ARRAY,
} from "./ProjectGamePostion.js";
import highlight_king from "./highlight_king.js";
export const INDEX_TO_STR = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
};
const Required_boxes = ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"];
const Destination_boxes = ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"];

const handleWhitePawn = (
  ClickedFrom,
  ClickedTo,
  Turn,
  game_state,
  WhichPiece
) => {
  //   debugger;
  const ClickedFrom_IMAGE = ClickedFrom.querySelector("img");
  //   const ClickedTo_IMAGE = ClickedFrom.querySelector("img");
  const ClickedFrom_box = GetMeRequiredClass("box_", ClickedFrom).slice(4);
  const ClickedTo_box = GetMeRequiredClass("box_", ClickedTo).slice(4);
  const newDestination_boxes = Destination_boxes.filter((box) => {
    return box[0] !== ClickedFrom_box[0];
  });

  if (
    Required_boxes.includes(ClickedFrom_box) &&
    newDestination_boxes.includes(ClickedTo_box) &&
    !ClickedTo.querySelector("img")
  ) {
    const LeftSide =
      STR_TO_INDEX_ARRAY(ClickedFrom_box)[1] >= 1
        ? document.querySelector(
            ".box_" +
              INDEX_TO_STR[String(STR_TO_INDEX_ARRAY(ClickedFrom_box)[1] - 1)] +
              ClickedFrom_box[1]
          )
        : null;

    const RightSide =
      STR_TO_INDEX_ARRAY(ClickedFrom_box)[1] <= 6
        ? document.querySelector(
            ".box_" +
              INDEX_TO_STR[String(STR_TO_INDEX_ARRAY(ClickedFrom_box)[1] + 1)] +
              ClickedFrom_box[1]
          )
        : null;

    const LeftSide_box =
      LeftSide !== null ? GetMeRequiredClass("box_", LeftSide).slice(4) : null;
    const RightSide_box =
      RightSide !== null
        ? GetMeRequiredClass("box_", RightSide).slice(4)
        : null;
    if (LeftSide_box !== null && LeftSide_box[0] === ClickedTo_box[0]) {
      // left side
      // update count of pawn
      const CountClass = GetMeRequiredClass("count", ClickedFrom_IMAGE);
      ClickedFrom_IMAGE.classList.remove(CountClass);
      const Count = CountClass.slice(6);
      ClickedFrom_IMAGE.classList.add(`count-${Number(Count) + 1}`);
      //
      ClickedTo.innerHTML = ClickedFrom.innerHTML;
      ClickedFrom.innerHTML = "";
      LeftSide.innerHTML = "";
      let FuturePosition = ClickedTo_box;
      let PresentPosition = ClickedFrom_box;
      console.log(
        `${Turn} ${WhichPiece}`,
        "from : ",
        PresentPosition,
        " to : ",
        FuturePosition,
        " left Enpassant"
      );
      game_state.push(
        ProjectGamePostion(
          FuturePosition,
          PresentPosition,
          game_state[game_state.length - 1],
          false, //
          true,
          LeftSide_box
        )
      );
      highlight_king(false, Turn, game_state[game_state.length - 1], undefined);
      //   console.log(ClickedTo.querySelector("img"));
    } else if (
      RightSide_box !== null &&
      RightSide_box[0] === ClickedTo_box[0]
    ) {
      // right side
      // update count of pawn
      const CountClass = GetMeRequiredClass("count", ClickedFrom_IMAGE);
      ClickedFrom_IMAGE.classList.remove(CountClass);
      const Count = CountClass.slice(6);
      ClickedFrom_IMAGE.classList.add(`count-${Number(Count) + 1}`);
      //
      ClickedTo.innerHTML = ClickedFrom.innerHTML;
      ClickedFrom.innerHTML = "";

      RightSide.innerHTML = "";
      let FuturePosition = ClickedTo_box;
      let PresentPosition = ClickedFrom_box;
      console.log(
        `${Turn} ${WhichPiece}`,
        "from : ",
        PresentPosition,
        " to : ",
        FuturePosition,
        " right Enpassant"
      );
      game_state.push(
        ProjectGamePostion(
          FuturePosition,
          PresentPosition,
          game_state[game_state.length - 1],
          false,
          true,
          RightSide_box
        )
      );
      // important things update step and count
      highlight_king(false, Turn, game_state[game_state.length - 1], undefined);
      //   console.log(ClickedTo.querySelector("img"));
    }
  } else {
    // continue the normal

    // update count+steps
    if (ClickedFrom_IMAGE.classList.contains("steps-0")) {
      ClickedFrom_IMAGE.classList.remove(`steps-0`);
      if (ClickedTo_box[1] === "4" && ClickedFrom_box[1] === "2") {
        // console.log(ClickedTo_box);
        ClickedFrom_IMAGE.classList.add("steps-2");
      } else {
        ClickedFrom_IMAGE.classList.add("steps-1");
      }
    }

    const CountClass = GetMeRequiredClass("count", ClickedFrom_IMAGE);
    ClickedFrom_IMAGE.classList.remove(CountClass);
    const Count = CountClass.slice(6);
    ClickedFrom_IMAGE.classList.add(`count-${Number(Count) + 1}`);
    //
    ClickedTo.innerHTML = ClickedFrom.innerHTML;
    ClickedFrom.innerHTML = "";

    //

    // now important part - update game state
    let FuturePosition = ClickedTo_box;
    let PresentPosition = ClickedFrom_box;
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
    // console.log(ClickedTo.querySelector("img"));
  }
};

export default handleWhitePawn;
