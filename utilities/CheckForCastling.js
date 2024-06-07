// rules of castling
// 1) both rook and king must not have moved
// 2) there is a vacant places between them
// 3) the king should not be checked
// 4) the vacant places should also not be in check

import isSafeFromAll from "../isSafeFromAll/isSafeFromAll.js";
import GetMeRequiredClass from "./GetMeRequiredClass.js";
import { STR_TO_INDEX_ARRAY } from "./ProjectGamePostion.js";

// requirement => 1) box which contains king  , if that is provided everthing else can be figured out 2) Color
const CheckForCastling = (KingsBox, Color, game_state, present_cell) => {
  let CastlingMoves = [];
  const Current_Game_Position = game_state[game_state.length - 1];
  const Position = present_cell;
  const ImageElement = KingsBox.querySelector("img");
  if (Color === "white" && Position == "e1") {
    // then most probably it hasnt moved

    // checking if king have moved or not
    if (ImageElement.classList.contains("not-moved")) {
      // checking if the kings is under check

      if (!ImageElement.classList.contains("highlight_king")) {
        // king is in check if it contains highlight_king

        // checking if there is vacant boxes
        // kings side => f1 , g1
        // queen's side => d1 c1 b1
        const box_f1 = document.querySelector(`.box_f1`);
        const box_g1 = document.querySelector(`.box_g1`);

        const box_d1 = document.querySelector(`.box_d1`);
        const box_c1 = document.querySelector(`.box_c1`);
        const box_b1 = document.querySelector(`.box_b1`);

        // going left side
        if (!box_f1.querySelector("img") && !box_g1.querySelector("img")) {
          // no image means empty

          // now we check if h1 has rook
          // const box_h1 = document.querySelector(`.box_h1`);
          const box_h1_ImageElement = document
            .querySelector(`.box_h1`)
            .querySelector("img");

          if (
            box_h1_ImageElement &&
            box_h1_ImageElement.classList.contains("white-rook")
          ) {
            // the rook is present

            // now final check has rook moved
            if (box_h1_ImageElement.classList.contains("not-moved")) {
              // all this filters are less time taking, now comes the most time taking
              // one more thing is we check is there a check on f1 and g1
              const Index_of_f1 = STR_TO_INDEX_ARRAY("f1");
              const Index_of_g1 = STR_TO_INDEX_ARRAY("g1");

              if (
                isSafeFromAll("white", Index_of_f1, Current_Game_Position) &&
                isSafeFromAll("white", Index_of_g1, Current_Game_Position)
              ) {
                // elgible for white's king side castling
                CastlingMoves.push({
                  king_movement: "e1TOg1",
                  rook_movement: "h1TOf1",
                });
                console.log(`${Color} possible kings side`);
              }
            }
          }
        }

        // going right side
        if (
          !box_d1.querySelector("img") &&
          !box_c1.querySelector("img") &&
          !box_b1.querySelector("img")
        ) {
          // no image means empty
          // now we check if a1 has rook
          // const box_a1 = document.querySelector(`.box_a1`);
          const box_a1_ImageElement = document
            .querySelector(`.box_a1`)
            .querySelector("img");

          if (
            box_a1_ImageElement &&
            box_a1_ImageElement.classList.contains("not-moved")
          ) {
            const Index_of_d1 = STR_TO_INDEX_ARRAY("d1");
            const Index_of_c1 = STR_TO_INDEX_ARRAY("c1");
            const Index_of_b1 = STR_TO_INDEX_ARRAY("b1");

            if (
              isSafeFromAll("white", Index_of_d1, Current_Game_Position) &&
              isSafeFromAll("white", Index_of_c1, Current_Game_Position) &&
              isSafeFromAll("white", Index_of_b1, Current_Game_Position)
            ) {
              // eligible for white's quuen side castling
              CastlingMoves.push({
                king_movement: "e1TOc1",
                rook_movement: "a1TOd1",
              });
              console.log(`${Color} possible queen's side`);
            }
          }
        }
      }
    }
    // const KingsIndex = STR_TO_INDEX_ARRAY("e1");
  } else if (Color === "black" && Position === "e8") {
    // then most probably it hasnt moved
    // console.log("inside-1");
    // checking if king have moved or not
    if (ImageElement.classList.contains("not-moved")) {
      if (!ImageElement.classList.contains("highlight_king")) {
        // king is in check if it contains highlight_king
        // console.log("inside-2");
        //
        // checking if there is vacant boxes
        // kings side => f8 , g8
        // queen's side => d8 c8 b8
        const box_f8 = document.querySelector(`.box_f8`);
        const box_g8 = document.querySelector(`.box_g8`);

        const box_d8 = document.querySelector(`.box_d8`);
        const box_c8 = document.querySelector(`.box_c8`);
        const box_b8 = document.querySelector(`.box_b8`);

        // going black king's left side(king's side)
        if (!box_f8.querySelector("img") && !box_g8.querySelector("img")) {
          // no image means empty
          //
          // now we check if h8 has rook
          // console.log("inside-3");
          // const box_h8 = document.querySelector(`.box_h8`);
          const box_h8_ImageElement = document
            .querySelector(`.box_h8`)
            .querySelector("img");

          if (
            box_h8_ImageElement &&
            box_h8_ImageElement.classList.contains("black-rook")
          ) {
            // rook is present
            // now final check has rook moved
            // console.log("inside-4");
            if (box_h8_ImageElement.classList.contains("not-moved")) {
              // console.log("inside-5");
              const Index_of_f8 = STR_TO_INDEX_ARRAY("f8");
              const Index_of_g8 = STR_TO_INDEX_ARRAY("g8");

              if (
                isSafeFromAll("black", Index_of_f8, Current_Game_Position) &&
                isSafeFromAll("black", Index_of_g8, Current_Game_Position)
              ) {
                // elgibile for black king's side castling
                // console.log("inside-6");
                CastlingMoves.push({
                  king_movement: "e8TOg8",
                  rook_movement: "h8TOf8",
                });
                console.log(`${Color} possible king side`);
              }
            }
          }
        }

        // going black king's right side(quuen side)
        if (
          !box_d8.querySelector("img") &&
          !box_c8.querySelector("img") &&
          !box_b8.querySelector("img")
        ) {
          // no image means empty
          //
          // now we check if a8 has rook
          // const box_a8 = document.querySelector(`.box_a8`);
          const box_a8_ImageElement = document
            .querySelector(`.box_a8`)
            .querySelector("img");

          if (
            box_a8_ImageElement &&
            box_a8_ImageElement.classList.contains("black-rook")
          ) {
            if (box_a8_ImageElement.classList.contains("not-moved")) {
              const Index_of_d8 = STR_TO_INDEX_ARRAY("d8");
              const Index_of_c8 = STR_TO_INDEX_ARRAY("c8");
              const Index_of_b8 = STR_TO_INDEX_ARRAY("b8");

              if (
                isSafeFromAll("black", Index_of_d8, Current_Game_Position) &&
                isSafeFromAll("black", Index_of_c8, Current_Game_Position) &&
                isSafeFromAll("black", Index_of_b8, Current_Game_Position)
              ) {
                CastlingMoves.push({
                  king_movement: "e8TOc8",
                  rook_movement: "a8TOd8",
                });
                console.log(`${Color} possible queen side`);
              }
            }
          }
        }
      }
    }
  }
  // console.log(CastlingMoves);
  return CastlingMoves;
};

export default CheckForCastling;
