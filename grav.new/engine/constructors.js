/*function Pic()
{
	//
}*/



function Circle(x,y,radius,color,alpha,rotation) {
	!x? this.x=0 : this.x=x;
	!y? this.y=0 : this.y=y;
	!radius? this.radius=5 : this.radius=radius;
	if (!color) {
		this.r=255;	this.g=255;	this.b=255;
	} else {
		var rgb=hexToRGBcomponents(colorToHex(color));
		this.r=rgb.r;	this.g=rgb.g;	this.b=rgb.b;}
	!alpha? this.a=1 : this.a=alpha;
	!rotation? this.rotation=0 : this.rotation=rotation;

	this.fill=function(context){
		if (context==null) context=backctx;
		context.beginPath();
		context.arc(this.x,this.y,this.radius,0,Math.Tau);
		context.fillStyle=parseRGBA(this.r,this.g,this.b,this.a);
		context.fill();}
	this.stroke=function(context){
		if (context==null) context=backctx;
		context.beginPath();
		context.arc(this.x,this.y,this.radius,0,Math.Tau);
		context.strokeStyle=parseRGBA(this.r,this.g,this.b,this.a);
		context.stroke();}
	this.clearLast=function(color){
		backctx.beginPath();
		backctx.arc(this.lastX,this.lastY,this.radius,0,Math.Tau);
		backctx.fillStyle=color;
		backctx.fill();}}
function Box(x,y,width,height,color,alpha,rotation) {
	!x? this.x=0 : this.x=x;
	!y? this.y=0 : this.y=y;
	!width? this.width=10 : this.width=width;
	!height? this.height=10 : this.height=height;
	if (!color) {
		this.r=255;	this.g=255;	this.b=255;
	} else {
		var rgb=hexToRGBcomponents(colorToHex(color));
		this.r=rgb.r;	this.g=rgb.g;	this.b=rgb.b;}
	!alpha? this.a=1 : this.a=alpha;
	!rotation? this.rotation=0 : this.rotation=rotation;

	this.fill=function(context){
		if (context==null) context=backctx;
		context.translate(this.x,this.y);
		context.rotate(this.rotation);
		context.fillStyle=parseRGBA(this.r,this.g,this.b,this.a);
		context.fillRect(this.width/-2,this.height/-2,this.width,this.height);
		context.rotate(-this.rotation);
		context.translate(-this.x,-this.y);}
	this.stroke=function(context){
		if (context==null) context=backctx;
		context.translate(this.x,this.y);
		context.rotate(this.rotation);
		context.strokeStyle=parseRGBA(this.r,this.g,this.b,this.a);
		context.strokeRect(this.width/-2,this.height/-2,this.width,this.height);
		context.rotate(-this.rotation);
		context.translate(-this.x,-this.y);}
	this.clearLast=function(context){
		if (context==null) context=backctx;
		context.translate(this.lastX,this.lastY);
		context.rotate(this.lastRotation);
		context.clearRect(this.width/-2,this.height/-2,this.width,this.height);
		context.rotate(-this.lastRotation);
		context.translate(-this.lastX,-this.lastY);}}