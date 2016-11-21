// Seeking a target (lone Thing chasing the mouse)
// This example of Craig Reynolds'steering formula in action 
// (steering = desired-velocity)  is from Dan Shiffman's Processing 
// book, The Nature of Code and modified for p5.js by al.  
// al 14 November 2016


function setup() {
	createCanvas(1000,600);
	background("#fefefe")
	t = new Thing(random(width),random(height));
}

function draw() {	
	gTarget = createVector(mouseX,mouseY);
	background("#fefefe");
	t.seekTarget(gTarget);
	t.update();
	t.render();
}

function Thing(startX,startY) { // thing constructor
	this.d = 40; 
	this.maxSpeed = 4;
	this.maxForce = 0.1;

	// euler integration physics engine
	this.acc = createVector(0,0);
	this.vel = createVector(0,0);
	this.pos = createVector(startX,startY);

	// vectors for Reynolds' steering formula
	this.desired = createVector(0,0);
	this.steering = createVector(0,0);

	this.update = function() {
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.mult(0); // reset acc after each update
	} // update

	this.applyForce = function(aForce) {
		this.acc.add(aForce);
	} // applyForce

	this.seekTarget = function(target) {
		this.desired = p5.Vector.sub(target,this.pos);
		this.desired.normalize();
		this.desired.mult(this.maxSpeed);
		this.steering = p5.Vector.sub(this.desired,this.vel);
		this.steering.limit(this.maxForce);
		this.applyForce(this.steering);
	} // seekTarget

	this.render = function() {
		noStroke();
		fill(127,127,0,127);
		ellipse(this.pos.x,this.pos.y,this.d);
	} // render

} // Thing


