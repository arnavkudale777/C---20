function setup() {
  createCanvas(800,600);
 mrect = createSprite(400, 200, 50, 50);
 mrect.shapeColor = "red";

 frect = createSprite(400, 300, 50, 50);
 frect.shapeColor = "red";
}

function draw() {
  
 

  background(0);  
  mrect.x = mouseX
  mrect.y = mouseY

  if(mrect.x- frect.x < mrect.width/2 + frect.width/2 &&
    frect.x- mrect.x < mrect.width/2 + frect.width/2 &&
    mrect.y- frect.y < mrect.height/2 + frect.height/2 &&
    frect.y- mrect.y < mrect.height/2 + frect.height/2 
) {
mrect.shapeColor= "yellow"
frect.shapeColor= "yellow"

}
else {
  mrect.shapeColor= "red"
  frect.shapeColor= "red"

}


  drawSprites();
}