export const STR_TO_INDEX_ARRAY = (str) => {
  const object = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    1: 7,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1,
    8: 0,
  };
  let letter = str[0];
  let number = str[1];

  return [object[number], object[letter]]; // [i,j]
};

export const ProjectGamePostion = (
  FuturePiecePosition,
  PresentPiecePosition,
  Current_Position,
  castling,
  Enpassant,
  Box_Of_Enpassant
) => {
  if (!castling) {
    let [i1, j1] = STR_TO_INDEX_ARRAY(PresentPiecePosition);
    let [i2, j2] = STR_TO_INDEX_ARRAY(FuturePiecePosition);

    let Projected_Position = JSON.parse(JSON.stringify(Current_Position));
    Projected_Position[i2][j2] = Projected_Position[i1][j1];
    Projected_Position[i1][j1] = "--";

    if (Enpassant) {
      let [I1, J1] = STR_TO_INDEX_ARRAY(Box_Of_Enpassant);
      Projected_Position[I1][J1] = "--";
    }

    return Projected_Position;
  } else {
    let [i1, j1] = STR_TO_INDEX_ARRAY(PresentPiecePosition);
    let [i2, j2] = STR_TO_INDEX_ARRAY(FuturePiecePosition);

    let Projected_Position = JSON.parse(JSON.stringify(Current_Position));
    Projected_Position[i2][j2] = Projected_Position[i1][j1];
    Projected_Position[i1][j1] = "--";

    if (FuturePiecePosition === "g1") {
      let [i3, j3] = STR_TO_INDEX_ARRAY("h1");
      let [i4, j4] = STR_TO_INDEX_ARRAY("f1");
      Projected_Position[i4][j4] = Projected_Position[i3][j3];
      Projected_Position[i3][j3] = "--";
    } else if (FuturePiecePosition === "c1") {
      let [i3, j3] = STR_TO_INDEX_ARRAY("a1");
      let [i4, j4] = STR_TO_INDEX_ARRAY("d1");
      Projected_Position[i4][j4] = Projected_Position[i3][j3];
      Projected_Position[i3][j3] = "--";
    } else if (FuturePiecePosition === "g8") {
      let [i3, j3] = STR_TO_INDEX_ARRAY("h8");
      let [i4, j4] = STR_TO_INDEX_ARRAY("f8");
      Projected_Position[i4][j4] = Projected_Position[i3][j3];
      Projected_Position[i3][j3] = "--";
    } else if (FuturePiecePosition === "c8") {
      let [i3, j3] = STR_TO_INDEX_ARRAY("a8");
      let [i4, j4] = STR_TO_INDEX_ARRAY("d8");
      Projected_Position[i4][j4] = Projected_Position[i3][j3];
      Projected_Position[i3][j3] = "--";
    }
    return Projected_Position;
  }
};

// export default { STR_TO_INDEX_ARRAY, ProjectGamePostion };
