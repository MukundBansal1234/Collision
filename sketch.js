var fixrectangle
var movingrectangle



function setup() {
  createCanvas(800,400);
fixrectangle=  createSprite(400, 200, 100, 50);
movingrectangle=createSprite(200,100,100,50);
fixrectangle.shapeColor="red";
movingrectangle.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;

  drawSprites();
}