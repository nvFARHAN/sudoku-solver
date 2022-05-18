function setup() {
  let min = Math.min(windowWidth, windowHeight);
  createCanvas(360, 360);
  //   console.log(mat);
  let btn = createButton("Start");
  btn.id("start");
  document.querySelector("#start").addEventListener("click", () => {
    sudoku(mat, 0, 0);
  });
}

function draw() {
  background(220);
  let w = width / 9;
  let h = height / 9;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      strokeWeight(1);
      noFill();
      rect(i * w, j * h, w, h);
    }
  }
  stroke(0);
  strokeWeight(3);
  line(3 * w, 0, 3 * w, 9 * h);
  line(6 * w, 0, 6 * w, 9 * h);
  line(0, 3 * h, 9 * w, 3 * h);
  line(0, 6 * h, 9 * w, 6 * h);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      strokeWeight(1);
      fill(0);
      textSize(20);
      textAlign(CENTER, CENTER);
      text(mat[j][i], i * w + w * 0.5, j * h + h * 0.5);
    }
  }
}
