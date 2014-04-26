/*
	Copyright 2013-2014 Paul Liverman III

	This file is part of Jenjens.

	Jenjens is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Jenjens is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with Jenjens.  If not, see <http://www.gnu.org/licenses/>.
*/
Vector=function(a,b,polar){
	//if a is Vector obj, copy it
	if (a!=undefined) {
		if (a.Vx!=undefined) {
			this.Vx=a.Vx;	this.Vy=a.Vy;}
		if (a.magnitude!=undefined) {
			this.magnitude=a.magnitude;	this.direction=a.direction;}
	}

	//create Vector
	if (polar) {
		!a? this.magnitude=0 : this.magnitude=a;
		!b? this.direction=0 : this.direction=b;
	} else {
		!a? this.Vx=0 : this.Vx=a;
		!b? this.Vy=0 : this.Vy=b;}

	this.toPolar=function(){
		this.magnitude=Math.sqrt(this.Vx*this.Vx+this.Vy*this.Vy);
		this.direction=Math.atan2(this.Vy,this.Vx);
		delete this.Vx;	delete this.Vy;}
	this.toCartesian=function(){
		this.Vx=Math.cos(this.direction)*this.magnitude;
		this.Vy=Math.sin(this.direction)*this.magnitude;
		delete this.magnitude;	delete this.direction;}
	this.add=function(v){
		if (this.Vx!=undefined) {
			if (v.Vx!=undefined) {
				this.Vx+=v.Vx;	this.Vy+=v.Vy;
			} else {
				this.Vx+=Math.cos(v.direction)*v.magnitude;
				this.Vy+=Math.sin(v.direction)*v.magnitude;}
		} else {
			if (v.Vx!=undefined) {
				this.Vx=Math.cos(this.direction)*this.magnitude+v.Vx;
				this.Vy=Math.sin(this.direction)*this.magnitude+v.Vy;
				this.toPolar();
			} else {
				this.Vx=Math.cos(this.direction)*this.magnitude+Math.cos(v.direction)*v.magnitude;
				this.Vy=Math.sin(this.direction)*this.magnitude+Math.sin(v.direction)*v.magnitude;
				this.toPolar();}
		}}
	this.subtract=function(v){
		if (vector.Vx!=undefined) {
			this.add({Vx:-v.Vx,Vy:-v.Vy});
		} else {
			this.add({magnitude:-v.magnitude,direction:v.direction});}}
	this.getXcomponent=function(){
		if (this.Vx!=undefined) return this.Vx;
		return Math.cos(this.direction)*this.magnitude;}
	this.getYcomponent=function(){
		if (this.Vy!=undefined) return this.Vy;
		return Math.sin(this.direction)*this.magnitude;}
	this.getMagnitude=function(){
		if (this.magnitude!=undefined) return this.magnitude;
		return Math.sqrt(this.Vx*this.Vx+this.Vy*this.Vy);}
	this.getDirection=function(){
		if (this.direction!=undefined) return this.direction;
		return Math.atan2(this.Vy,this.Vx);}
}

