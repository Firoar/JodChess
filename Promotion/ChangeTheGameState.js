import { DICTIONARY } from "../utilities/getPositionOfKing.js";
const ChangeTheGameState = (game_state, arr) => {
  let [i, j] = arr[1];
  let color = arr[2];
  let piece = arr[3];

  let Current_Game_Psoition = JSON.parse(
    JSON.stringify(game_state[game_state.length - 1])
  );
  let str = String(i) + "," + String(j);
  let box = document.querySelector(".box_" + DICTIONARY[str]);
  let IMAGE = document.createElement("img");

  if (piece === "knight") {
    Current_Game_Psoition[i][j] = color === "white" ? "wN" : "bN";

    if (color === "white") {
      IMAGE.src = `../assets/white-knight.png`;
    } else {
      IMAGE.src = `../assets/black-knight.png`;
    }

    IMAGE.classList.add(`${color}`, `${color}-knight`, `img`);
    //   IMAGE.alt
  } else if (piece === "bishop") {
    Current_Game_Psoition[i][j] = color === "white" ? "wB" : "bB";
    if (color === "white") {
      IMAGE.src = `../assets/white-bishop.png`;
    } else {
      IMAGE.src = `../assets/black-bishop.png`;
    }

    IMAGE.classList.add(`${color}`, `${color}-bishop`, `img`);
    // box.innerHTML = IMAGE;
  } else if (piece === "rook") {
    Current_Game_Psoition[i][j] = color === "white" ? "wR" : "bR";

    if (color === "white") {
      IMAGE.src = `../assets/white-rook.png`;
    } else {
      IMAGE.src = `../assets/black-rook.png`;
    }
    IMAGE.classList.add(`${color}`, `${color}-rook`, `moved`, `img`);
    // box.innerHTML = IMAGE;
  } else if (piece === "queen") {
    Current_Game_Psoition[i][j] = color === "white" ? "wQ" : "bQ";

    if (color === "white") {
      IMAGE.src = `../assets/white-queen.png`;
    } else {
      IMAGE.src = `../assets/black-queen.png`;
    }
    IMAGE.classList.add(`${color}`, `${color}-queen`, `img`);
    // box.innerHTML = IMAGE;
  }
  box.innerHTML = "";
  box.appendChild(IMAGE.cloneNode(true));

  return Current_Game_Psoition;
};

export default ChangeTheGameState;
