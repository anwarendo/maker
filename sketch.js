var dots = [];
var i = 0;
var x = 0;
var y = 0;
var rad = 10;
var expand = 0;
var read = false;
var cleanBoard = false;
var write = false;

function setup() {
  // noCanvas(window.innerWidth, window.innerHeight);
  var canv = createCanvas(300, 300);
  canv.parent("canvas-container");
  canv.class("w3-black w3-card-4 w3-margin");
  canv.elt.style.border = "8px solid orange";
    
}

function draw() {
  console.log('read: ', read);
  console.log('write: ', write);
  console.log('cleanBoard', cleanBoard);
  if(i > 3600) { // 1 minuts worth of frame count
    i = 0;
  }
  noStroke();
  
  if(mouseIsPressed) {
    frameRate(60);
    fill(random(100),255,random(200),random(100,200));
    rad = 10;
    var point = {'x': mouseX, 'y': mouseY};
    if(write) {
      dots.push(point);
    } 
    
  } else {
    frameRate(20);
    fill(random(100),random(255), random(100), random(30));
    expand++;
    if(expand > 50) {
      expand = 0;
      rad = random(10);
    } 
    rad += random(3);
    
  }
  x = mouseX;
  y = mouseY;
  
  ellipse(x, y, rad, rad);
  if(read) {
    i++;
    if(i >= dots.length){
      i = 0;
    }
    // console.log(dots.length);
    fill(0,255,255);
    rad = 10;
    if(dots !== null && i < dots.length) {
      x = dots[i].x + 100;
      y = dots[i].y + 20;
      console.log(dots[i].x);
      rect(x, y, rad, rad);
    }   
    
  }

  if(cleanBoard) {
    background(0);
    cleanBoard = false;
  }

}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    read = !read;
    background(0);
  }
  if(keyCode === RIGHT_ARROW) {
    cleanBoard = !cleanBoard;
  }

  if(keyCode === UP_ARROW) {
    write = !write;
  }
  if(keyCode === DOWN_ARROW) {
    dots = [];
  }
}