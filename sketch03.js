// Seeking the target (mouse position) 
// al 12 November 2016

function setup() {
	createCanvas(1000,600);
	background("#fefefe");
	t = new Thing;
	
}

function draw() {	
	t.update();
	t.render();
}

function Thing() { // thing constructor
	this.d = 40;
	this.maxSpeed = 10;
	// euclidean velocity - start in centre of canvas with a random velocity
	this.pos = createVector(20,20);
	this.vel = createVector(0,0);
	//this.acc = createVector(0,0);

	this.update = function() {
		// calculate vector to mouse
		this.seekTarget();
		this.vel.add(this.acc);
		this.vel.normalize();
		this.vel.mult(this.maxSpeed);
		this.pos.add(this.vel);
	} // update

	this.render = function() {
		background("#fefefe");
		noStroke();
		fill(255,0,0,150);
		ellipse(this.pos.x,this.pos.y,this.d);
	} // show

	this.seekTarget = function() {
		this.mouseNow = createVector(mouseX,mouseY);
		this.acc = this.mouseNow.sub(this.pos); 
	}
} // Thing


