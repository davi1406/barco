var seaImg, shipImg
function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png")

}

function setup(){
  createCanvas(400,400);
 sea = createSprite (400,200);
sea.addImage(seaImg)
sea.scale = 0.3;
sea.velocityX = 3;

createCanvas(400,400);
ship = createSprite (100,200);
ship.addAnimation("ship", shipImg1)
ship.scale = 0.3



}

function draw() {
  background("blue");
  if(sea.X < 0){
  sea.X = width/2}
  
  
  
  
  drawSprites();

 
}
