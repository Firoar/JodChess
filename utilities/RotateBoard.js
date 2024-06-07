function RotateBoard() {
  const divToRotate = document.querySelector(".divToRotate");
  const RotateButton = document.querySelector(".Rotate");
  // const ALLIMAGES = document.querySelectorAll(".img");

  RotateButton.addEventListener("click", () => {
    divToRotate.classList.toggle("rotate-180");

    applyRotation(divToRotate);
  });

  function applyRotation(element) {
    if (element.tagName === "IMG") {
      element.classList.toggle("rotate-180");
    }

    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      applyRotation(children[i]);
    }
  }
}

RotateBoard();
