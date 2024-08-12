const canvas  = document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height=600;

const playerImage = new Image();
playerImage.src = '../assets/shadow_dog.png';
let x =0;

(function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.fillRect(x,50,100,100);
    x++;
    requestAnimationFrame(animate);//recurssion
    if(x==480) x=0;
})();