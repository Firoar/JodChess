const CheckForPawnPromotion = (game_state, color) => {
  if (color === "white") {
    const row_8 = game_state[game_state.length - 1][0];
    for (let i = 0; i <= 7; i++) {
      if (row_8[i] === "wP") {
        return [true, [0, i], color];
      }
    }
  } else if (color === "black") {
    const row_1 = game_state[game_state.length - 1][7];
    for (let i = 0; i <= 7; i++) {
      if (row_1[i] === "bP") {
        return [true, [7, i], color];
      }
    }
  }
  return [false];
};
export default CheckForPawnPromotion;
