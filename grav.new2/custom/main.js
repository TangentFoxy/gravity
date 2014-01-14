function initialize() {
	bodies=[];
	bodies[0]=new Body(200000,0,0);
	bodies[1]=new Body(100,400,0);
	bodies[1].Vy=-getOrbitalVelocity(bodies[0],400); //remember this will be changed
	//bodies=new randomSystem();
}

function physicsLoop() {
	/*gravity*/for (var i=0;i<bodies.length-1;i++) for (var j=i+1;j<bodies.length;j++) gravity(bodies[i],bodies[j]);
	/*update location*/for (var i=0;i<bodies.length;i++) updateLocation(bodies[i]);
}

function slowLoop() {
	//place slow update stuff here
	updateCanvasSize();
}

function key(key) {
	switch(key)
	{
		case 87:
		//W
		break;
		case 65:
		//A
		break;
		case 83:
		//S
		break;
		case 68:
		//D
		break;
		default:
		//throw "invalid key pressed";
		console.log('keyCode '+key+' pressed');
	}}