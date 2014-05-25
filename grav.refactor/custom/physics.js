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
