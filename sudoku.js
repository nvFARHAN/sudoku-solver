let isSafe = (mat, x, y, num) => {
  for (let i = 0; i < 9; i++) {
    if (mat[i][y] == num) return false;
  }
  for (let i = 0; i < 9; i++) {
    if (mat[x][i] == num) return false;
  }
  let sr = Math.floor(x / 3) * 3;
  let sc = Math.floor(y / 3) * 3;
  for (let i = sr; i < sr + 3; i++) {
    for (let j = sc; j < sc + 3; j++) {
      // console.log(mat[i][j])
      if (mat[i][j] == num) return false;
    }
  }
  return true;
};

let sudoku = (mat, x, y) => {
  //   console.log(mat);
  //   setTimeout(() => {
  if (x == 9) {
    return true;
  }
  let nrow;
  let ncol;

  if (y != 8) {
    nrow = x;
    ncol = y + 1;
  } else {
    nrow = x + 1;
    ncol = 0;
  }

  if (mat[x][y] != 0) {
    let temp = sudoku(mat, nrow, ncol);
    if (temp) return true;
  } else {
    for (let i = 1; i <= 9; i++) {
      if (isSafe(mat, x, y, i)) {
        mat[x][y] = i;
        let temp = sudoku(mat, nrow, ncol);
        if (temp) {
          return true;
        } else {
          mat[x][y] = 0;
        }
      }
    }
  }
  return false;
  //   }, 500);
};
