// Seeking the target (mouse position) 
// attempts to build in random size and its effect
// on acceleration based on size = mass. 
// al 12 November 2016

var gThingWorld = [];
var gPop = 100;

function setup() {
	createCanvas(1000,600);
	background("#fefefe")
	for (var i = 0; i < gPop; i++) {
		gThingWorld[i] = new Thing;
	}
}

function draw() {	
		background("#fefefe");
	for (var i = 0; i < gThingWorld.length; i++) {
		gThingWorld[i].update();
		gThingWorld[i].render();
	}
}

function Thing() { // thing constructor
	this.d = random(5,30);
	//this.qFactor = p5.Vector.random2D();
	//print(this.qFactor);
	this.force = 0.1/this.d;
	//print(this.d);
	this.maxSpeed = random(1,10);
	// euclidean velocity - start in centre of canvas with a random velocity
	this.pos = createVector(20,20);
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);

	this.update = function() {
		// calculate vector to mouse
		this.seekTarget();
		this.acc.add(this.qFactor);

		if (this.acc.mag()<this.d*0.10) {
			this.acc.mult(0);
			this.vel.mult(0);
		}

		this.acc.mult(1/(this.d));
		this.vel.add(this.acc);
		this.vel.normalize();
		this.vel.mult(this.maxSpeed);
		this.pos.add(this.vel);
	} // update

	this.render = function() {
		noStroke();
		fill(255,0,0,50);
		ellipse(this.pos.x,this.pos.y,this.d);
	} // show

	this.seekTarget = function() {
		this.mouseNow = createVector(mouseX,mouseY);
		this.acc = this.mouseNow.sub(this.pos); 
	}
} // Thing


