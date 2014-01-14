var scaleFactor=1;
var minimumRadius=0.8;
var renderID=0;

function renderLoop() {
	var rotation=bodies[renderID].rotation;
	fadeBackend(); //is this in engine??
	for (var i=0;i<bodies.length;i++) redraw(bodies[i],rotation);
	clearFrontend();
	for (var i=0;i<bodies.length;i++) drawText(bodies[i],rotation);
}

function drawUI() {
	//add code here to draw whatever UI currently needed
	//debugOut(); //redraw last debug message (uncomment if needed)
}

function redraw(body,rotation) {
	//
}

function drawText(body,rotation) {
	//
}

function getFocus(a,b,rotation) {
	//
}