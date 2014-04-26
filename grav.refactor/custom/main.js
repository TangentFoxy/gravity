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
	//2*radius of star*2.8 should be where habitable zone is?
	//maybe even closer, like 2*radius*2.5 TO 2*radius*3.2 ???
	// 2*radius*2.4 TO 2*radius*4.2 seems best!?
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

//taken from an edit someone made a long time back
// the idea is to apply this scale to rendering by default to adapt it to show everything
// this needs to be adapted/modified and possibly used for a minimap
function scaleEstimate(){
	var maxDistance=0;
	forEach(bodies,function(b){
		var D=b.x*b.x+b.y*b.y;
		if (D>maxDistance) maxDistance=D;
	});
	return 0.4875 * window.innerHeight / Math.sqrt(maxDistance);
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
