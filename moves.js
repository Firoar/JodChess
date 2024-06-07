import highlighter from "./utilities/highlighter.js";
import bishop_moves from "./validator/bishop.js";
import king_moves from "./validator/king.js";
import horse_moves from "./validator/horse.js";
import rook_moves from "./validator/rook.js";
import queen_moves from "./validator/queen.js";
import pawn_moves from "./validator/pawn.js";
import original_color from "./original_color.js";
import GetMeRequiredClass from "./utilities/GetMeRequiredClass.js";
import { ProjectGamePostion } from "./utilities/ProjectGamePostion.js";
import isItCheckForMyKing from "./Checks_Stalemate_mate/isItCheckForMyKing.js";
import highlight_king from "./utilities/highlight_king.js";
import isThereaMovePossible from "./Checks_Stalemate_mate/isThereaMovePossible.js";
import handleClickedTo from "./utilities/handleClickedTo.js";
import CheckForPawnPromotion from "./Promotion/CheckForPawnPromotion.js";
import checkForPawnPromotionAndHandleModal from "./Promotion/checkForPawnPromotionAndHandleModal.js";
import arrangePieces from "./arrangePieces.js";

original_color();
arrangePieces();
const boxes = document.querySelectorAll(".box");

const game_state = [
  [
    // this is the instaill position of the new game
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
  ],
]; // this will store image o the game
const enpassnt_history = [];
let BlueBoxes = [];

let Turn = "white"; // as the game begins with white
// let Tell_me_when_there_is_a_check = [];

function RunGame() {
  boxes.forEach((box) => {
    box.addEventListener("click", async (event) => {
      /////////////////////
      original_color(); // chnaging to original color of board i.e clearing the selected red mark
      //////////////////////////

      let i = box.querySelector("img");
      if (box.querySelector("img") && i.classList.contains(Turn)) {
        /// i should check for checks//
        // ifItCheckForMyKing(color,game_state[game_state.length-1])//   sen the color and last game state

        // console.log(box.classList);
        // arr.push(box);
        box.style.backgroundColor = "pink";
        let image = box.querySelector("img");
        // console.log(image.classList);

        // bishop
        if (image.classList.contains(`${Turn}-bishop`)) {
          let ColorOfSlectedPiece = image.classList.contains("white-bishop")
            ? "white"
            : "black";
          BlueBoxes = highlighter(
            box,
            bishop_moves,
            ColorOfSlectedPiece,
            game_state,
            enpassnt_history
          )[0];
          BlueBoxes.push(box);
        }

        // rook
        else if (image.classList.contains(`${Turn}-rook`)) {
          let ColorOfSlectedPiece = image.classList.contains("white-rook")
            ? "white"
            : "black";
          BlueBoxes = highlighter(
            box,
            rook_moves,
            ColorOfSlectedPiece,
            game_state,
            enpassnt_history
          )[0];
          BlueBoxes.push(box);
        }

        // queen
        else if (image.classList.contains(`${Turn}-queen`)) {
          let ColorOfSlectedPiece = image.classList.contains("white-queen")
            ? "white"
            : "black";
          BlueBoxes = highlighter(
            box,
            queen_moves,
            ColorOfSlectedPiece,
            game_state,
            enpassnt_history
          )[0];
          BlueBoxes.push(box);
        }

        // horse
        else if (image.classList.contains(`${Turn}-knight`)) {
          let ColorOfSlectedPiece = image.classList.contains("white-knight")
            ? "white"
            : "black";
          BlueBoxes = highlighter(
            box,
            horse_moves,
            ColorOfSlectedPiece,
            game_state,
            enpassnt_history
          )[0];
          BlueBoxes.push(box);
        }

        // king
        else if (image.classList.contains(`${Turn}-king`)) {
          let ColorOfSlectedPiece = image.classList.contains("white-king")
            ? "white"
            : "black";
          BlueBoxes = highlighter(
            box,
            king_moves,
            ColorOfSlectedPiece,
            game_state,
            enpassnt_history
          )[0];
          BlueBoxes.push(box);
          // console.log(arr);
        }

        // pawn
        else if (image.classList.contains(`${Turn}-pawn`)) {
          BlueBoxes = highlighter(
            box,
            pawn_moves,
            Turn,
            game_state,
            enpassnt_history
          )[0];
          BlueBoxes.push(box);
        }

        // white-pawn
        // else if (image.classList.contains(`${Turn}-pawn`)) {
        //   BlueBoxes = highlighter(
        //     box,
        //     pawn_moves,
        //     "white",
        //     game_state,
        //     enpassnt_history
        //   );
        //   BlueBoxes.push(box);
        //   // console.log(BlueBoxes);
        //   // document.addEventListener("click", (event) =>
        //   //   HandleClick(event, BlueBoxes)
        //   // );
        // }

        ////////////////////////////////////////
      } else {
        //

        let ClickedFrom = BlueBoxes[BlueBoxes.length - 1];
        let ClickedTo = getMeClickedTo(event, BlueBoxes);

        if (ClickedTo) {
          //
          handleClickedTo(ClickedFrom, ClickedTo, Turn, game_state);

          // console.log("game last state : ", game_state[game_state.length - 1]);
          // CheckForPromotion
          // if (CheckForPawnPromotion(game_state, Turn)[0]) {
          //   var modal = document.getElementById("myModal");
          //   modal.style.display = "block";
          //   var modalButtons = document.getElementsByClassName("modal-button");
          //   for (let button of modalButtons) {
          //     button.addEventListener("click", function handleButtonClick() {
          //       console.log(`You clicked ${button.textContent}`);
          //       modal.style.display = "none";
          //     });
          //   }
          // }
          await checkForPawnPromotionAndHandleModal(game_state, Turn);
          // console.log("closed modal : ", Turn);

          Turn = Turn === "white" ? "black" : "white";
          // console.log("after  : ", Turn);
          // now check is there a check
          let Checking_for_Checks_Array = isItCheckForMyKing(
            Turn,
            game_state[game_state.length - 1]
          );
          // console.log(
          //   "before  : ",
          //   Checking_for_Checks_Array,
          //   game_state[game_state.length - 1]
          // );
          if (!Checking_for_Checks_Array[0]) {
            //  game_state[game_state.length - 1]) because it was updated just above
            console.log(`There is check for ${Turn} king`);
            const KingPos = Checking_for_Checks_Array[1];
            highlight_king(
              true,
              Turn,
              game_state[game_state.length - 1],
              KingPos
            );
            if (!isThereaMovePossible(game_state, Turn, enpassnt_history)) {
              // console.log(`No more moves possible  :(  ${Turn} is checkamted`);
              const winner = Turn === "white" ? "black" : "white";
              original_color();
              alert(`${Turn} is checkmated !!!\n${winner} wins :)`);
            }
          } else {
            // console.log(`No , no check for ${Turn} king`);
            if (!isThereaMovePossible(game_state, Turn, enpassnt_history)) {
              original_color();
              alert(`Stale,mate !!!\nDraw`);
            }
            // Tell_me_when_there_is_a_check = [];
          }

          //
        } else {
          console.log("no");
          BlueBoxes.length = 0;
          // original_color(Tell_me_when_there_is_a_check);
        }

        BlueBoxes.length = 0;
      }
    });
  });
}
function getMeClickedTo(event, BlueBoxes) {
  let clicked = event.target;

  if (clicked.tagName.toLowerCase() === "img") {
    clicked = clicked.closest(".box");
  }

  for (let i = 0; i < BlueBoxes.length - 1; i++) {
    if (clicked === BlueBoxes[i]) {
      return clicked;
    }
  }
  return undefined;
}

