var drawing = [];
var canvas;

function setup(){

    canvas = createCanvas(displayWidth+20, displayHeight);

}

function mouseDragged(){

    var point={
    x : mouseX,
    y : mouseY
  }
  drawing.push(point);

} 

function draw(){
  background(0);

  beginShape();

  strokeWeight(4);

  stroke("pink");

  fill(0);
  for(var i = 0; i< drawing.length; i++){
    vertex(drawing[i].x, drawing[i].y);

    endShape();

  }
}