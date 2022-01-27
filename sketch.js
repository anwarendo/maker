function setup() {
  // noCanvas(window.innerWidth, window.innerHeight);
  var canv = createCanvas(700, 400);
  canv.parent("canvas-container");
  canv.class("w3-black w3-card-4 w3-margin");
  canv.elt.style.border = "8px solid orange";
}

function draw() {
  noStroke();
  var rad;
  if(mouseIsPressed) {
    frameRate(60);
    fill(255);
    rad = 10;
  } else {
    frameRate(30);
    fill(random(100),random(255), random(100), random(30));
    rad = random(10, 100);
  }
  
  ellipse(mouseX, mouseY, rad, rad);
}