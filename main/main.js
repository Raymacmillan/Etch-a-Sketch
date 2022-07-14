const root = document.documentElement;
const grid = document.querySelector(".grid");
const button = document.querySelector(".btn");

function makeGrid(size){
  grid.innerHTML = "";
  for(let i =0; i < size * size; i++){
    grid.innerHTML += "<div></div>";
  }
}

makeGrid(16);

button.addEventListener("click",()=>{
  const gridSize = Number(prompt("Enter Grid size:"))
  makeGrid(gridSize);
  root.style.setProperty("--cols",gridSize);
})
