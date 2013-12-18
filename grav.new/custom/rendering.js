var scaleFactor=1;
var minimumRadius=0.8;
var renderID=0;

function renderLoop() {
	var rotation=bodies[renderID].rotation;
	fadeBackend(); //add this function to the engine
	for (var i=0;i<bodies.length;i++) redraw(bodies[i],rotation);
	clearFrontend();
	for (var i=0;i<bodies.length;i++) drawText(bodies[i],rotation);
}

function redraw(body,rotation) {
	var focus=getFocus(body,bodies[renderID],rotation);
	var radius=body.radius*scaleFactor;
	if (radius<minimumRadius) radius=minimumRadius;
	backctx.beginPath();
	backctx.arc(focus.x,focus.y,radius,0,Math.Tau);
	backctx.fillStyle='white'; // TEMPORARY
	//need parsing functions to parse colors
	backctx.fill();
}

function drawText(body,rotation) {
	if (!body.showName) return;
	var focus=getFocus(body,bodies[renderID],rotation);
	frontctx.fillText(body.name,focus.x+(body.radius/*+atmosphere*/)*scaleFactor+2,focus.y-(body.radius/*+atmosphere*/)*scaleFactor-2);
	// note this assumes text has been readying to proper format for this
}

function getFocus(a,b,rotation) {
	var x=((a.x-b.x)*Math.cos(rotation)-(a.y-b.y)*Math.sin(rotation))*scaleFactor+backend.width/2;
	var y=((a.x-b.x)*Math.sin(rotation)-(a.y-b.y)*Math.cos(rotation))*scaleFactor+backend.height/2;
	return {x:x,y:y};
}

var fadeAlpha=0.04;
function fadeBackend() {
	//backctx.beginPath();
	backctx.fillStyle='rgba(0,0,0,'+fadeAlpha+')';
	backctx.fillRect(0,0,backend.width,backend.height);
}