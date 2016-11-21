// First look at the euclidean geometry and vectors  
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
	this.maxSpeed = 20;
	
	// euclidean velocity - start in centre of canvas with a random velocity
	this.pos = createVector(width/2,height/2);

	this.update = function() {
		this.vel = createVector(random(-100,100),random(-100,100));
		this.vel.normalize();
		this.vel.mult(this.maxSpeed);
		this.pos.add(this.vel);
	} // update


	this.render = function() {
		background("#fefefe");
		noStroke();
		fill(255,0,0,127);
		ellipse(this.pos.x,this.pos.y,this.d);
	} // show
} // Thing


