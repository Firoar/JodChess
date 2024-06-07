
import { DICTIONARY } from "../utilities/getPositionOfKing.js";

const ChangeTheGameState = (game_state, arr) => {
  let [i, j] = arr[1];
  let color = arr[2];
  let piece = arr[3];

  let Current_Game_Position = JSON.parse(
    JSON.stringify(game_state[game_state.length - 1])
  );
  let str = String(i) + "," + String(j);
  let box = document.querySelector(".box_" + DICTIONARY[str]);
  let IMAGE = document.createElement("img");

  IMAGE.addEventListener("load", () => {
    // Once the image is loaded, clear the innerHTML of the box and then append the image
    box.innerHTML = ""; // Clear existing content
    box.appendChild(IMAGE); // Append the image
  });

  if (piece === "knight") {
    Current_Game_Position[i][j] = color === "white" ? "wN" : "bN";
    IMAGE.src =
      color === "white"
        ? "../assets/white-knight.png"
        : "../assets/black-knight.png";
    IMAGE.classList.add(color, color + "-knight", "img");
  } else if (piece === "bishop") {
    Current_Game_Position[i][j] = color === "white" ? "wB" : "bB";
    IMAGE.src =
      color === "white"
        ? "../assets/white-bishop.png"
        : "../assets/black-bishop.png";
    IMAGE.classList.add(color, color + "-bishop", "img");
  } else if (piece === "rook") {
    Current_Game_Position[i][j] = color === "white" ? "wR" : "bR";
    IMAGE.src =
      color === "white"
        ? "../assets/white-rook.png"
        : "../assets/black-rook.png";
    IMAGE.classList.add(color, color + "-rook", "moved", "img");
  } else if (piece === "queen") {
    Current_Game_Position[i][j] = color === "white" ? "wQ" : "bQ";
    IMAGE.src =
      color === "white"
        ? "../assets/white-queen.png"
        : "../assets/black-queen.png";
    IMAGE.classList.add(color, color + "-queen", "img");
  }

  return Current_Game_Position;
};

export default ChangeTheGameState;
