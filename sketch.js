// First look at the constructor function 
// Makes a random walk of blobs around the canvas
// the tail of which is of limted and settable length
// al 12 November 2016


var blobs = [];
var x, y;
var gInc = 20;
var gOpac = 127;
var gBSize = 40;
var gTailLength = 500;

function setup() {
		createCanvas(800,600); 
		background("#fefefe");
		noStroke();
		x = width/2;
		y = height/2; 
		createP("Makes a random walk of blobs around the screen.");
		createP("The blob trail is limited to a set number of blobs, after which they begin to disappear.")
	
}

function draw() {
	x = x+random(-gInc,gInc);
	y = y+random(-gInc,gInc);
	if (y>height) { 
		y=0; 
	} 
	if (y<0) { 
		y=height; 
	} 
	if (x>width) { 
		x=0; 
	} 
	if (x<0) { 
		x=width; 
	} 
	
	r = random(255);
	g = random(255);
	b = random(255);
	background("#fefefe");
	
	blobs.push(new Blob(x,y,r,g,b));
	if (blobs.length>gTailLength){
		blobs.splice(0,1);
	}
	for (var i = 0; i < blobs.length; i++) {
		blobs[i].show();
	} // for loop
}	// draw

function Blob(xPos,yPos,rCol,gCol,bCol) { // constructor
	this.x = xPos;
	this.y = yPos;
	this.r = rCol;
	this.g = gCol;
	this.b = bCol;

	this.show = function() {
		fill(this.r,this.g,this.b,gOpac);
		ellipse(this.x,this.y,gBSize);
	} // this.show
}	// fn Blob
	