physics={
	G:6.67384e-11,		//these are overwritten in custom
	timeStep:1,
	//expects objects with mass,x,y,Vx,Vy
	// applies each object's gravity to the other
	applyGravity:	function(a,b){
		var Nx=false;	var Ny=false;	//flags for fixing direction of gravity
		var Dx=a.x-b.x;	var Dy=a.y-b.y;	//relative distance
		var Ds=Dx*Dx+Dy*Dy;				//distance squared
		if (Ds==0) return;				//if exact same spot, do nothing
		if (Dx<0) {Nx=true;Dx=-Dx;}		//fix negative distance for calculations
		if (Dy<0) {Ny=true;Dy=-Dy;}

		var g=physics.G*b.mass/Ds;		//gravitational acceleration
		var Ax=Dx*g/(Dx+Dy);			//split acceleration into X/Y
		var Ay=g-Ax;
		if (Nx) Ax=-Ax;	if (Ny) Ay=-Ay;	//fix acceleration direction
		a.Vx-=Ax*physics.timeStep;		//apply acceleration
		a.Vy-=Ay*physics.timeStep;

		g=physics.G*a.mass/Ds;			//gravitational acceleration
		Ax=Dx*g/(Dx+Dy);	Ay=g-Ax;	//split acceleration into X/Y
		if (Nx) Ax=-Ax;	if (Ny) Ay=-Ay;	//fix acceleration direction
		b.Vx+=Ax*physics.timeStep;		//apply acceleration
		b.Vy+=Ay*physics.timeStep;
	},
	setOrbit:		function(parent,child,retrograde){
		var Nx=false;	var Ny=false;	//flags for negatives
		var Dx=parent.x-child.x;		//get distance
		var Dy=parent.y-child.y;
		if (Dx<0){Nx=true;Dx=-Dx;}		//fix signs for calculations
		if (Dy<0){Ny=true;Dy=-Dy;}
		var distance=Math.sqrt(Dx*Dx+Dy*Dy);
		var velocity=Math.sqrt(physics.G*parent.mass/distance);
		var Ax=Dx*velocity/(Dx+Dy);		//split velocity into x/y
		var Ay=velocity-Ax;
		if (!retrograde){				//make orbits counterclockwise
			if (Nx) Ax=-Ax;
			if (Ny) Ay=-Ay;}
		child.Vx=-Ay+parent.Vx;			//apply at right angle to balance against gravity
		child.Vy=Ax+parent.Vy;
	},
	calculateBarycenter:function(array){
		var B={x:0,y:0}; var totalMass=0;//position and temporary totalMass
		forEach(array,function(a){		//weight x/y against mass
			B.x+=a.mass*a.x;
			B.y+=a.mass*a.y;
			totalMass+=a.mass;
		});
		B.x/=totalMass;	B.y/=totalMass;	//fix weighted values to actual values
		return B;					//Barycenter object with position
	},
	calculateBarycenterVector:function(array){
		var B=new Vector();				//create Vector
		B.x=0;	B.y=0;	var totalMass=0;//add x/y and temporary totalMass
		forEach(array,function(a){
			B.x+=a.mass*a.x;
			B.y+=a.mass*a.y;
			B.Vx+=a.mass*a.Vx;
			B.Vy+=a.mass*a.Vy;
			totalMass+=a.mass;
		});
		B.x/=totalMass;		B.y/=totalMass;	//fix weighted values to actual values
		B.Vx/=totalMass;	B.Vy/=totalMass;
		return B;						//Barycenter object with position/velocity
	},

	updateLocation:	function(o){
		//save last position
		o.lastX=o.x;	o.lastY=o.y;
		//angular velocity
		if (o.rotationSpeed!=null){
			o.lastRotation=o.rotation;
			o.rotation+=o.rotationSpeed*physics.timeStep;
			if (o.rotation>0){
				while(o.rotation>Math.Tau) o.rotation-=Math.Tau;
			} else {
				while(o.rotation<-Math.Tau) o.rotation+=Math.Tau;
			}
		}
		//velocity vector
		if (o.Vx!=null) {
			o.x+=o.Vx*physics.timeStep;
			o.y+=o.Vy*physics.timeStep;
		} else if (o.magnitude!=null) {
			var x=Math.cos(o.direction)*o.magnitude;
			var y=Math.sin(o.direction)*o.magnitude;
			o.x+=x*physics.timeStep;
			o.y+=y*physics.timeStep;
		}
	}
};
/*
function getDistance(A,B) {return Math.sqrt(A*A+B*B);}
//function getDirection(A,B) {return Math.atan((A.y-B.y)/(A.x-B.x));} //this is also bullshit
function getDirection(A,B) {return Math.atan2((A.y-B.y),(A.x-B.x));}
/*function getDirection(A,B,x,y) { // THIS MAY BE COMPLETELY WRONG LET'S IGNORE IT
	if (A.x!=undefined) return Math.atan2((A.y-B.y),(A.x-B.x));
	return Math.atan2((B-y),(A-x));}/



function getOrbitalVelocity(parent,child) {
	if (child.x!=undefined) {
		var Dx=parent.x-child.x;
		var Dy=parent.y-child.y;
		var distance=Math.sqrt(Dx*Dx+Dy*Dy);
	} else {
		var distance=child;}
	var velocity=G*parent.mass/distance;
	if (isNaN(velocity)) return 0;
	return Math.sqrt(Math.abs(velocity));}
function getSemiMajorAxis(parent,child) {
	var tmp=new Vector(child);
	tmp.subtractVector(parent);
	var velocity=tmp.getMagnitude();
	var radius=getDistance(parent,child);
	return -1/(velocity*velocity/G*parent.mass-2/radius);}
function getOrbitalParameters(parent,child) {
	//check for 90 degree angle and return NaN if not
	//90 is Tau/4, -Tau/4, (3Tau/4, -3Tau/4)
	var radius=getDistance(parent,child);
	var SMA=getSemiMajorAxis(parent,child);
	if (child.getDirection()==getDirection(parent,child)) {
		//logic to find whether we are at AP or PE
		if (SMA<radius) {
			var AP=radius; //at AP
			var PE=2*SMA-radius;
		} else {
			var PE=radius; //at PE
			var AP=2*SMA-radius;}
		//return all
		return {AP:AP,PE:PE};
	} else {
		return Number.NaN;}}

//these only work at perfect right angles during orbit
// (angle between distance and velocity)
// they also ASSUME you are at the opposite end of the orbit
// they're also identical and kind of pointless
function getApoapsis(parent,child) {return 2*getSemiMajorAxis(parent,child)-getDistance(parent,child);}
function getPeriapsis(parent,child) {return 2*getSemiMajorAxis(parent,child)-getDistance(parent,child);}
*/
