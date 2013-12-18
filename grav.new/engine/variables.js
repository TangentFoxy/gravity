//IO
var keys=[];	//used in keyHandler()

//RENDERING
var windowWidth=window.innerWidth;	//used for updateCanvasSize()
var windowHeight=window.innerHeight;//used for updateCanvasSize()
var canvasR=0;	//current rotation of canvases
var canvasX=0;	//current translation on x-axis
var canvasY=0;	//current translation on y-axis
var canvasS=1;	//current scale of canvases

//DEBUG
var engineVersion=0.02;	//version number of engine
var debugWidth=0;		//width of text in debug area
var lastDebugTxt='~';

//CONSTANTS
Math.Tau=Math.PI*2;