var timing=1; //normally want it at 33 ?
var focusBody=0;

function initialize() {
	bodies=new randomSystem(2,20);
	game=new Interval('loop();',timing);
}

function loop(){
	forEachCompare(bodies,function(a,b){
		physics.applyGravity(a,b);
		getParentAndInfluencer(a,b);
	});

	forEach(bodies,function(b){
		//call the func
	});

	forEach(bodies,function(b){physics.updateLocation(b);});

	redrawIdontLike();
}

function randomSystem(min,max){
	// Habitable zone will be based on star: 2*radius*2.4 TO 2*radius*4.2
	var total=random.integer(min,max);
	var b=[];
	b[0]=new Body(random.number(50,100),0,0);
	for (var i=1;i<total;i++){
		b[i]=new Body(random.number(5,10),
			random.number(-window.innerWidth/2,window.innerWidth/2),
			random.number(-window.innerHeight/2,window.innerHeight/2));
		physics.setOrbit(b[0],b[i]);
	}
	console.log("Generated "+b.length+" bodies.");
	return b;
}

function Body(radius,x,y,color,rotationSpeed){
	Vector.call(this);
	Circle.call(this,radius,x,y,color);

	this.mass=Math.pow(radius,2.7);
	this.rotation=0;
	!rotationSpeed ? this.rotationSpeed=0 : this.rotationSpeed=rotationSpeed;

	this.parent=0;
	this.parentForce=0;
	this.influencer=0;
	this.influencerForce=0;
	this.semiMajorAxis=0; //null
	this.getSemiMajorAxis=function(){
		//getSemiMajorAxis(parent,child)
		this.semiMajorAxis=getSemiMajorAxis(bodies[this.parent],this);
	}
}



var version="0.1.2r";	//version number of your program
document.title='Gravity v'+version+' Jenjens v'+engineVersion;
