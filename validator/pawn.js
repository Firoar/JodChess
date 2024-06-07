import ForwardMoves from "./Pawns/ForwardMoves.js";
import checkSideAttacks from "./Pawns/checkSideAttacks.js";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

// game_state is an obj array (global), it has 2 things in each obj, 1) move no 2) what was the move
// since enpassant is possible right after and not available if uou miss the first time
// the global array will come to use
// we can check in another array(Global) called enpassnt array , which records which move enpassnt was possible
// so next when we check again the enpassnt possiblity first we check if it was already recorded using no of moves in global aray
// if moves match we show it otgerwise we remove it

// another important is promotion

function pawn_moves(position, color, game_state, enpassnt_history) {
  let valid_postions = [];
  // console.log("position : ", position);
  let letter = position[0];
  let number = position[1];
  const indexNum = numbers.indexOf(number);
  const indexLet = letters.indexOf(letter);

  if (color == "white") {
    const myColor = "white";
    const Oppcolor = "black";
    /////////////////////////////
    valid_postions = [
      ...valid_postions,
      ...checkSideAttacks(indexLet, indexNum, Oppcolor),
    ];

    // console.log("vp : ", valid_postions);
    /////////////////////////////
    // forward moves
    /**
     * if (number == "2") {
      valid_postions.push(letter + "3");
      valid_postions.push(letter + "4");
    } else if (indexNum <= 6) {
      valid_postions.push(letter + numbers[indexNum + 1]);
    }
     */
    valid_postions = [
      ...valid_postions,
      ...ForwardMoves(letter, number, indexNum, myColor),
    ];
    valid_postions = [
      ...valid_postions,
      ...enpassnt(position, color, game_state, enpassnt_history),
    ];
  }
  // black-pawn
  else if (color == "black") {
    const myColor = "black";
    const Oppcolor = "white";
    // let Possible = ["+1+1,+1-1"];
    valid_postions = [
      ...valid_postions,
      ...checkSideAttacks(indexLet, indexNum, Oppcolor),
    ];
    valid_postions = [
      ...valid_postions,
      ...ForwardMoves(letter, number, indexNum, myColor),
    ];
    // console.log("Valid : pso forward black", valid_postions);
    valid_postions = [
      ...valid_postions,
      ...enpassnt(position, color, game_state, enpassnt_history),
    ];
  }
  return valid_postions;
}

