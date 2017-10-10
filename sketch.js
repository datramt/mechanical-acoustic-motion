/*
dan tramte
Illustrates simple mechanical motion of oscillator and resulting wave propagation
*/

var cell;
var amp, freq;
var xAngle, yAngle;
var angles = [];

function setup() {
  createCanvas(800, 400);
	angleMode(DEGREES);
  cell = 20;
	//adjust these
  amplitude = 40;
	freq = .3;
	//^^^
	xAngle = 1;
	yAngle = 0;

  	//generates list of phases for each column of particles
  for (var x = 1; x < width/cell +1 ; x++) {
		angles[x] = map(x*cell + width/2, width/2, width, 360, 0);
    print(angles[x]);
	}
}

function draw() {
  background(30);
	yAngle = sin(millis()*freq/2.777778);
	xAngle = cos(millis()*freq/2.777778);
  	//need to optimize array (avoid massive gaps)
	for (var x = 0; x < width/cell ; x++) {
		for (var y = 0; y < height/cell; y++) {
			noStroke();
			fill(200, 50, 200);
				var manyangles = cos(millis()*freq/2.777778 + angles[x]);
				ellipse(x* cell + width/2+ manyangles*amplitude, y*cell+ cell/2, cell/3);
          	//isolate single particle to demonstrate that it oscillates
          	/*
      			if (x == 7 && y == 9) {
          			fill(55, 255, 10);
          			ellipse(x* cell + width/2 + manyangles*amplitude, y*cell+ cell/2, cell/3);
        		}
          	*/
		}
	}

	stroke(155, 150, 255);
	noFill();
	strokeWeight(5);

  	//oscillator wheel
	ellipse(width/4, height/2, amplitude*2);
  	//spoke
	line(width/4, height/2, width/4 + xAngle*amplitude, height/2 + yAngle*amplitude);
  	//bar that connects spoke to diaphragm
	line(width/4 + xAngle*amplitude, height/2 + yAngle*amplitude, width/2 + xAngle*amplitude, height/2 + yAngle*amplitude);
  	//diaphragm
	line(width/2 + xAngle*amplitude, 0 , width/2 + xAngle*amplitude, height);
}
