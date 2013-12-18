function updateLocation(object) {
	//save last positions
	if (object.x!=null) object.lastX=object.x;
	if (object.y!=null) object.lastY=object.y;
	if (object.rotation!=null) object.lastRotation=object.rotation;
	//angular velocity
	if (object.rotationSpeed!=null) {
		object.rotation+=object.rotationSpeed*timeStep;
		if (object.rotation>0) {
			while(object.rotation>Math.Tau) object.rotation-=Math.Tau;
		} else {
			while(object.rotation<-Math.Tau) object.rotation+=Math.Tau;
		}
	}
	//velocity vector (x/y or polar form)
	if (object.x!=null) {
		if (object.Vx!=null) {
			object.x+=object.Vx*timeStep;
			object.y+=object.Vy*timeStep;
		} else {
			if (object.magnitude!=null) {
				var x=Math.cos(object.direction)*object.magnitude;
				var y=Math.sin(object.direction)*object.magnitude;
				object.x+=x*timeStep;
				object.y+=y*timeStep;
			}
	}}}



function gravity(a,b) {
	var Nx=false;
	var Ny=false;
	var Dx=a.x-b.x;					//get relative distances
	var Dy=a.y-b.y;
	var Ds=Dx*Dx+Dy*Dy;				//note Ds is Distance^2
	if (Ds==0) return;
	if (Dx<0) {Nx=true;Dx=-Dx;}	//fix negative distance for calculations
	if (Dy<0) {Ny=true;Dy=-Dy;}

	var g=G*b.mass/Ds;				//gravitational acceleration
	//if (isNaN(g)) g=0; //this used to not be needed, wtf changed
	var Ax=Dx*g/(Dx+Dy);
	var Ay=g-Ax;
	if (Nx) Ax=-Ax;					//fix negative acceleration
	if (Ny) Ay=-Ay;
	//Ax=-Ax;	//forgot why, but lower ID object always needed this
	//Ay=-Ay;	//it's still needed for some reason and doesn't make any sense??
	a.Vx+=Ax*timeStep;				//apply change of velocity
	a.Vy+=Ay*timeStep;

	g=G*a.mass/Ds;					//gravitational acceleration
	if (isNaN(g)) g=0;
	Ax=Dx*g/(Dx+Dy);
	Ay=g-Ax;
	if (Nx) Ax=-Ax;					//fix negative acceleration
	if (Ny) Ay=-Ay;
	/*Ax=-Ax;
	Ay=-Ay;*/
	b.Vx+=Ax*timeStep;				//apply change of velocity
	b.Vy+=Ay*timeStep;}
function getOrbitalVelocity(parent,distance) {
	var velocity=G*parent.mass/distance;
	if (isNaN(velocity)) return 0; //just in case distance is somehow 0
	return Math.sqrt(Math.abs(velocity));}
function setOrbit(parent,child,retrograde) {
	var Nx=false;
	var Ny=false;
	var Dx=parent.x-child.x;
	var Dy=parent.y-child.y;
	if (Dx<0) {Nx=true;Dx=-Dx;}
	if (Dy<0) {Ny=true;Dy=-Dy;}
	var distance=Math.sqrt(Dx*Dx+Dy*Dy);
	var velocity=getOrbitalVelocity(parent,distance);
	var Ax=Dx*velocity/(Dx*Dy);
	var Ay=velocity-Ax;
	if (!retrograde) {
		if (Nx) Ax=-Ax;
		if (Ny) Ay=-Ay;
	}
	child.Vx=-Ay+parent.Vx; //velocity on the x axis seems to be working (but somewhat wrong?)
	child.Vy=Ax+parent.Vy;  /*y axis doesn't work at all anymore*/}