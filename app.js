// Step-1 -Create onload handler

window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  btn.addEventListener("click", function () {
    const bgColor = generateRGBcolor();
    root.style.backgroundColor = bgColor;
  });
}
// step -2 - random color generator
function generateRGBcolor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}

// step -3 - collect all necessary reference
