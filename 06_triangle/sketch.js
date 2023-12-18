var len = 500;
var max_depth;
var x;
var y;
var triColor;
var slider;
var colorPicker;

function setup() {
    createCanvas(540, 540);
    noStroke();
    noLoop();
    x = width/2 - len/2;
    y = height/2 + len*sqrt(3)/4;

    let p1 = createP('輸入三角形的層數.');
    p1.position(480, 20);

    // Set its default value to 30.
    slider = createSlider(2, 7, 2, 1);
    slider.position(485, 55);
    slider.size(100);
    slider.input(recursiveTriangle);

    let p2 = createP('輸入三角形的顏色.');
    p2.position(480, 70);

    colorPicker = createColorPicker('deeppink');
    colorPicker.position(485, 110);
    colorPicker.input(recursiveTriangle);
  
    recursiveTriangle();

    frameRate(30);
}

function recursiveTriangle() {
    background(255);
    triColor = colorPicker.color();
    max_depth = slider.value();
    cur_lvl = 1;
    divide(x, y, len, cur_lvl);
}

function divide(x, y, l, cur_lvl) {
    if (cur_lvl == max_depth) {
        tri(x, y, l);
    } else {
        divide(x, y, l/2, cur_lvl+1);
        divide(x+l/2, y, l/2, cur_lvl+1);
        divide(x+l/4, y-l*sqrt(3)/4, l/2, cur_lvl+1);
    }
}

function tri(x, y, l) {
    push();

    fill(triColor);
    
    triangle(x, y, x+l/2, y-l*sqrt(3)/2, x+l, y);
    
    pop();
}