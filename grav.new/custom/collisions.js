//if (radialCollision(bodies[j],bodies[i])) combineBodies(bodies[i],bodies[j]);

function radialCollision(a,b) {
	var Dx=a.x-b.x;
	var Dy=a.y-b.y;
	var D=Math.sqrt(Dx*Dx+Dy*Dy);
	if (D<a.radius+b.radius) return true;
	return false;}

function combineBodies(a,b) {
	//
	console.log('shit happened');
	if (b>a) {
		a.r=b.r;
		a.g=b.g;
		a.b=b.b;
		a.a=b.a;
		a.atmosphereColor=b.atmosphereColor;
		a.name=b.name;}
	a.atmosphereHeight+=Math.pow(b.atmosphereHeight,1/3);
	//if (bodies.indexOf(b)>bodies.indexOf(a)) //something
	//if (renderID==bodies.indexOf(b)) renderID=//
}