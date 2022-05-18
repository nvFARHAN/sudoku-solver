let mat = [
  [0, 4, 0, 0, 0, 0, 1, 7, 9],
  [0, 0, 2, 0, 0, 8, 0, 5, 4],
  [0, 0, 6, 0, 0, 5, 0, 0, 8],
  [0, 8, 0, 0, 7, 0, 9, 1, 0],
  [0, 5, 0, 0, 9, 0, 0, 3, 0],
  [0, 1, 9, 0, 6, 0, 0, 4, 0],
  [3, 0, 0, 4, 0, 0, 7, 0, 0],
  [5, 7, 0, 1, 0, 0, 2, 0, 0],
  [9, 2, 8, 0, 0, 0, 0, 6, 0],
];

let btn = document.querySelector("#btn");
btn.addEventListener("click", async () => {
  let input = document.querySelector("#input").value;
  input = input.trim().split("\n");
  mat = [];
  for (let i = 0; i < 9; i++) {
    let arr = input[i].trim().split(" ").map(Number);
    mat.push(arr);
  }
  console.log(mat);
});
