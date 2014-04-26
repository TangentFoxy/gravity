/*
	Copyright 2013-2014 Paul Liverman III

	This file is part of Jenjens.

	Jenjens is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Jenjens is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with Jenjens.  If not, see <http://www.gnu.org/licenses/>.
*/
var io={
	keysHeld:	[],
	keyDown:	function(event){
		var code=event.keyCode? event.keyCode : event.charCode;
		io.keysHeld[code]=true;
	},
	keyUp:		function(event){
		var code=event.keyCode? event.keyCode : event.charCode;
		io.keysHeld[code]=false;
	},

	mouseDown:	function(event){
		//
	},
	mouseUp:	function(event){
		//
	},
	click:		function(event){
		//
	},

	getMouseX:	function(event){
		var x=0;
		if (event.clientX && document.body && document.body.scrollLeft!=null) {x=event.clientX+document.body.scrollLeft;
		} else if (event.clientX && document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.scrollLeft!=null) {
			x=event.clientX+document.documentElement.scrollLeft;
		} else if (event.pageX) {x=event.pageX;}	return x;
	},
	getMouseY:	function(event){
		var y=0;
		if (event.clientY && document.body && document.body.scrollTop!=null) {y=event.clientY+document.body.scrollTop;
		} else if (event.clientY && document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.scrollTop!=null) {
			y=event.clientY+document.documentElement.scrollTop;
		} else if (event.pageY) {y=event.pageY;}	return y;
	}
};



document.addEventListener('keydown',io.keyDown,true);
document.addEventListener('keyup',io.keyUp,true);

document.addEventListener('onmousedown',io.mouseDown,true);
document.addEventListener('onmouseup',io.mouseUp,true);
document.addEventListener('click',io.click,true);
document.addEventListener('onclick',io.click,true);

/*
function keyDown(key) {
	switch(key) {
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
		console.log('keyCode '+key+' pressed down');
	}}

function keyUp(key) {
	//
	console.log('keyCode '+key+' let go');
}



function mouseDown(event) {
	//
}

function mouseUp(event) {
	//
}

function onClick(x,y) {
	//
	console.log('Click at x: '+x+' y: '+y);
}
*/



/*
//IO
var keys=[];	//used in keyDownHandler()
var clicks=[];	//used in clickHandler()



function keyDownHandler(event){
	var code=event.keyCode? event.keyCode : event.charCode;
	keyDown(code);
	if (keys[code]!=undefined) keys[code].method();}
function keyUpHandler(event){
	var code=event.keyCode? event.keyCode : event.charCode;
	keyUp(code);}
function keyHandle(method) {this.method=method;}



function mouseDownHandler(event) {mouseDown(event);}
function mouseUpHandler(event) {mouseUp(event);}
function clickHandler(event){
	var x=getMouseX(event);
	var y=getMouseY(event);
	/*fire click handling/
	onClick(x,y);
	/*check if in clicks[] and handle if it is/
	for (var click in clicks) if (x>=clicks[click].x && x<=clicks[click].x+clicks[click].width &&
		y>=clicks[click].y && y<=clicks[click].y+clicks[click].height) clicks[click].method();}
function clickHandle(x,y,width,height,method) {
	this.x=x;	this.y=y;	this.width=width;	this.height=height;
	this.method=method;}



function UIbutton(x,y,text,onClick,keyCode, radius,color,background,strokeStyle, font,lineHeight,strokeWidth, width,height) {
	this.x=x;	this.y=y;	this.text=text;
	this.onClick=onClick; //old form, which turns out pointless
	clicks[text]=new clickHandle(x-width/2,y-width/2,width,height,onClick); //handled by clickHandler()
	this.keyCode=keyCode;
	if (!keyCode) {} else {keys[keyCode]=new keyHandle(onClick);} //handled by keyHandler()

	if (!radius) {this.radius=0;} else {this.radius=radius;}
	if (!color) {this.color=defaultTextColor;} else {this.color=color;}
	if (!background) {this.background=null;} else {this.background=background;}

	if (!font) {this.font=defaultFont;} else {this.font=font;}
	if (!lineHeight) {this.lineHeight=defaultLineHeight;} else {this.lineHeight=lineHeight;}
	if (!strokeWidth) {this.strokeWidth=3;} else {this.strokeWidth=strokeWidth;}
	if (!strokeStyle) {this.strokeStyle=null;} else {this.strokeStyle=strokeStyle;}

	if (!width) {UI.font=this.font;	this.width=UI.measureText(text).width+defaultTextPadding*2+this.strokeWidth/2;} else {this.width=width;}
	if (!height) {this.height=this.lineHeight+defaultTextPadding*2+this.strokeWidth/2;} else {this.height=height;}

	this.draw=function(){
		if (this.background!=null) {
			roundRect(this.x,this.y,this.width,this.height,this.radius,UI);
			UI.fillStyle=this.background;
			UI.fill();}
		if (this.strokeStyle!=null) {
			UI.strokeStyle=this.strokeStyle;
			UI.lineWidth=strokeWidth;
			UI.stroke();}
		UI.textAlign='center';
		UI.textBaseline='middle';
		UI.font=this.font;
		UI.fillStyle=this.color;
		UI.fillText(this.text,x,y);}
	this.delete=function(){
		//keys.splice(this.keyCode,1); //this would fuck things up
		delete keys[this.keyCode];
		delete clicks[this.text];
		delete this;	/*this may not work really/}}
*/
