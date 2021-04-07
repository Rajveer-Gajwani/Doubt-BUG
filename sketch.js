
var mn = minute();
var sc = second();
var hr = hour();

function setup() {
  createCanvas(720, 400);
  noStroke();

  
}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  text('Current hour: ' + hr, 5, 50);
  text('Current minute: ' + mn,5,75);
  text('Current second: ' + sc,2,100);
  scAngle = map(sc,0,60,0,360);
  angleMode()
}