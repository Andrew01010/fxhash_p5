console.log(fxhash)   
console.log(fxrand()) 
let randX = fxrand()*324;
let randY = fxrand()*124;

let randColor1 = fxrand()*124;
let randColor2 = fxrand()*164;
let randColor3 = fxrand()*100;
let blend;
 
function setup() {
    createCanvas(vmin(100), vmin(100));
    background(255-randColor2,250-randColor1,240-randColor3); 
    strokeWeight(4);
}
 
function draw() {
    for (let i = 0; i < 3; i++) { 
        if(frameCount>800) {
            break;
        }
        let randMode = round(random(12));
        switch(randMode) {
          case 1:
            blendMode(DODGE);
            break;
          case 2:
            blendMode(LIGHTEST);
            break;
          case 3:
            blendMode(ADD);
            break;
          case 4:
            blendMode(SOFT_LIGHT);
            break; 
          case 5:
            blendMode(SCREEN);
            break; 
          case 6:
            blendMode(ADD);
            break; 
          case 7:
            blendMode(HARD_LIGHT);
            break; 
          case 8:
            blendMode(SCREEN);
            break;
          case 9:
            blendMode(DODGE);
            break;              
          default:
            blendMode(BLEND);
        }
        
        console.log(randMode);
       
        let x = round( random(15,450) );
        let y = round( random(15,450) );
        let h = round( random(100,500) );
        let w = round( random(40,600) );
        let chrome = color(140*fxrand(),120*fxrand(),140*fxrand(),10);
        let chrome2 = color(130*fxrand(),120*fxrand(),180*fxrand(), 15);

        fill(chrome);
        noStroke();
        //stroke(randColor1,randColor2,randColor3,50);
        //rotate(PI/x*y);
        rect(x,y,h,w);
        //stroke(randColor2,randColor1,randColor3,70);
        ellipse(x+randX+100,y+randY,w,w);
        beginShape();
        vertex(x+410, y*2);
        vertex(x+600, y+340);
        vertex(x+310, y+340);
        vertex(x+400, y*5);
        endShape();

        fill(chrome2);
        translate(width/4, height/4);
        rotate(PI/x*y/2);
        rect(x, y, x*fxrand(), y*3);
        stroke(randColor2,randColor1,randColor3,20);
        if(randMode > 11) {
            line (y,x,i,frameCount);
        }
        
    }


}

function vmin(viewport_percent) {
  var canvas_size = windowWidth > windowHeight ? windowHeight : windowWidth;
  canvas_size -= canvas_size * ((100 - viewport_percent) / 100);
  return canvas_size;
}
