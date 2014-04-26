var timing=1; //normally want it at 33 ?
var focusBody=0;

function initialize() {
	bodies=new randomSystem(2,20);
	barycenter=calculateBarycenter(bodies);
	interval.loop=interval.start('loop();',timing);
	// old draw around 0,0 used this, and we still use it because we base on 0,0 being centered
	render[1].setTransform(1,0,0,1,window.innerWidth/2,window.innerHeight/2);
	// this is supposed to work with barycenters (and it does initially, but breaks quickly)
	//render[1].setTransform(1,0,0,1,barycenter.x+window.innerWidth/2,barycenter.y+window.innerHeight/2);
}

function loop(){
	forEachCompare(bodies,function(a,b){physics.applyGravity(a,b);});
	forEach(bodies,function(b){physics.updateLocation(b);});
	// barycenters tend to not stay correct for long,
	// this may be because of glitchiness with colliding things that don't collide
	//physics.updateLocation(barycenter);
	barycenter=calculateBarycenter(bodies);

	redrawIdontLike();
	/* these should work for Barycenter based drawing, but don't
	render[1].setTransform(1,0,0,1,barycenter.x+window.innerWidth/2,barycenter.y+window.innerHeight/2);
	render[1].clearRect(barycenter.x-window.innerWidth/2,barycenter.y-window.innerHeight/2,window.innerWidth,window.innerHeight);
	*/
	// this line was used to draw a Body WHERE IT WAS
	//forEach(bodies,function(b){b.fill();});
	// this line was when using static position
	//render[1].clearRect(-window.innerWidth/2,-window.innerHeight/2,window.innerWidth,window.innerHeight);
}

function redrawIdontLike(){
	// use the old drawing method here,
	//NOT based on the barycenter because that isn't working wtf
	render[1].clearRect(-window.innerWidth/2,-window.innerHeight/2,window.innerWidth,window.innerHeight);
	forEach(bodies,function(b){
		render[1].beginPath();
		//render[1].arc(b.x-barycenter.x,b.y-barycenter.y,b.radius,0,Math.Tau);
		render[1].arc(b.x-bodies[focusBody].x,b.y-bodies[focusBody].y,b.radius,0,Math.Tau);
		render[1].fillStyle=b.color;
		render[1].fill();
	});
}

//this should be in Jenjens
function forEach(array,action){
	for (var i=0;i<array.length;i++)
		action(array[i]);}
//this should be in Jenjens
function forEachCompare(array,action){
	for (var i=0;i<array.length-1;i++)
		for (var j=i+1;j<array.length;j++)
			action(array[i],array[j]);}

function randomSystem(min,max){
	var total=random.integer(min,max);
	var b=[];
	b[0]=new Body(random.number(10000,50000),0,0);
	for (var i=1;i<total;i++){
		b[i]=new Body(random.number(100,500),
			random.number(-window.innerWidth/2,window.innerWidth/2),
			random.number(-window.innerHeight/2,window.innerHeight/2));
		//this is where a setOrbit call would go
		setOrbit(b[0],b[i]);
	}
	return b;
}

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

function Body(mass,x,y,color,rotationSpeed){
	Vector.call(this);
	Circle.call(this,Math.pow(mass,1/3),x,y,color);

	this.mass=mass;
	this.rotation=0;
	!rotationSpeed ? this.rotationSpeed=0 : this.rotationSpeed=rotationSpeed;
}

//should be rewritten/in Jenjens
function Circle(radius,x,y,color){
	!radius ? this.radius=5 : this.radius=radius;
	!x ? this.x=0 : this.x=x;
	!y ? this.y=0 : this.y=y;
	!color ? this.color='#FFF' : this.color=color;

	// the fill() method obsoleted by old style of rendering because setTransform()
	// doesn't work in a loop
	this.fill=function(context){
		if (!context) context=render[1];
		context.beginPath();
		context.arc(this.x,this.y,this.radius,0,Math.Tau);
		context.fillStyle=this.color;
		context.fill();
	}
}



var version=0;	//version number of your program
document.title='v'+version+' Jenjens v'+engineVersion;
/*
terminal.clearLast=true;
terminal.background=null;
terminal.color='black';
terminal.font='12px sans-serif';
terminal.textHeight=12;
terminal.xOffset=4;
terminal.yOffset=4;
terminal.logging=true;

var debugColor='maroon';	//used in debug tools drawing things
var debugLineWidth=1.2;		//used in debug tools drawing things
*/
