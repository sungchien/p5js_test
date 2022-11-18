function setup() {
    // put setup code here
    createCanvas(480, 120);
    noStroke();
}
function draw() {
    // put drawing code here
    background(204, 226, 225); // Light blue color
    fill(255, 0, 0, 160); // Red color
    quad(158, 55, 199, 14, 392, 66, 351, 107);
    fill(0, 255, 0, 160); // Green color
    triangle(347, 54, 392, 9, 392, 73);
    fill(0, 0, 255, 160); // Blue color
    triangle(158, 55, 290, 73, 290, 112);
}