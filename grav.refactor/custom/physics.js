physics.G=1/5;			//Gravitational Constant (incorrect by default)
physics.timeStep=0.5;	//timeStep is multiplied by physics calculations
						// to adjust speed vs accuracy of simulation

function radialCollisionCheck(a,b){
	if (Math.getDistance(a,b)<a.radius+b.radius) return true;
	return false;
}
function combine(a,b){
	if (b.mass>a.mass) a.color=b.color;								//adjust to keep values
	if (focusBody==bodies.indexOf(b)) focusBody=bodies.indexOf(a);	//of more massive body
	if (focusBody>bodies.indexOf(b)) focusBody-=1;

	var Lx=a.x*a.mass+b.x*b.mass;	//weight location by mass
	var Ly=a.y*a.mass+b.y*b.mass;
	var Fx=a.Vx*a.mass+b.Vx*b.mass;	//calculate Force
	var Fy=a.Vy*a.mass+b.Vy*b.mass;
	a.mass+=b.mass;					//add mass
	a.Vx=Fx/a.mass;					//apply Force
	a.Vy=Fy/b.mass;
	a.radius=Math.pow(a.mass,1/2.7);	//recalculate radius
	a.x=Lx/a.mass;					//move to new location
	a.y=Ly/a.mass;
	bodies.splice(bodies.indexOf(b),1);	//remove extra body
}

function altGravity(a,b){
	//wtf is this
	var rx=a.x-b.x;		var ry=a.y-b.y;
	var R2=rx*rx+ry*ry;	var Rdiv=Math.pow(R2,-1.5);
	a.Vx-=a.mass*Rdiv*rx*physics.timeStep;	b.Vx+=b.mass*Rdiv*rx*physics.timeStep;
	a.Vy-=a.mass*Rdiv*ry*physics.timeStep;	b.Vy+=b.mass*Rdiv*ry*physics.timeStep;
}

function getParentAndInfluencer(a,b){
	//this needs to compare the two and assign one as parent or child
	// and / or as influencer or influencee
	/*
	this.parent=-1;
	this.parentForce=0;
	this.influencer=-1;
	this.influencerForce=0;
	*/
}
