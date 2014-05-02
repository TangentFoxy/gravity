physics.G=1/5;			//Gravitational Constant (incorrect by default)
physics.timeStep=0.5;	//timeStep is multiplied by physics calculations
						// to adjust speed vs accuracy of simulation

//alternate gravity thing which is weird:
// this apparently works AND checks for collisions?
//  and requires a lot less calculation
//   test this
function altGravity(a,b){
	var rx=a.x-b.x;		var ry=a.y-b.y;
	var R2=rx*rx+ry*ry;	var Rdiv=Math.pow(R2,-1.5);
	a.Vx-=a.mass*Rdiv*rx;	b.Vx+=b.mass*Rdiv*rx;
	a.Vy-=a.mass*Rdiv*ry;	b.Vy+=b.mass*Rdiv*ry;
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
