console.log(fxhash)   
console.log(fxrand()) 

let randColor1 = fxrand()*124;
let randColor2 = fxrand()*164;
let randColor3 = fxrand()*100;


function setup() {
    createCanvas(vmin(100), vmin(100), WEBGL);
    noFill();
    background(0);
    
}


function draw() {
  for (let i = 0; i < 361; i++) {
    if(frameCount>2000) {
      break;
    }
    translate(0, 0, 0-frameCount+fxrand());
    normalMaterial();
    push();
    rotateZ(frameCount * (randColor1 / 1200));
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.02);
    stroke(frameCount,20,60,0.7);
    box(390+frameCount/772+fxrand(),490+i/472,194,94,randColor2);
    pop();
  }

}


function vmin(viewport_percent) {

  var canvas_size = windowWidth > windowHeight ? windowHeight : windowWidth;
  canvas_size -= canvas_size * ((100 - viewport_percent) / 100);
  return canvas_size;
  }

function windowResized() {
    (theSize = int(0.8 * min(windowWidth, windowHeight))), resizeCanvas(theSize, theSize, WEBGL), centerCanvas(), draw();
}



