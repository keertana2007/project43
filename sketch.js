var hr, min, sec, hAngle, mAngle, sAngle;

function setup() {
  createCanvas(400,400);
  
 // hr = hour();
 // min = minute();
 // sec = second();

  angleMode(DEGREES)
}

function draw() {
  background('#000000'); 

  //Translation and rotation 
  translate(200,200)
  rotate(-90)

  //angleMode(DEGREES);

  hr = hour();
  min = minute();
  sec = second();

  console.log(sAngle)
  console.log(mAngle)
  console.log(hAngle)

  sAngle = map(sec, 0, 60, 0, 360)
  mAngle = map(min, 0, 60, 0, 360)
  hAngle = map(hr%12, 0, 12, 0, 360)

//Seconds Hand
  push();
  rotate(sAngle);
  stroke('#21FFFF')
  strokeWeight(7);
  //translate(200,200);
  line(0, 0, 100,0);
  pop();

//Minute Hand
  push();
  rotate(mAngle);
  stroke('#FF0066');
  strokeWeight(7);
  //translate(200,200);
  line(0,0,75,0);
  pop();

//Hour Hand
  push();
  rotate(hAngle);
  stroke('#A4C200');
  strokeWeight(7);
 // translate(200,200);
  line(0,0,50,0);
  pop();

  drawSprites();
}