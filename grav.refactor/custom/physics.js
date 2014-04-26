physics.G=0.5;			//Gravitational Constant (incorrect by default)
physics.timeStep=0.5;	//timeStep is multiplied by physics calculations
						// to adjust speed vs accuracy of simulation

//this should be in Jenjens
function setOrbit(parent,child,retrograde){
	var Nx=false;	var Ny=false;	// flags for negatives
	var Dx=parent.x-child.x;		// get distance
	var Dy=parent.y-child.y;
	if (Dx<0){Nx=true;Dx=-Dx;}		// fix signs for calculation
	if (Dy<0){Ny=true;Dy=-Dy;}
	var distance=Math.sqrt(Dx*Dx+Dy*Dy);
	var velocity=Math.sqrt(physics.G*parent.mass/distance);
	var Ax=Dx*velocity/(Dx+Dy);		// split velocity into x/y axis
	var Ay=velocity-Ax;
	if (!retrograde){				// make orbits counterclockwise
		if (Nx) Ax=-Ax;
		if (Ny) Ay=-Ay;}
	child.Vx=-Ay+parent.Vx;			// apply at angles to balance gravitational pull
	child.Vy=Ax+parent.Vy;
}

//this should be in Jenjens
function calculateBarycenter(array){
	var B=new Vector();					//create Vector
	B.x=0;	B.y=0;	var totalMass=0;	//add x/y and temporary totalMass
	forEach(array,function(a){			//weight x/y and Vx/Vy against mass
		B.x+=a.mass*a.x;
		B.y+=a.mass*a.y;
		B.Vx+=a.mass*a.Vx;
		B.Vy+=a.mass*a.Vy;
		totalMass+=a.mass;
	});
	B.x/=totalMass;		B.y/=totalMass;	//fix weighted values to actual values
	B.Vx/=totalMass;	B.Vy/=totalMass;
	return B;							//Barycenter object containing a position and velocity
}



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
