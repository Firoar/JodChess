function original_color() {
  let row = document.querySelectorAll(".row");
  for (let i = 1; i < 9; i++) {
    let r = row[i].querySelectorAll(".box");
    for (let j = 1; j < 9; j++) {
      if ((j % 2 == 0) & (i % 2 != 0)) {
        r[j].style.backgroundColor = "#66FF99";
        r[j].classList.add("color_#66FF99");
        r[j].style.border = "solid 1px #66FF99";
      } else if ((j % 2 != 0) & (i % 2 == 0)) {
        r[j].style.backgroundColor = "#66FF99";
        r[j].classList.add("color_#66FF99");
        r[j].style.border = "solid 1px #66FF99";
      } else {
        r[j].style.border = "solid 1px #66FF99";
        r[j].classList.add("color_#ffffff");
      }
    }
  }
}

// original_color();
export default original_color;
