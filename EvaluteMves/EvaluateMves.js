import Sorter from "../Sorting/Sorter.js";
import { letters, numbers } from "../validator/bishop.js";
import CheckForCastling from "../utilities/CheckForCastling.js";
import BishopSorter from "../Sorting/BishopSorter.js";
import RookSorter from "../Sorting/RookSorter.js";

const EvaluateMves = (piece, mves, OppColor, presentBox, game_state) => {
  let ValidMoves = [];
  // let image = box.querySelector("img");
  // const Marks = [];
  // console.log("piece : ", piece);
  if (piece == "knight") {
    // console.log("mvvesssss : ", mves);
    mves.forEach((ele) => {
      let s = "box_" + ele;
      const b = document.querySelector("." + s);
      if (!b.querySelector("img")) {
        ValidMoves.push(ele);
      } else {
        let image = b.querySelector("img");
        // console.log(image);
        // console.log(OppColor);
        let COLOR = image.classList.contains(`${OppColor}`);
        // .querySelector(`.${OppColor}`)
        // console.log("Colorrrrr:", COLOR);
        if (COLOR) {
          ValidMoves.push(ele);
        }
      }
    });
  } else if (piece == "pawn") {
    let Required_PBox;
    var classes = presentBox.classList;
    for (let i = 0; i < classes.length; i++) {
      if (classes[i].startsWith("box_")) {
        Required_PBox = classes[i].split("_")[1];
        break;
      }
    }
    // console.log("RPB:", Required_PBox);
    // take all the moves
    // first sort sort , like make array of array,and sort them
    // and start from beginning one by one if found obstruction stop there
    const OwnColor = OppColor == "white" ? "black" : "white";
    const MovesArrayOfArray = Sorter(mves, OwnColor);
    // console.log(MovesArrayOfArray);

    MovesArrayOfArray.forEach((arr) => {
      for (let i = 0; i < arr.length; i++) {
        let s = "box_" + arr[i];
        const b = document.querySelector("." + s);
        if (!b.querySelector("img")) {
          ValidMoves.push(arr[i]);
        } else {
          let image = b.querySelector("img");
          // console.log("image_n:", image);
          // console.log(OppColor, image.classList);
          let OppCOLORPawn = image.classList.contains(`${OppColor}`);

          let SameCOLORPawn = image.classList.contains(`${OwnColor}`);

          // console.log(arr[i], SameCOLORPawn, OppCOLORPawn);

          // .querySelector(`.${OppColor}`)
          // console.log("OppCOLOR_PAWN:", OppCOLORPawn, arr[i]);
          if (Required_PBox[0] == arr[i][0]) {
            if (!OppCOLORPawn && !SameCOLORPawn) {
              ValidMoves.push(arr[i]);
            } else {
              break;
            }
          } else {
            if (OppCOLORPawn) {
              ValidMoves.push(arr[i]);
            }
          }
        }
      }
    });
    // console.log("valid Moves testing : ", ValidMoves);
  } else if (piece == "king") {
    const myColor = OppColor === "white" ? "black" : "white";
    mves.forEach((ele) => {
      let s = "box_" + ele;
      const b = document.querySelector("." + s);
      if (!b.querySelector("img")) {
        ValidMoves.push(ele);
      } else {
        let image = b.querySelector("img");
        // console.log(image);
        // console.log(OppColor);
        let COLOR = image.classList.contains(`${OppColor}`);
        // .querySelector(`.${OppColor}`)
        // console.log("Colorrrrr:", COLOR);
        if (COLOR) {
          ValidMoves.push(ele);
        }
      }
    });
  } else if (piece == "bishop") {
    let ArrayOfArray = BishopSorter(mves);
    ArrayOfArray.forEach((arr) => {
      for (let i = 0; i < arr.length; i++) {
        let s = "box_" + arr[i];
        const b = document.querySelector("." + s);
        if (!b.querySelector("img")) {
          ValidMoves.push(arr[i]);
        } else {
          let image = b.querySelector("img");
          // console.log("image_n:", image);
          // console.log(OppColor, image.classList);
          let oppCOLORPawn = image.classList.contains(`${OppColor}`);
          // let samewCOLORPawn=image.classList.contains(`${OwnColor}`);
          // .querySelector(`.${OppColor}`)
          // console.log("OppCOLOR_PAWN:", OppCOLORPawn, arr[i]);
          if (oppCOLORPawn) {
            ValidMoves.push(arr[i]);
            break;
          } else {
            break;
          }
        }
      }
    });
  } else if (piece == "rook") {
    let ArrayOfArray = RookSorter(mves);
    // console.log("frrom rsorter : ", ArrayOfArray);
    ArrayOfArray.forEach((arr) => {
      for (let i = 0; i < arr.length; i++) {
        let s = "box_" + arr[i];
        const b = document.querySelector("." + s);
        if (!b.querySelector("img")) {
          ValidMoves.push(arr[i]);
        } else {
          let image = b.querySelector("img");
          let oppCOLORPawn = image.classList.contains(`${OppColor}`);
          if (oppCOLORPawn) {
            ValidMoves.push(arr[i]);
            break;
          } else {
            break;
          }
        }
      }
    });
    // console.log(mves);
  } else if (piece == "queen") {
    // see queen = bishop +  rook
    // mves = [bishop-ArrayofArray, rook-ArrayofArray]
    let Bishop_ArrayOfArray = mves[0];
    let Rook_ArrayOfArray = mves[1];

    Bishop_ArrayOfArray.forEach((arr) => {
      for (let i = 0; i < arr.length; i++) {
        let s = "box_" + arr[i];
        const b = document.querySelector("." + s);
        if (!b.querySelector("img")) {
          ValidMoves.push(arr[i]);
        } else {
          let image = b.querySelector("img");
          let oppCOLORPawn = image.classList.contains(`${OppColor}`);
          if (oppCOLORPawn) {
            ValidMoves.push(arr[i]);
            break;
          } else {
            break;
          }
        }
      }
    });

    Rook_ArrayOfArray.forEach((arr) => {
      for (let i = 0; i < arr.length; i++) {
        let s = "box_" + arr[i];
        const b = document.querySelector("." + s);
        if (!b.querySelector("img")) {
          ValidMoves.push(arr[i]);
        } else {
          let image = b.querySelector("img");
          let oppCOLORPawn = image.classList.contains(`${OppColor}`);
          if (oppCOLORPawn) {
            ValidMoves.push(arr[i]);
            break;
          } else {
            break;
          }
        }
      }
    });

    // ValidMoves = mves;
  }
  return ValidMoves;
};

export default EvaluateMves;
