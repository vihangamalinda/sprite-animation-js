let type ='fall';
const dropDown = document.getElementById("animations");
addEventListener('change',(event)=>{
    type =event.target.value;
})

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


// let frameX = 0;
// let frameY = 0;

let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimations = [];

const animationState = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 7,
  },
];

animationState.forEach((state, index) => {
  let frames = {
    loc: [],
  };

  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index;

    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

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

//   let type ='fall';

  let postion =
    Math.floor(gameFrame / staggerFrames) % spriteAnimations[type].loc.length;

//   let frameX = spriteWidth * postion;
    let frameX = spriteAnimations[type].loc[postion].x;

  let frameY = spriteAnimations[type].loc[postion].y;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  //   if (gameFrame % staggerFrames === 0) {
  //     if (frameX < 6) frameX++;
  //     else frameX = 0;
  //   }
  //   console.log(gameFrame)
  requestAnimationFrame(animate); //recurssion
  gameFrame++;
}
animate();


