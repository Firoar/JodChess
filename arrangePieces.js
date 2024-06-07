// console.log("hola");
function arrangePieces() {
  const IMAGES = {
    "black-bishop": "./assets/black-bishop.png",
    "black-king": "./assets/black-king.png",
    "black-knight": "./assets/black-knight.png",
    "black-pawn": "./assets/black-pawn.png",
    "black-rook": "./assets/black-rook.png",
    "black-queen": "./assets/black-queen.png",
    "white-bishop": "./assets/white-bishop.png",
    "white-king": "./assets/white-king.png",
    "white-knight": "./assets/white-knight.png",
    "white-pawn": "./assets/white-pawn.png",
    "white-rook": "./assets/white-rook.png",
    "white-queen": "./assets/white-queen.png",
  };

  let row = document.querySelectorAll(".row");
  let black_pawn_row = row[2].querySelectorAll(".box");
  let black_power_pawns = row[1].querySelectorAll(".box");

  for (let i = 1; i < 9; i++) {
    let img = document.createElement("img");
    img.classList.add("img");
    img.src = IMAGES["black-pawn"];
    img.classList.add("black-pawn");
    img.classList.add("black");
    img.classList.add("count-0");
    img.classList.add("steps-0");
    black_pawn_row[i].appendChild(img.cloneNode(true));
    // black_pawn_row[i].classList.add("has_img");
  }

  for (let i = 1; i < 9; i++) {
    let img = document.createElement("img");
    img.classList.add("img");
    if ((i == 8) | (i == 1)) {
      img.src = IMAGES["black-rook"];
      img.classList.add("black-rook");
      img.classList.add("black");
      img.classList.add("not-moved");
    } else if ((i == 2) | (i == 7)) {
      img.src = IMAGES["black-knight"];
      img.classList.add("black-knight");
      img.classList.add("black");
    } else if ((i == 3) | (i == 6)) {
      img.src = IMAGES["black-bishop"];
      img.classList.add("black-bishop");
      img.classList.add("black");
    } else if (i == 4) {
      img.src = IMAGES["black-queen"];
      img.classList.add("black-queen");
      img.classList.add("black");
    } else {
      img.src = IMAGES["black-king"];
      img.classList.add("black-king");
      img.classList.add("black");
      img.classList.add("not-moved");
    }
    black_power_pawns[i].appendChild(img.cloneNode(true));
    // black_power_pawns[i].classList.add("has_img");
  }

  let white_pawn_row = row[7].querySelectorAll(".box");
  let white_power_pawns = row[8].querySelectorAll(".box");

  for (let i = 1; i < 9; i++) {
    let img = document.createElement("img");
    img.classList.add("img");
    img.src = IMAGES["white-pawn"];
    img.classList.add("white-pawn");
    img.classList.add("white");
    img.classList.add("count-0");
    img.classList.add("steps-0");
    white_pawn_row[i].appendChild(img.cloneNode(true));
    // white_pawn_row[i].classList.add("has_img");
  }

  for (let i = 1; i < 9; i++) {
    let img = document.createElement("img");
    img.classList.add("img");
    if ((i == 8) | (i == 1)) {
      img.src = IMAGES["white-rook"];
      img.classList.add("white-rook");
      img.classList.add("white");
      img.classList.add("not-moved");
    } else if ((i == 2) | (i == 7)) {
      img.src = IMAGES["white-knight"];
      img.classList.add("white-knight");
      img.classList.add("white");
    } else if ((i == 3) | (i == 6)) {
      img.src = IMAGES["white-bishop"];
      img.classList.add("white-bishop");
      img.classList.add("white");
    } else if (i == 4) {
      img.src = IMAGES["white-queen"];
      img.classList.add("white-queen");
      img.classList.add("white");
    } else {
      img.src = IMAGES["white-king"];
      img.classList.add("white-king");
      img.classList.add("white");
      img.classList.add("not-moved");
    }
    white_power_pawns[i].appendChild(img.cloneNode(true));
    // white_power_pawns[i].classList.add("has_img");
  }
}
export default arrangePieces;