RunGame();

/*

 // if (BlueBoxes.length > 1) {
      //   // that means there possiblity of move
      //   // console.log("blue boxes : ", BlueBoxes);
      //   // console.log(
      //   //   "oroginal position(clicked from) : ",
      //   //   BlueBoxes[BlueBoxes.length - 1]
      //   // );
      //   let ClickedFrom = BlueBoxes[BlueBoxes.length - 1];
      //   // let ClickedTo = HandleClick(event, BlueBoxes, box);
      //   if (ClickedTo) {
      //     const OldImage = ClickedFrom.querySelector("img");
      //     const color = OldImage.classList.contains("white")
      //       ? "white"
      //       : "black";
      //     const Which_Image = GetMeTheRequiredClass(`${color}-`, OldImage);

      //     const newImage = document.createElement("img");
      //     newImage.src = `./assets/${Which_Image}.png`;
      //     newImage.classList = OldImage.classList;

      //     // console.log(
      //     //   ClickedFrom.querySelector("img").src,
      //     //   ClickedFrom.querySelector("img").src.length
      //     // );

      //     console.log("b:", ClickedFrom.innerHTML, ClickedTo.innerHTML);
      //     console.log(ClickedFrom.classList, ClickedTo.classList);

      //     ClickedTo.innerHTML = "";

      //     // ClickedTo.insertAdjacentHTML("beforeend", `${ClickedFrom.innerHTML}`);
      //     // let image = ClickedFrom.querySelector("img");
      //     ClickedTo.appendChild(newImage);
      //     ClickedTo.insertAdjacentHTML("beforeend", `${newImage}`);
      //     ClickedFrom.innerHTML = "";
      //     console.log(ClickedFrom.innerHTML, ClickedTo.innerHTML);

      //     if (ClickedTo.querySelector("img")) {
      //       console.log("its there");
      //     }

      //     // here u just handle
      //     // updating game state
      //     // changing the images
      //     // original_color();
      //     BlueBoxes.length = 0;
      //   }
      // } else {
      //   console.log(box);
      //   console.log("ohhh");
      // }

      // shd be done only after given valid moves

      //   let last_box = arr[arr.length - 1];
      //   let present_box = box;
      //   let img = last_box.querySelector("img");
      //   last_box.removeChild(img);
      //   last_box.classList.remove("has_img");
      //   present_box.appendChild(img);
      //   present_box.classList.add("has_img");

*/
