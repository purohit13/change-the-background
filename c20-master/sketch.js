
var r = 0;
var g = 50;
var b=255;
var ball;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
 // ball = createSprite(200,100,10);

    
}


function draw(){
  r = map(mouseX,0,1200,0,255);
  g = map(mouseX,50,900,50,50,100);
  b = map(mouseX,0,1200,255,0);
  background(r,g,b);

  
  
  ellipse(mouseX,100,20,20);
  


 }