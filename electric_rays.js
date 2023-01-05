console.log(fxhash)   
console.log(fxrand()) 

let star;


function preload() {	

		star = new Star();
}


function setup() {

    createCanvas(vmin(100), vmin(100));
	colorMode(HSB);
    strokeWeight(.6);
    angleMode(DEGREES);
	noFill();

}


function draw(){
    let fc = frameCount/30;
	blendMode(BLEND);
    background(0);
	blendMode(ADD);
	translate(width / 2, height / 2);
	stroke(star.c,20,60,0.7);
	drawingContext.shadowBlur = (sin(fc)+1)*50;
	drawingContext.shadowColor = color((fc*5)%360, 360, 360);

    beginShape();


	for (let i = 0; i < 361; i++) {
        let k = i * star.a;
        let r = 160 * sin(star.c * k);
        let x = r * sin(k);
        let y = r * cos(k) + r;
        vertex(x, y);
    }


    for (let i = 0; i < 180; i++) {
        let k = i * star.a;
        let r = 199 * sin(star.c * k - fc * 10);
        let x = r * sin(k);
        let y = r * cos(k);
        vertex(x, y);
    }



    endShape();
}


class Star{

    constructor(){
        this.a=fxrand() * 4 + 20;
        this.b=9;
		this.c=360;
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


