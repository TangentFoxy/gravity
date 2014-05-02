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

function getSemiMajorAxis(parent,child){
	var tmp=new Vector(child);
	tmp.subtract(parent);
	var velocity=tmp.getMagnitude();
	var radius=Math.getDistance(parent,child);
	return -1/(velocity*velocity/G*parent.mass-2/radius);

	/*
function getSemiMajorAxis(parent,child) {
	var tmp=new Vector(child);
	tmp.subtractVector(parent);
	var velocity=tmp.getMagnitude();
	var radius=getDistance(parent,child);
	return -1/(velocity*velocity/G*parent.mass-2/radius);}
	*/
}

function getParentAndInfluencer(a,b){
	//this needs to compare the two and assign one as parent or as influencer

	var dist=Math.getDistance(a,b);

	var g=physics.G*a.mass/dist; //a's affect on b

	if (g>b.parentForce) {
		//a is parent of b
		b.parent=bodies.indexOf(a);
		b.parentForce=g;
		return;
	}
	if (g>b.influencerForce) {
		//a is influencer of b
		b.influencer=bodies.indexOf(a);
		b.influencerForce=g;
		return;
	}

	var g=physics.G*b.mass/dist; //b's affect on a

	if (g>a.parentForce) {
		//b is parent of a
		a.parent=bodies.indexOf(b);
		a.parentForce=g;
		return;
	}
	if (g>b.influencerForce) {
		//b is influencer of a
		a.influencer=bodies.indexOf(b);
		a.influencerForce=g;
		return;
	}

}
