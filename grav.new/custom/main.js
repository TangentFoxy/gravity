function initialize() {
	bodies=[];
	bodies[0]=new Body(200000,0,0,0,0);
	bodies[1]=new Body(100,400,0,0,0);
	bodies[1].Vy=-getOrbitalVelocity(bodies[0],400);
	//bodies=new randomSystem();
}

function physicsLoop() {
	/*gravity*/ for (var i=0;i<bodies.length-1;i++) for (var j=i+1;j<bodies.length;j++) gravity(bodies[i],bodies[j]);
	/*update location*/for (var i=0;i<bodies.length;i++) updateLocation(bodies[i]);
}