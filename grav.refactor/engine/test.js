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
function test(){	try {
	//color.js
		if (color.toHex({r:255,g:0,b:1})!="#ff0001") console.log("color.toHex() error with RGBcomponent objects\nShould return #ff0001, instead returns: "+color.toHex({r:255,g:0,b:1}));
		if (color.toHex("rgb(0,01,255)")!="#0001ff") console.log("color.toHex() error with 'rgb(r,g,b)' strings\nShould return #0001ff, instead returns: "+color.toHex("rgb(0,01,255)"));
		if (color.toHex("#2BC")!="#22BBCC") console.log("color.toHex() error with short hex\nShould return #22BBCC, instead returns: "+color.toHex("#2BC"));
		if (color.toHex("#1B4CA7")!="#1B4CA7") console.log("color.toHex() error with hex\nShould return #1B4CA7, instead returns: "+color.toHex("#1B4CA7"));
		if (color.toHex("red")!="#FF0000") console.log("color.toHex() error with color names\nShould return #FF0000, instead returns: "+color.toHex("red"));

		if (color.nameToHex("red")!="#FF0000") console.log("color.nameToHex() error\nShould return #FF0000, instead returns: "+color.nameToHex("red"));
		if (color.rgbComponentsToHex({r:0,g:1,b:255})!="#0001ff") console.log("color.rgbComponentsToHex() error\nShould return #0001ff, instead returns: "+color.rgbComponentsToHex({r:0,g:1,b:255}));
		if (color.rgbStringToHex("rgb(1,0,255)")!="#0100ff") console.log("color.rgbStringToHex() error with 'rgb()' strings\nShould return #0100ff, instead returns: "+color.rgbStringToHex("rgb(1,0,255)"));
		if (color.rgbStringToHex("rgba(1,0,255,0.5)")!="#0100ff") console.log("color.rgbStringToHex() error with 'rgba()' strings\nShould return #0100ff, instead returns: "+color.rgbStringToHex("rgba(1,0,255,0.5)"));
		if (color.shortHexToHex("#12B")!="#1122BB") console.log("color.shortHexToHex() error\nShould return #1122BB, instead returns: "+color.shortHexToHex("#12B"));

		var tmp=color.hexToRGBcomponents("#FF0001");
		if (tmp.r!=255 || tmp.g!=0 || tmp.b!=1) {
			console.log("color.hexToRGBcomponents() error\nShould return r:255,g:0,b:1\nReturns: ");
			console.log(color.hexToRGBcomponents("#FF0001"));}
		var tmp=color.hexToRGBAcomponents("#FF0001",0.5);
		if (tmp.r!=255 || tmp.g!=0 || tmp.b!=1 || tmp.a!=0.5) {
			console.log("color.hexToRGBAcomponents() error\nShould return r:255,g:0,b:1,a:0.5\nReturns: ");
			console.log(color.hexToRGBAcomponents("#FF0001",0.5));}

		if (color.parseRGB(23,0,253)!="rgb(23,0,253)") console.log("color.parseRGB() error\nShould return \"rgb(23,0,253)\", instead returns: \""+color.parseRGB(23,0,253)+"\"");
		if (color.parseRGBA(2,30,3,0.2)!="rgba(2,30,3,0.2)") console.log("color.parseRGBA() error\nShould return \"rgba(2,30,3,0.2)\", instead returns: \""+color.parseRGBA(2,30,3,0.2)+"\"");

	//functions.js is not tested (TEMPORARY)

	//interval.js is not tested (TEMPORARY)

	//io.js is not tested (TEMPORARY)

	//load.js is not tested (TEMPORARY)
		//successful loading is tested by anything working at all,
		// unsuccessful loading is tested below:
		/*INSERT BAD LOAD FOR CSS AND JS HERE*/

	//math.js
		if (Math.toDegrees(Math.Tau)!=360) console.log("Math.toDegrees() error\nShould return 360, instead returns: "+Math.toDegrees(Math.Tau));
		if (Math.toRadians(180)!=Math.PI) console.log("Math.toRadians() error\nShould return "+Math.PI+", instead returns: "+Math.toRadians(180));

	//physics.js
		//Technically needs more testing than this but I am fairly confident
		// it is all correct because of how much I've used it.
		vect=new Vector();
		if (vect.getXcomponent()!=0||vect.getYcomponent()!=0) console.log("Vector() getting component error");
		vect=new Vector(0,0,true);
		if (vect.getXcomponent()!=0||vect.getYcomponent()!=0) console.log("Vector() getting component error");
		vect=new Vector(5,5);		vect.toPolar();	vect.toCartesian();
		if (vect.Vx!=5||vect.Vy!=5) console.log("Vector() converting between polar and cartesian error: "+vect.Vx+" "+vect.Vy+" (should be 5 5, is usually off by very small amount)");
		//add checks for adding/subtracting
		// and get magnitude and get direction on a cartesian Vector

	//random.js by its nature can't be tested with if true/false whatever
		//but I guess I can do this:
		var zeros=0;	var ones=0;
		for (var i=0;i<500;i++) {
			if (random.integer(0,1)==0) {
				zeros++;
			} else {
				ones++;
			}}
		console.log("Results of 500 random integers: Zeros: "+zeros+" Ones: "+ones+" (should be around 250/250)");
		console.log("Additionally, here's a random number (-500 to 500): "+random.number(-500,500)+" and a random 7-digit 'name': "+random.name(7));

	//render.js
		//

	console.log("test() has completed");
}
catch(error){
	console.log("test() caught an error: "+error);
}	}

test();
