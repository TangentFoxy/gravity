var minSolarMass=1e+8;
var maxSolarMass=1e+14;
var minBodyMass=
var maxBodyMass=
var minAtmosphereHeight=
var maxAtmosphereHeight=

function randomSystem(min,max) {
	//Body(mass,x,y,color,name,atmosphereHeight,atmosphereColor,rotation,rotationSpeed)
	var count=randomInt(min,max);
	var system=[];
	system[0]=new Body(randomNum(minSolarMass,maxSolarMass),0,0,
		'#'+randomInt(0,255).toString(16)+'0000',
		'Sol');
	for (var i=1;i<count;i++) {
		system[i]=new Body(randomNum(minBodyMass,maxBodyMass),0,0,
			randomColor(),
			false,
			randomNum(minAtmosphereHeight,maxAtmosphereHeight),
			randomColor());
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