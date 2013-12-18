function Vector(a,b,polar) {
	if (polar) {
		!a? this.magnitude=0 : this.magnitude=a;
		!b? this.direction=0 : this.direction=b;
	} else {
		!a? this.Vx=0 : this.Vx=a;
		!b? this.Vy=0 : this.Vy=b;
	}

	this.toPolar=function(){
		this.magnitude=Math.sqrt(this.Vx*this.Vx+this.Vy*this.Vy);
		this.direction=Math.atan2(this.Vy,this.Vx);
		delete this.Vx;
		delete this.Vy;}
	this.toCartesian=function(){
		this.Vx=Math.cos(this.direction)*this.magnitude;
		this.Vy=Math.sin(this.direction)*this.magnitude;
		delete this.magnitude;
		delete this.direction;}
	this.addVector=function(vector){
		if (this.Vx!=null) {
			if (vector.Vx!=null) {
				this.Vx+=vector.Vx;
				this.Vy+=vector.Vy;
			} else {
				this.Vx+=Math.cos(vector.direction)*vector.magnitude;
				this.Vy+=Math.sin(vector.direction)*vector.magnitude;
			}
		} else {
			if (vector.Vx!=null) {
				this.Vx=Math.cos(this.direction)*this.magnitude+vector.Vx;
				this.Vy=Math.sin(this.direction)*this.magnitude+vector.Vy;
				this.toPolar();
			} else {
				this.Vx=Math.cos(this.direction)*this.magnitude+Math.cos(vector.direction)*vector.magnitude;
				this.Vy=Math.sin(this.direction)*this.magnitude+Math.sin(vector.direction)*vector.magnitude;
				this.toPolar();
			}}}}
function keyHandle(keyCode,method) {
	this.keyCode=keyCode;
	this.method=method;}




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
		context.stroke();}}