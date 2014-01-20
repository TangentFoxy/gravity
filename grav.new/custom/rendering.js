var scaleFactor=1;
var minimumRadius=0.8;
var renderID=0;

function renderLoop() {
	//var x=bodies[renderID].x;
	//var y=bodies[renderID].y;
	//translate(x,y);
	//setTranslation(bodies[renderID].x,bodies[renderID].y);
	//translate(bodies[renderID].x,bodies[renderID].y);
	//setTranslation(x,y);
	var rotation=bodies[renderID].rotation;
	//fadeBackend();
	circlesClearFadeThing(rotation);
	for (var i=0;i<bodies.length;i++) redraw(bodies[i],rotation);
	clearFrontend();
	for (var i=0;i<bodies.length;i++) drawText(bodies[i],rotation);
	//translate(-x,-y);
	//translate(-bodies[renderID].x,-bodies[renderID].y);
}

function drawUI() {
	//add code here to draw whatever UI currently needed
}

function redraw(body,rotation) {
	var focus=getFocus(body,bodies[renderID],rotation);
	var radius=body.radius*scaleFactor;
	if (radius<minimumRadius) radius=minimumRadius;
	backctx.beginPath();
	backctx.arc(focus.x,focus.y,radius,0,Math.Tau);
	//backctx.fillStyle='white'; //temporary
	//need to parse colors
	backctx.fillStyle=parseRGBA(body.r,body.g,body.b,body.a);
	backctx.fill();}

function drawText(body,rotation) {
	if (!showNames) return;
	var focus=getFocus(body,bodies[renderID],rotation);
	frontctx.fillStyle='white';
	frontctx.fillText(body.name,focus.x+(body.radius/*+atmosphere*/)*scaleFactor+2,focus.y-(body.radius/*+atmosphere*/)*scaleFactor-2);
	//assumes text ready for format
}

function getFocus(a,b,rotation) {
	var x=((a.x-b.x)*Math.cos(rotation)-(a.y-b.y)*Math.sin(rotation))*scaleFactor+backend.width/2;
	var y=((a.x-b.x)*Math.sin(rotation)-(a.y-b.y)*Math.cos(rotation))*scaleFactor+backend.height/2;
	//var x=(a.x-b.x)*scaleFactor+backend.width/2;
	//var y=(a.y-b.y)*scaleFactor+backend.height/2;
	return {x:x,y:y};
	//return {x:windowWidth/2,y:windowHeight/2};
}

function circlesClearFadeThing(rotation) {
	for (var i=0;i<bodies.length;i++) {//bodies[i].clearLast('rgba(0,0,0,0.05)');
		//var focus=getFocus(bodies[i],bodies[renderID],rotation);
		var x=((bodies[i].lastX-bodies[renderID].lastX)*Math.cos(rotation)-(bodies[i].lastY-bodies[renderID].lastY)*Math.sin(rotation))*scaleFactor+backend.width/2;
		var y=((bodies[i].lastX-bodies[renderID].lastX)*Math.sin(rotation)-(bodies[i].lastY-bodies[renderID].lastY)*Math.cos(rotation))*scaleFactor+backend.width/2-141;
		backctx.beginPath();
		backctx.arc(x,y,bodies[i].radius+0.6,0,Math.Tau);
		backctx.fillStyle='rgba(0,0,0,0.90)';
		backctx.fill();}}