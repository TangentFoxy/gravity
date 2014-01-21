var minSolarMass=1e+8;
var maxSolarMass=1e+14;
var minBodyMass=1e+1;
var maxBodyMass=1e+4;
var minAtmosphereHeight=1e+0;
var maxAtmosphereHeight=1e+1;

function randomSystem(min,max) {
	//Body(mass,x,y,color,name,atmosphereHeight,atmosphereColor,rotation,rotationSpeed)
	var count=randomInt(min,max);
	var system=[];
	var solarColor=randomInt(0,255).toString(16);
	system[0]=new Body(randomNum(minSolarMass,maxSolarMass),0,0,
		'#'+solarColor+solarColor+'00',
		'Sol');
	for (var i=1;i<count;i++) {
		system[i]=new Body(randomNum(minBodyMass,maxBodyMass),
			randomNum(0,window.innerWidth/scaleFactor/2)-window.innerWidth/2,
			randomNum(0,window.innerHeight/scaleFactor/2)-window.innerHeight/2,
			randomColor(),
			false,
			randomNum(minAtmosphereHeight,maxAtmosphereHeight),
			randomColor());
		//system[i].Vy+getOrbitalVelocity(system[0],system[i].getMagnitude());
		setOrbit(system[0],system[i]);
	}
	return system;}

/*
function randomColor(type) {
	var result=randomInt(0,16777215)
	switch(type)
	{
		case 'hex':
		result='#'+result.toString(16);
		break;
		case 'rgb':
		result=hexToRGBcomponents(result.toString(16));
		break;
		default:
		result='#'+result.toString(16);
	}
	return result;	/*return randomInt(0,16777215).toString(16);*h/}
*/

/*function randomColorComponent() {
	var result=randomInt()
}*/