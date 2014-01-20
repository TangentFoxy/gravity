//PHYSICS
var physicsSpeed=33;	//how many milliseconds between each physics calculation
var timeStep=0.4;		//multiplied to physics calculations and updates (low speed,high accuracy OR high speed,low accuracy)
var G=0.4;				//gravitational constant (intentionally way wrong)



//RENDERING
var showNames=true;		//whether or not to display names with bodies
var renderSpeed=33;		//how many milliseconds between each frame rendering
var fadeColor='0,0,0';	//what color to use on fadeCanvas functions (r,g,b)
var fadeAlpha=0.05;		//how much alpha to use on fadeCanvas functions
function initCanvas() {
	//width/height
	UIcanvas.width=window.innerWidth;
	UIcanvas.height=window.innerHeight;
	frontend.width=window.innerWidth;
	frontend.height=window.innerHeight;
	backend.width=window.innerWidth;
	backend.height=window.innerHeight;
}
var defaultFont='12px sans-serif';
var defaultLineHeight=12;	//must match font size in defaultFont
var defaultTextPadding=2;

//backctx.lineWidth=1.15;	//width of lines drawn
//backctx.lineCap='butt';	//end of lines style: butt,round,square
//backctx.lineJoin='miter';	//how to style joined lines: bevel,round,miter
//backctx.miterLimit=5;		//maximum 'sharpness' distance of joined lines

//backctx.font-family='sans-serif';
//backctx.font-size='10px';

//backctx.line-height='10px';
//backctx.font-weight='normal';		//normal,bold,bolder,lighter,100 to 900 (at 100 increments)



//OTHER
var version='0.1.3';			//version number of program
var slowSpeed=1000;		//milliseconds between iterations of slowLoop()
document.title='Gravity v '+version+' Engine v'+engineVersion;//title displayed at top of window/tab



//CONSTANTS
//N/A



//DEBUG
terminal.clearLast=true;
terminal.background=null;
terminal.color='black';
terminal.font='12px sans-serif';
terminal.textHeight=12;
terminal.xOffset=4;
terminal.yOffset=4;
terminal.logging=true;



//DEPRECIATED
var logging=true;
var txtLog='~';

var debugClearLast=true;
var debugBackground=null;
var debugColor='black';
var debugFont='12px sans-serif';
var debugTextHeight=12;
var debugXoffset=4;
var debugYoffset=4;