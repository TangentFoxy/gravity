function clearUI() {UI.clearRect(0,0,UI.width,UI.height);}
function clearFrontend() {frontctx.clearRect(0-canvasX,0-canvasY,frontend.width,frontend.height);}
function clearBackend() {backctx.clearRect(0-canvasX,0-canvasY,backend.width,backend.height);}
function clearAll() {clearUI();	clearFrontend();	clearBackend();}
function fadeUI() {
	UI.fillStyle='rgba('+fadeColor+','+fadeAlpha+')';
	UI.fillRect(0,0,UI.width,UI.height);}
function fadeFrontend() {
	frontctx.fillStyle='rgba('+fadeColor+','+fadeAlpha+')';
	frontctx.fillRect(0-canvasX,0-canvasY,frontend.width,frontend.height);}
function fadeBackend() {
	backctx.fillStyle='rgba('+fadeColor+','+fadeAlpha+')';
	backctx.fillRect(0-canvasX,0-canvasY,backend.width,backend.height);}
function fadeAll() {fadeUI();	fadeFrontend();	fadeBackend();}



function translate(x,y) {
	var r=canvasR;
	setRotation(0);
	canvasX+=x;
	canvasY+=y;
	backctx.translate(x,y);
	frontctx.translate(x,y);
	setRotation(r);}
function setTranslation(x,y) {
	var r=canvasR;
	setRotation(0);
	backctx.translate(x-canvasX,y-canvasY);
	frontctx.translate(x-canvasX,y-canvasY);
	canvasX=x;
	canvasY=y;
	setRotation(r);}
function rotate(r) { //may want to change how rotation works to rotate around center of canvas??
	canvasR=r;
	backctx.rotate(r);
	frontctx.rotate(r);}
function setRotation(r) {
	backctx.rotate(r-canvasR);
	frontctx.rotate(r-canvasR);
	canvasR=r;}
function scale(s) {
	//var r=canvasR;
	//setRotation(0);
	canvasS=s;
	backctx.scale(s,s);
	frontctx.scale(s,s);
	//setRotation(r);
}
function setScale(s) {
	//var r=canvasR;
	//setRotation(0);
	backctx.scale(1/canvasS,1/canvasS);
	frontctx.scale(1/canvasS,1/canvasS);
	backctx.scale(s,s);
	frontctx.scale(s,s);
	canvasS=s;
	//setRotation(r);
}



function roundRect(x,y,width,height,radius,context) {
	if (context==null) context=backctx;
	if (radius==null) radius=5;
	context.translate(x,y);
	context.beginPath();
	context.moveTo(width/-2+radius,height/-2);
	context.arcTo(width/-2+width,height/-2,width/-2+width,height/-2+height,radius);
	context.arcTo(width/-2+width,height/-2+height,width/-2,height/-2+height,radius);
	context.arcTo(width/-2,height/-2+height,width/-2,height/-2,radius);
	context.arcTo(width/-2,height/-2,width/-2+width,height/-2,radius);
	context.closePath();
	context.translate(-x,-y);}



function updateCanvasSize() {
	//Ignores translations and rotations I guess, is annoying as hell
	if (windowWidth!=window.innerWidth || windowHeight!=window.innerHeight) {
		var frontImg=frontctx.getImageData(0,0,windowWidth,windowHeight);
		var backImg=backctx.getImageData(0,0,windowWidth,windowHeight);
		frontend.width=window.innerWidth;
		frontend.height=window.innerHeight;
		backend.width=window.innerWidth;
		backend.height=window.innerHeight;
		//setTranslation(canvasX,canvasY);
		frontctx.putImageData(frontImg,(window.innerWidth-windowWidth)/2,(window.innerHeight-windowHeight)/2);
		backctx.putImageData(backImg,(window.innerWidth-windowWidth)/2,(window.innerHeight-windowHeight)/2);
		//setTranslation(canvasX,canvasY);
		UIcanvas.width=window.innerWidth;
		UIcanvas.height=window.innerHeight;
		drawUI();
		windowWidth=window.innerWidth;
		windowHeight=window.innerHeight;
	}}



// DEPRECIATED FUNCTIONS, DO NOT USE

//depreciated, use object.clearLast(context) instead
function clearLastCircle(object,context) {
	if (context==null) {
		backctx.beginPath();
		backctx.arc(object.lastX,object.lastY,object.radius,0,Math.Tau);
		backctx.fillStyle='#000';
		backctx.fill();
	} else {
		context.beginPath();
		context.arc(object.lastX,object.lastY,object.radius,0,Math.Tau);
		context.fillStyle='#000';
		context.fill();
	}}