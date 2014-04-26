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
var color={
	//returns string "#123ABC" from an object with r,g,b properties or CSS valid color string
	toHex:				function(c){
		if (c.r!=null) return color.rgbComponentsToHex(c);
		if (c.substr(0,3)=='rgb') return color.rgbStringToHex(c);
		if (c.charAt(0)=='#') {
			if (c.length<7) return color.shortHexToHex(c);
			return c;}
		return color.nameToHex(c);
	},
	//returns string "#123ABC" from string of valid CSS color name
	nameToHex:			function(c){
		switch(c.toLowerCase()) {
		case "aliceblue":	return "#F0F8FF";
		case "antiquewhite":return "#FAEBD7";
		case "aqua":		return "#00FFFF";
		case "aquamarine":	return "#7FFFD4";
		case "azure":		return "#F0FFFF";
		case "beige":		return "#F5F5DC";
		case "bisque":		return "#FFE4C4";
		case "black":		return "#000000";
		case "blanchedalmond":return "#FFEBCD";
		case "blue":		return "#0000FF";
		case "blueviolet":	return "#8A2BE2";
		case "brown":		return "#A52A2A";
		case "burlywood":	return "#DEB887";
		case "cadetblue":	return "#5F9EA0";
		case "chartreuse":	return "#7FFF00";
		case "chocolate":	return "#D2691E";
		case "coral":		return "#FF7F50";
		case "cornflowerblue":return "#6495ED";
		case "cornsilk":	return "#FFF8DC";
		case "crimson":		return "#DC143C";
		case "cyan":		return "#00FFFF";
		case "darkblue":	return "#00008B";
		case "darkcyan":	return "#008B8B";
		case "darkgoldenrod":return "#B8860B";
		case "darkgrey":	// not real color
		case "darkgray":	return "#A9A9A9";
		case "darkgreen":	return "#006400";
		case "darkkhaki":	return "#BDB76B";
		case "darkmagenta":	return "#8B008B";
		case "darkolivegreen":return "#556B2F";
		case "darkorange":	return "#FF8C00";
		case "darkorchid":	return "#9932CC";
		case "darkred":		return "#8B0000";
		case "darksalmon":	return "#E9967A";
		case "darkseagreen":return "#8FBC8F";
		case "darkslateblue":return "#483D8B";
		case "darkslategrey":// not real color
		case "darkslategray":return "#2F4F4F";
		case "darkturquoise":return "#00CED1";
		case "darkviolet":	return "#9400D3";
		case "deeppink":	return "#FF1493";
		case "deepskyblue":	return "#00BFFF";
		case "dimgrey":		// not real color
		case "dimgray":		return "#696969";
		case "dodgerblue":	return "#1E90FF";
		case "firebrick":	return "#B22222";
		case "floralwhite":	return "#FFFAF0";
		case "forestgreen":	return "#228B22";
		case "fuchsia":		return "#FF00FF";
		case "gainsboro":	return "#DCDCDC";
		case "ghostwhite":	return "#F8F8FF";
		case "gold":		return "#FFD700";
		case "goldenrod":	return "#DAA520";
		case "grey":		// not real color
		case "gray":		return "#808080";
		case "green":		return "#008000";
		case "greenyellow":	return "#ADFF2F";
		case "honeydew":	return "#F0FFF0";
		case "hotpink":		return "#FF69B4";
		case "indianred":	return "#CD5C5C";
		case "indigo":		return "#4B0082";
		case "ivory":		return "#FFFFF0";
		case "khaki":		return "#F0E68C";
		case "lavender":	return "#E6E6FA";
		case "lavenderblush":return "#FFF0F5";
		case "lawngreen":	return "#7CFC00";
		case "lemonchiffon":return "#FFFACD";
		case "lightblue":	return "#ADD8E6";
		case "lightcoral":	return "#F08080";
		case "lightcyan":	return "#E0FFFF";
		case "lightgoldenrodyellow":return "#FAFAD2";
		case "lightgrey":	// not real color
		case "lightgray":	return "#D3D3D3";
		case "lightgreen":	return "#90EE90";
		case "lightpink":	return "#FFB6C1";
		case "lightsalmon":	return "#FFA07A";
		case "lightseagreen":return "#20B2AA";
		case "lightskyblue":return "#87CEFA";
		case "lightslategrey":// not real color
		case "lightslategray":return "#778899";
		case "lightsteelblue":return "#B0C4DE";
		case "lightyellow":	return "#FFFFE0";
		case "lime":		return "#00FF00";
		case "limegreen":	return "#32CD32";
		case "linen":		return "#FAF0E6";
		case "magenta":		return "#FF00FF";
		case "maroon":		return "#800000";
		case "mediumaquamarine":return "#66CDAA";
		case "mediumblue":	return "#0000CD";
		case "mediumorchid":return "#BA55D3";
		case "mediumpurple":return "#9370DB";
		case "mediumseagreen":return "#3CB371";
		case "mediumslateblue":return "#7B68EE";
		case "mediumspringgreen":return "#00FA9A";
		case "mediumturquoise":return "#48D1CC";
		case "mediumvioletred":return "#C71585";
		case "midnightblue":return "#191970";
		case "mintcream":	return "#F5FFFA";
		case "mistyrose":	return "#FFE4E1";
		case "moccasin":	return "#FFE4B5";
		case "navajowhite":	return "#FFDEAD";
		case "navy":		return "#000080";
		case "oldlace":		return "#FDF5E6";
		case "olive":		return "#808000";
		case "olivedrab":	return "#6B8E23";
		case "orange":		return "#FFA500";
		case "orangered":	return "#FF4500";
		case "orchid":		return "#DA70D6";
		case "palegoldenrod":return "#EEE8AA";
		case "palegreen":	return "#98FB98";
		case "paleturquoise":return "#AFEEEE";
		case "palevioletred":return "#DB7093";
		case "papayawhip":	return "#FFEFD5";
		case "peachpuff":	return "#FFDAB9";
		case "peru":		return "#CD853F";
		case "pink":		return "#FFC0CB";
		case "plum":		return "#DDA0DD";
		case "powderblue":	return "#B0E0E6";
		case "purple":		return "#800080";
		case "red":			return "#FF0000";
		case "rosybrown":	return "#BC8F8F";
		case "royalblue":	return "#4169E1";
		case "saddlebrown":	return "#8B4513";
		case "salmon":		return "#FA8072";
		case "sandybrown":	return "#F4A460";
		case "seagreen":	return "#2E8B57";
		case "seashell":	return "#FFF5EE";
		case "sienna":		return "#A0522D";
		case "silver":		return "#C0C0C0";
		case "skyblue":		return "#87CEEB";
		case "slateblue":	return "#6A5ACD";
		case "slategrey":	// not real color
		case "slategray":	return "#708090";
		case "snow":		return "#FFFAFA";
		case "springgreen":	return "#00FF7F";
		case "steelblue":	return "#4682B4";
		case "tan":			return "#D2B48C";
		case "teal":		return "#008080";
		case "thistle":		return "#D8BFD8";
		case "tomato":		return "#FF6347";
		case "turquoise":	return "#40E0D0";
		case "violet":		return "#EE82EE";
		case "wheat":		return "#F5DEB3";
		case "white":		return "#FFFFFF";
		case "whitesmoke":	return "#F5F5F5";
		case "yellow":		return "#FFFF00";
		case "yellowgreen":	return "#9ACD32";
		default:
		console.log("Error: Invalid color name: "+c);
		return "#FFFFFF";}
	},
	//returns string "#123ABC" from object {r,g,b}
	rgbComponentsToHex:	function(obj){
		return "#"+
		string.pad(obj.r.toString(16),2)+
		string.pad(obj.g.toString(16),2)+
		string.pad(obj.b.toString(16),2);},
	//returns string "#123ABC" from string "rgb(r,g,b)" or "rgba(r,g,b,a)"
	rgbStringToHex:		function(str){
		//THIS FUNCTION IS REALLY WEIRDLY BUGGERED
		//console.log("str charAt(3): "+str.charAt(3));
		if (str.charAt(3=='(')){
			//console.log("str charAt(4): "+str.charAt(4));
			str=str.slice(4,str.length-1);
		} else {
			//console.log("str charAt(5): "+str.charAt(5));
			str=str.slice(5);}
		str=str.split(',');	return "#"+
		string.pad(str[0].toString(16),2)+
		string.pad(str[1].toString(16),2)+
		string.pad(str[2].toString(16),2);
	},
	//returns string "#AA22BB" from string "#A2B"
	shortHexToHex:		function(sHex){
		return "#"+sHex.charAt(1)+sHex.charAt(1)+
			sHex.charAt(2)+sHex.charAt(2)+
			sHex.charAt(3)+sHex.charAt(3);
	},

	// toRGBcomponents:function(in){}, //should be made to accept any color object and return RGBcomponents

	//returns object {r,g,b} from string "#123ABC"
	hexToRGBcomponents:	function(hex){
		return {r:parseInt("0x"+hex.substr(1,2)),
				g:parseInt("0x"+hex.substr(3,2)),
				b:parseInt("0x"+hex.substr(5,2))};
	},
	//returns object {r,g,b,a} from string "#123ABC" and alpha value
	hexToRGBAcomponents:function(hex,a){
		return {r:parseInt("0x"+hex.substr(1,2)),
				g:parseInt("0x"+hex.substr(3,2)),
				b:parseInt("0x"+hex.substr(5,2)),
				a:a};
	},

	//returns string "rgb(r,g,b)" from r,g,b
	parseRGB:			function(r,g,b){return "rgb("+r+','+g+','+b+')';},
	//returns string "rgba(r,g,b,a)" from r,g,b,a
	parseRGBA:			function(r,g,b,a){return "rgba("+r+','+g+','+b+','+a+')';}
};

/*
function hexToRGB(hex) {return "rgb("+parseInt("0x"+hex.substr(1,2))+","+parseInt("0x"+hex.substr(3,2))+","+parseInt("0x"+hex.substr(5,2))+")";}
function hexToRGBA(hex,a) {return "rgba("+parseInt("0x"+hex.substr(1,2))+","+parseInt("0x"+hex.substr(3,2))+","+parseInt("0x"+hex.substr(5,2))+","+a+")";}
function invertColor(rgb) {
	rgb.r=255-rgb.r;
	rgb.g=255-rgb.g;
	rgb.b=255-rgb.b;}
*/
