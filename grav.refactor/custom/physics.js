physics.G=1/5;			//Gravitational Constant (incorrect by default)
physics.timeStep=0.5;	//timeStep is multiplied by physics calculations
						// to adjust speed vs accuracy of simulation

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
