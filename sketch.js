var ship, shipImg;
var sea, seaImg;

function preload(){

  shipImg = loadAnimation("ship-1.png", "ship-2.png");
  seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 100, 400, 400);
  sea.addImage("sea", seaImg);
  sea.velocityX = -2;

  ship = createSprite(100, 200);
  ship.addAnimation("ship", shipImg);
  ship.scale = 0.2;
  
}

function draw() {

  background("blue");

  if(sea.x < 0){

    sea.x = sea.width/2;

  }

  drawSprites();
}