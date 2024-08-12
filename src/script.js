const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
// Shadwo_Dog sprite image has 6876px width
// columns 12 and 10 rows
// spriteWidth => 6876px/12 =575 roughly
// spriteHeight => 5230px/10 =523
playerImage.src = "../assets/shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 0;

let gameFrame =0;
const staggerFrames =5;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.fillRect(100,50,100,100);
  //   ctx.DrawImage(
  //     image,
  //     source_X,
  //     source_Y,
  //     source_width,
  //    source_height,
  //     destination_x,
  //     destination_Y,
  //     Destination_width,
  //     destination_height
  //   );

  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  if(gameFrame% staggerFrames ===0){
  if (frameX < 6) frameX++;
  else frameX = 0;
  }
  console.log(gameFrame)
  requestAnimationFrame(animate); //recurssion
  gameFrame++;
}
animate();
