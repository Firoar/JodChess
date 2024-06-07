import ChangeTheGameState from "../ChangeTheGameState.js";
import CheckForPawnPromotion from "./CheckForPawnPromotion.js";

function checkForPawnPromotionAndHandleModal(game_state, Turn) {
  return new Promise((resolve) => {
    let arr = CheckForPawnPromotion(game_state, Turn);
    if (arr[0]) {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      var modalButtons = document.getElementsByClassName("modal-button");

      for (let button of modalButtons) {
        button.addEventListener("click", function handleButtonClick() {
          let image = button.querySelector("img");
          console.log(`you promoted to ${image.alt}`);
          arr.push(image.alt);
          game_state[game_state.length - 1] = ChangeTheGameState(
            game_state,
            arr
          );
          modal.style.display = "none";
          button.removeEventListener("click", handleButtonClick);
          resolve(); // Resolve the promise here
        });
      }
    } else {
      resolve(); // Resolve immediately if no promotion is needed
    }
  });
}

export default checkForPawnPromotionAndHandleModal;
