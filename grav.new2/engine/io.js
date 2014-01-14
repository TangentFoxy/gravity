function keyHandler(event){
	var code=event.keyCode? event.keyCode : event.charCode;
	key(code);
	if (keys[code]!=undefined) keys[code].method();}
function keyHandle(method) {this.method=method;}



function UIbutton(x,y,text,onClick,keyCode, radius,color,background,strokeStyle, font,lineHeight,strokeWidth, width,height) {
	this.x=x;	this.y=y;	this.text=text;
	this.onClick=onClick; //handled by clickHandler()
	if (!keyCode) {} else {keys[keyCode]=new keyHandle(onClick);} //handled by keyHandler()

	if (!radius) {this.radius=0;} else {this.radius=radius;}
	if (!color) {this.color='black';} else {this.color=color;}
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
			UI.fill();
			if (this.strokeStyle!=null) {
				UI.strokeStyle=this.strokeStyle;
				UI.lineWidth=strokeWidth;
				UI.stroke();}}
		UI.textAlign='center';
		UI.textBaseline='middle';
		UI.font=this.font;
		UI.fillStyle=this.color;
		UI.fillText(this.text,x,y);}}



function clickHandler(){
	//learn how to accept clicks...
}