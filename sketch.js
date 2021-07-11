var bg;
var snow2;
function preload(){
bg=loadImage("snow1.jpg");
}


function setup() {
  createCanvas(1000,600);
  createSprite(400, 200, 50, 50);
}


function draw() {
  background(bg);  
  snowy();
  drawSprites();
}

function snowy(){
  if(frameCount % 100 === 0){
    snow2 = new Snow (random(0,995),random(0,100),10,20)
    snow2.velocityY=3;
  }
  }