function enpassnt(position, color, game_state, enpassnt_history) {
  const v_positions = [];
  let letter = position[0];
  let number = position[1];
  const indexNum = numbers.indexOf(number);
  const indexLet = letters.indexOf(letter);
  let box = "box_" + letter + number;
  const b = document.querySelector("." + box);
  let leftbox =
    indexLet - 1 >= 0 ? "box_" + letters[indexLet - 1] + number : null;
  let rightbox =
    indexLet + 1 <= 7 ? "box_" + letters[indexLet + 1] + number : null;
  const left_of_b =
    leftbox !== null ? document.querySelector("." + leftbox) : null;
  const right_of_b =
    rightbox !== null ? document.querySelector("." + rightbox) : null;

  let count_class, step_class;
  let TOTAL_MOVES = game_state.length + 1;

  if (color == "white" && number == "5") {
    ///////////////////////////////////////////////////

    ///////////
    if (left_of_b && left_of_b.querySelector("img.black-pawn")) {
      let flag = 0;
      ///////////////////////////////////
      /// check point if the oppourtunity was already present or not
      for (let i = 0; i < enpassnt_history.length; i++) {
        if (
          enpassnt_history[i].pawn_color == "white" &&
          enpassnt_history[i].pawn_at == letter + number &&
          enpassnt_history[i].opposite_pawn_at == letters[indexLet - 1] + number
        ) {
          // that means the opportunity was already present
          if (enpassnt_history[i].nTh_move != TOTAL_MOVES + 1) {
            // that means oppoutunity was before not now
            flag = 1;
            continue;
          }
          // otherwise show the mmove thats all
        }
      }
      ////////
      // console.log(flag, enpassnt_history);
      if (flag == 0) {
        let black_pawn = left_of_b.querySelector("img.black-pawn");
        let conditions = {
          steped_2_positions_directly: false,
          no_of_moves_count_is_1: false,
        };
        var classes = black_pawn.classList;
        /////////////////////////////////////////////////////
        for (var i = 0; i < classes.length; i++) {
          if (classes[i].startsWith("count")) {
            count_class = classes[i];
          }
          if (classes[i].startsWith("steps")) {
            step_class = classes[i];
          }
        }

        // now check no of steps and no of count and update the condittions object
        let no_of_steps = step_class.slice(6);
        let no_of_moves_count = count_class.slice(6);
        // console.log(
        //   "no St:",
        //   no_of_steps,
        //   "no m cttttttt:",
        //   no_of_moves_count,
        //   color
        // );

        if ((no_of_steps == "2") & (no_of_moves_count == "1")) {
          conditions.steped_2_positions_directly = true;
          conditions.no_of_moves_count_is_1 = true;

          // now check if the position is empty
          let upper_left_box = document.querySelector(
            "." + "box_" + letters[indexLet - 1] + "6"
          );
          if (!upper_left_box.querySelector("img")) {
            v_positions.push(letters[indexLet - 1] + "6");
            enpassnt_history.push({
              nTh_move: TOTAL_MOVES + 1,
              pawn_color: "white",
              pawn_at: letter + number,
              opposite_pawn_at: letters[indexLet - 1] + number,
            });
          }
        }
      }

      ///////////////////////////////////////////////
    }
    if (right_of_b && right_of_b.querySelector("img.black-pawn")) {
      let flag = 0;
      console.log("hi right box");
      ////////////////////////////////////////////////////////////////////////////////////////
      for (let i = 0; i < enpassnt_history.length; i++) {
        if (
          enpassnt_history[i].pawn_color == "white" &&
          enpassnt_history[i].pawn_at == letter + number &&
          enpassnt_history[i].opposite_pawn_at == letters[indexLet + 1] + number
        ) {
          // that means the opportunity was already present
          if (enpassnt_history[i].nTh_move != TOTAL_MOVES + 1) {
            // that means oppoutunity was before not now, so dont add anything to move
            flag = 1;
            continue;
          }
          // otherwise show the mmove thats all
        }
      }
      console.log(flag, enpassnt_history);
      if (flag == 0) {
        let black_pawn = right_of_b.querySelector("img.black-pawn");
        let conditions = {
          steped_2_positions_directly: false,
          no_of_moves_count_is_1: false,
        };

        var classes = black_pawn.classList;
        /////////////////////////////////////////////////////
        for (var i = 0; i < classes.length; i++) {
          if (classes[i].startsWith("count")) {
            count_class = classes[i];
          }
          if (classes[i].startsWith("steps")) {
            step_class = classes[i];
          }
        }
        let no_of_steps = step_class.slice(6);
        let no_of_moves_count = count_class.slice(6);
        if ((no_of_steps == "2") & (no_of_moves_count == "1")) {
          conditions.steped_2_positions_directly = true;
          conditions.no_of_moves_count_is_1 = true;

          // now check if the position is empty
          let upper_right_box = document.querySelector(
            "." + "box_" + letters[indexLet + 1] + "6"
          );
          let has_some_pawn = upper_right_box.querySelector("img")
            ? true
            : false;
          // console.log("Upper right box : ", has_some_pawn);
          if (!has_some_pawn) {
            console.log("running");
            v_positions.push(letters[indexLet + 1] + "6");
            enpassnt_history.push({
              nTh_move: TOTAL_MOVES + 1,
              pawn_color: "white",
              pawn_at: letter + number,
              opposite_pawn_at: letters[indexLet + 1] + number,
            });
          }
        }
      }

      //////////////////////////////////////////

      ////////////////////////////////////////
      // console.log(v_positions);
    }
    //////////////////////////////////////////////////////////////////
    //////////////////////////////
  }
  ////////////////////////////////////////
  //////////////////////////////////////////////
  /////////////////////////////////////////////////////
  else if (color == "black" && number == "4") {
    if (left_of_b && left_of_b.querySelector("img.white-pawn")) {
      let flag = 0;

      for (let i = 0; i < enpassnt_history.length; i++) {
        if (
          enpassnt_history[i].pawn_color == "black" &&
          enpassnt_history[i].pawn_at == letter + number &&
          enpassnt_history[i].opposite_pawn_at == letters[indexLet - 1] + number
        ) {
          // that means the opportunity was already present
          if (enpassnt_history[i].nTh_move != TOTAL_MOVES + 1) {
            // that means oppoutunity was before not now, so dont add anything to move
            flag = 1;
            continue;
          }
          // otherwise show the mmove thats all
        }
      }
      console.log(flag, enpassnt_history);
      if (flag == 0) {
        let white_pawn = left_of_b.querySelector("img.white-pawn");
        let conditions = {
          steped_2_positions_directly: false,
          no_of_moves_count_is_1: false,
        };

        var classes = white_pawn.classList;
        /////////////////////////////////////////////////////
        for (var i = 0; i < classes.length; i++) {
          if (classes[i].startsWith("count")) {
            count_class = classes[i];
          }
          if (classes[i].startsWith("steps")) {
            step_class = classes[i];
          }
        }
        let no_of_steps = step_class.slice(6);
        let no_of_moves_count = count_class.slice(6);
        //////////////////////////////////
        if ((no_of_steps == "2") & (no_of_moves_count == "1")) {
          conditions.steped_2_positions_directly = true;
          conditions.no_of_moves_count_is_1 = true;

          // now check if the position is empty
          let lower_left_box = document.querySelector(
            "." + "box_" + letters[indexLet - 1] + "3"
          );
          if (!lower_left_box.querySelector("img")) {
            v_positions.push(letters[indexLet - 1] + "3");
            enpassnt_history.push({
              nTh_move: TOTAL_MOVES + 1,
              pawn_color: "black",
              pawn_at: letter + number,
              opposite_pawn_at: letters[indexLet - 1] + number,
            });
          }
        }
        //////////////////////////////
      }
    }
    if (right_of_b && right_of_b.querySelector("img.white-pawn")) {
      let flag = 0;

      for (let i = 0; i < enpassnt_history.length; i++) {
        if (
          enpassnt_history[i].pawn_color == "black" &&
          enpassnt_history[i].pawn_at == letter + number &&
          enpassnt_history[i].opposite_pawn_at == letters[indexLet + 1] + number
        ) {
          // that means the opportunity was already present
          if (enpassnt_history[i].nTh_move != TOTAL_MOVES + 1) {
            // that means oppoutunity was before not now, so dont add anything to move
            flag = 1;
            continue;
          }
          // otherwise show the mmove thats all
        }
      }
      console.log(flag, enpassnt_history);
      if (flag == 0) {
        let white_pawn = right_of_b.querySelector("img.white-pawn");
        // console.log(white_pawn, "ksxsakbc");
        let conditions = {
          steped_2_positions_directly: false,
          no_of_moves_count_is_1: false,
        };
        var classes = white_pawn.classList;
        /////////////////////////////////////////////////////
        for (var i = 0; i < classes.length; i++) {
          if (classes[i].startsWith("count")) {
            count_class = classes[i];
          }
          if (classes[i].startsWith("steps")) {
            step_class = classes[i];
          }
        }
        let no_of_steps = step_class.slice(6);
        let no_of_moves_count = count_class.slice(6);

        // console.log("no St:", no_of_steps, "no m ct:", no_of_moves_count);

        //////////////////////////////////
        if ((no_of_steps == "2") & (no_of_moves_count == "1")) {
          conditions.steped_2_positions_directly = true;
          conditions.no_of_moves_count_is_1 = true;

          // now check if the position is empty
          let lower_right_box = document.querySelector(
            "." + "box_" + letters[indexLet + 1] + "3"
          );
          console.log();
          let has_some_pawn = lower_right_box.querySelector("img")
            ? true
            : false;
          console.log("has some pawn : ", has_some_pawn);
          if (!has_some_pawn) {
            v_positions.push(letters[indexLet + 1] + "3");
            enpassnt_history.push({
              nTh_move: TOTAL_MOVES + 1,
              pawn_color: "black",
              pawn_at: letter + number,
              opposite_pawn_at: letters[indexLet + 1] + number,
            });
          }
        }
        //////////////////////////////
      }
    }
  }

  return v_positions;
}

export default pawn_moves;
