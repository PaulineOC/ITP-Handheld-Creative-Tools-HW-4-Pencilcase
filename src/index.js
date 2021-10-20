import "./enums";

import { BODY_IMGS, BRUSHES } from "./enums";
import { drawPerson, generateRandomPerson } from "./brush1";

let canvas = document.getElementById("main-canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.9;

ctx.fillStyle = "hsl(120, 20%, 20%)"; // green
ctx.fillRect(0, 0, canvas.width, canvas.height);

let currBrush = BRUSHES.HAND_HOLDING;
let isDrawing = false;
let lastX = null;
let lastY = null;

function drawStart(x, y) {
  isDrawing = true;
  lastX = x;
  lastY = y;
  // ctx.fillStyle = "red";
  // ctx.beginPath();
  // ctx.arc(x, y, 5, 0, 2 * Math.PI);
  // ctx.fill();
}

function drawEnd() {
  isDrawing = false;
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(lastX, lastY, 5, 0, 2 * Math.PI);
  ctx.fill();
}

function drawMove(x, y) {
  if (isDrawing === false) {
    return;
  }

  let thickness = 10;
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  ctx.lineWidth = thickness;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);

  ctx.stroke();
  ctx.arc(x, y, thickness / 2, 0, 2 * Math.PI);
  ctx.fill();

  const person = generateRandomPerson();

  const { body } = person;
  console.log(body);

  ctx.drawImage(BODY_IMGS[Math.floor(Math.random() * 3)], x, y, 16, 16);

  //drawPerson(ctx, x, y);

  lastX = x;
  lastY = y;
}

function mouseMove(event) {
  event.preventDefault();
  drawMove(event.clientX, event.clientY);
}

function touchMove(event) {
  event.preventDefault();

  let touches = event.touches;
  let firstTouch = touches[0];
  drawMove(firstTouch.clientX, firstTouch.clientY);
}

function mouseStart(event) {
  event.preventDefault();
  drawStart(event.clientX, event.clientY);
}
function touchStart(event) {
  event.preventDefault();
  let touches = event.touches;
  let firstTouch = touches[0];
  drawStart(firstTouch.clientX, firstTouch.clientY);
}

canvas.addEventListener("mousedown", mouseStart);
canvas.addEventListener("mouseup", drawEnd);
canvas.addEventListener("mouseout", drawEnd);
canvas.addEventListener("mousemove", mouseMove);

canvas.addEventListener("touchstart", touchStart);
canvas.addEventListener("touchend", drawEnd);
canvas.addEventListener("touchmove", touchMove);

document.getElementById("brush1").onclick = () => {
  console.log("brush 1 selected");
  currBrush = BRUSHES.HAND_HOLDING;
};

document.getElementById("brush2").onclick = () => {
  console.log("brush 2 selected");
};

document.getElementById("brush3").onclick = () => {
  console.log("brush 3 selected");
};

//Brush 1:
