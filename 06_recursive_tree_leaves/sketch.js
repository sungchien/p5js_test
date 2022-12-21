var stem_length=160;
var branch_deg=30;
var reduced_rate=0.7;
var theta;
let leafDensity;
let leafColor;

function setup() {
    // put setup code here
    createCanvas(800, 600);
    background(0);
    frameRate(30);
    stroke(255);
    
    leafDensity = random(0, 10);
    leafColor = color(
      random(0, 255),
      random(0, 255),
      random(0, 255)
    );
}

function draw() {
  // put drawing code here
  theta = radians(branch_deg);
  // Start the tree from the bottom of the screen
  translate(width/2,height);
  // Draw a line 120 pixels
  line(0,0,0,-stem_length);
  // Move to the end of that line
  translate(0,-stem_length);
  // Start the recursive branching!
  branches(stem_length);
}

function branches(h) {
  // Each branch will be 2/3rds the size of the previous one
  h *= reduced_rate;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branches(h);
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branches(h);
    pop();
  }

  fill(leafColor);
  noStroke();
  circle(0, 0, 10);
}
