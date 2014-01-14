var terminal=new Terminal();
function Terminal() {
	//user re-defined in variables.js
	this.clearLast=true;
	this.background=null;
	this.color='black';
	this.font='12px sans-serif';
	this.textHeight=12;
	this.xOffset=4;
	this.yOffset=4;
	this.logging=true;
	//defined by engine (just here)
	this.width=0;	//width of text in debug area
	this.lastText='~';
	this.logHistory='~';

	this.out=function(text){
		if (this.clearLast) {
			if (this.background!=null) {
				UI.fillStyle=this.background;
				UI.fillRect(0,0,this.width+this.xOffset*2,this.textHeight+this.yOffset*2-2);}
			else {
				UI.clearRect(0,0,this.width+this.xOffset*2,this.textHeight+this.yOffset*2-2);}}
		if (text==null) {text=this.lastText;} else {if (this.logging) this.log(text);}
		this.width=UI.measureText(text).width;
		if (this.background!=null) {
			UI.fillStyle=this.background;
			UI.fillRect(0,0,this.width+this.xOffset*2,this.textHeight+this.yOffset*2-2);}
		else {
			UI.clearRect(0,0,this.width+this.xOffset*2,this.textHeight+this.yOffset*2-2);}
		UI.textAlign='left';
		UI.textBaseline='top';
		UI.fillStyle=this.color;
		UI.font=this.font;
		UI.fillText(text,this.xOffset,this.yOffset/*,UI.width-this.xOffset*2*/);
		lastText=text;}
	this.log=function(text){
		console.log(text);
		this.logHistory+='\n'+text;}
	this.open=function(){
		this.isOpen=true;
		//copy over saved imgdata?
	}
	this.close=function(){
		this.isOpen=false;
		clearUI();	drawUI();
	}}



// DEPRECIATED FUNCTIONS, DO NOT USE

//depreciated, use terminal.out(text) instead
function debugOut(text) {
	if (debugClearLast) {
		if (debugBackground!=null) {
			UI.fillStyle=debugBackground;
			UI.fillRect(0,0,debugWidth+debugXoffset*2,debugTextHeight+debugYoffset*2-2);}
		else {
			UI.clearRect(0,0,debugWidth+debugXoffset*2,debugTextHeight+debugYoffset*2-2);}}
	if (text==null) text=lastDebugTxt;
	debugWidth=UI.measureText(text).width;
	if (debugBackground!=null) {
		UI.fillStyle=debugBackground;
		UI.fillRect(0,0,debugWidth+debugXoffset*2,debugTextHeight+debugYoffset*2-2);}
	else {
		UI.clearRect(0,0,debugWidth+debugXoffset*2,debugTextHeight+debugYoffset*2-2);}
	UI.textAlign='left';
	UI.textBaseline='top';
	UI.fillStyle=debugColor;
	UI.font=debugFont;
	UI.fillText(text,debugXoffset,debugYoffset/*,UI.width-debugXoffset*2*/);
	lastDebugTxt=text;}
//depreciated, redundant with terminal.out(text) with logging enabled
//				might make a terminal.log(text) function
function log(text) {
	console.log(text);
	txtLog+='\n'+text;
}