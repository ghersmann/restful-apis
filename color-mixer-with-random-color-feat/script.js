// Color Mixer 2.0

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const rgbCounter = document.querySelector(".rgb");
const main = document.querySelector("main");
const btn = document.querySelector("#btn");

red.addEventListener("input", changeColor);
green.addEventListener("input", changeColor);
blue.addEventListener("input", changeColor);

btn.addEventListener("click", randomColor);

function changeColor() {
  main.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;

  function rgbToHex(r, g, b) {
    return (
      "#" +
      [r, g, b]
        .map(function (x) {
          let hex = Math.max(0, Math.min(255, x)).toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  }

  let output = rgbToHex(
    parseInt(red.value, 10),
    parseInt(green.value, 10),
    parseInt(blue.value, 10)
  );

  rgbCounter.innerText = output.toUpperCase();
}

function randomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      main.style.backgroundColor = data.color;
      rgbCounter.innerText = data.color;
      red.value = data.rgb.r;
      green.value = data.rgb.g;
      blue.value = data.rgb.b;
    });
}
