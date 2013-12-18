//PHYSICS
var physicsSpeed=10;	//how many milliseconds between each physics calculation
var timeStep=0.2;		//multiplied to physics calculations and updates (low speed,high accuracy OR high speed,low accuracy)
var G=0.1;				//gravitational constant (intentionally way wrong)



//RENDERING
var renderSpeed=10;		//how many milliseconds between each frame rendering
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
var version=0;			//version number of program
//var slowSpeed=1000;		//milliseconds between iterations of slowLoop()
//document.title='v '+version+' Engine v'+engineVersion;//title displayed at top of window/tab



//CONSTANTS
//N/A



//DEBUG
var debugBackground=null;
var debugColor='black';
var debugFont='12px sans-serif';
var debugTextHeight=12;
var debugXoffset=4;
var debugYoffset=4;