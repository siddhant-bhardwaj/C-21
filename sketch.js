var fixedRect, movingRect, GameObject1, GameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
GameObject1 = createSprite(100,100,50,50);
GameObject1.shapeColor="yellow";
GameObject2 = createSprite(200,100,50,50);
GameObject2.shapeColor="blue";

 movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
 
}

function draw() {
  background(0,0,0);  
 
if(isTouching(movingRect,GameObject2)){
  movingRect.shapeColor="red";
  GameObject2.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  GameObject2.shapeColor="blue";
}

BounceOff(movingRect,fixedRect);

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y -object1.y < object2.height/2 + object1.height/2) {
   //movingRect.velocityX = movingRect.velocityX * (-1);
  //fixedRect.velocityX = fixedRect.velocityX * (-1);
 return true;
}
else{
  return false;
}




}

function BounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}
}


