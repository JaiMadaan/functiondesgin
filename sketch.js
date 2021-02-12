var movingRect,fixedRect
var gameobject1,gameobject2

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="Red"
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="Red"
  gameobject1=createSprite(300,100,20,20)
  gameobject1.shapeColor= "blue"

}

function draw() {
  background(255,255,255);
 
  //movingRect.debug=true
  //fixedRect.debug=true
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY
console.log(movingRect.x - fixedRect.x);
if(isTouching(gameobject1,movingRect)){
  console.log()
  gameobject1.shapeColor="Green"
  movingRect.shapeColor="green"


}
else{
  console.log()
  gameobject1.shapeColor="Red"
  movingRect.shapeColor="Red"


}
  drawSprites();
}
