function Vector(a,b,polar) {
	if (polar) {
		!a? this.magnitude=0 : this.magnitude=a;
		!b? this.direction=0 : this.direction=b;
	} else {
		!a? this.Vx=0 : this.Vx=a;
		!b? this.Vy=0 : this.Vy=b;
	}

	this.toPolar=function(){
		this.magnitude=Math.sqrt(this.Vx*this.Vx+this.Vy*this.Vy);
		this.direction=Math.atan2(this.Vy,this.Vx);
		delete this.Vx;
		delete this.Vy;}
	this.toCartesian=function(){
		this.Vx=Math.cos(this.direction)*this.magnitude;
		this.Vy=Math.sin(this.direction)*this.magnitude;
		delete this.magnitude;
		delete this.direction;}
	this.addVector=function(vector){
		if (this.Vx!=null) {
			if (vector.Vx!=null) {
				this.Vx+=vector.Vx;
				this.Vy+=vector.Vy;
			} else {
				this.Vx+=Math.cos(vector.direction)*vector.magnitude;
				this.Vy+=Math.sin(vector.direction)*vector.magnitude;
			}
		} else {
			if (vector.Vx!=null) {
				this.Vx=Math.cos(this.direction)*this.magnitude+vector.Vx;
				this.Vy=Math.sin(this.direction)*this.magnitude+vector.Vy;
				this.toPolar();
			} else {
				this.Vx=Math.cos(this.direction)*this.magnitude+Math.cos(vector.direction)*vector.magnitude;
				this.Vy=Math.sin(this.direction)*this.magnitude+Math.sin(vector.direction)*vector.magnitude;
				this.toPolar();
			}}}
	this.getMagnitude=function(){
		if (this.magnitude!=null) {return this.magnitude;} else
		{return Math.sqrt(this.Vx*this.Vx+this.Vy*this.Vy);}}
	this.getDirection=function(){
		if (this.direction!=null) {return this.direction;} else
		{return Math.atan2(this.Vy,this.Vx);}}}



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
function logarithmicDrag(object) {
	if (object.Vx!=null) {
		if (object.Vx<0) {var Dx=Math.log(-object.Vx);} else {var Dx=-Math.log(object.Vx);}
		if (object.Vy<0) {var Dy=Math.log(-object.Vy);} else {var Dy=-Math.log(object.Vy);}
		//var drag=new Vector(Dx,Dy);
		//object=addVectors(object,drag); //would overwrite??
		//object.addVector(drag); //doesn't work if prototype does not have Vector...
		object.Vx+=Dx;
		object.Vy+=Dy;
		//fix over-doing the drag
		if (object.Dx<0) {if (object.Vx<0) object.Vx=0;} else {if (object.Vx>0) object.Vx=0;}
		if (object.Dy<0) {if (object.Vy<0) object.Vy=0;} else {if (object.Vy>0) object.Vy=0;}
	} else {
		var magnitude=Math.log(object.magnitude);
		var direction=object.direction+Math.PI;
		//var drag=new Vector(magnitude,direction,true);
		//object=addVectors(object,drag); //would overwrite??
		//object.addVector(drag); //doesn't work if prototype does not have Vector...
		// FIND OUT HOW TO COMBINE THESE NEW VALUES WITH THE OBJECT
	}}



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



// DEPRECIATED FUNCTIONS, DO NOT USE

//depreciated, use Vector.addVector() on the first Vector instead
function addVectors(v1,v2) {
	if (v1.Vx!=null) {
		if (v2.Vx==null) {v2.toVector();}
		return {Vx:v1.Vx+v2.Vx,Vy:v1.Vy+v2.Vy};
	} else {
		var x=Math.cos(v1.direction)*v1.magnitude;
		var y=Math.sin(v1.direction)*v1.magnitude;
		if (v2.magnitude!=null) {v2.toVector();}
		x+=v2.Vx;
		y+=v2.Vy;
		return {Vx:x,Vy:y};
	}}
//depreciated, use addVectors(v1,v2) for all additions
function addPolarVectors(v1,v2) {
	var x=Math.cos(v1.direction)*v1.magnitude+Math.cos(v2.direction)*v2.magnitude;
	var y=Math.sin(v1.direction)*v1.magnitude+Math.sin(v2.direction)*v2.magnitude;
	var m=Math.sqrt(x*x+y*y);
	var d=Math.atan2(y,x);
	return {magnitude:m,direction:d};}
//depreciated, use Vector.toPolar() instead
function toPolar(vector) {
	var m=Math.sqrt(vector.Vx*vector.Vx+vector.Vy*vector.Vy);
	var d=Math.atan2(vector.Vy,vector.Vx);
	return {magnitude:m,direction:d};}
//depreciated, use Vector.toVector() instead
function toVector(polar) {
	x=Math.cos(polar.direction)*polar.magnitude;
	y=Math.sin(polar.direction)*polar.magnitude;
	return {Vx:x,Vy:y};}