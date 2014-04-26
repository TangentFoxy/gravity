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
var random={
	number:	function(min,max){return Math.random()*(max-min)+min;},
	integer:function(min,max){return Math.floor(Math.random()*(max-min+1))+min;},

	color:	function(type){ //minR,maxR,minG,maxG,minB,maxB
		//if (arguments.length>1) //process minR/maxR/minG/maxG/minB/maxB
		//else result=rand.int? //before this have processing ultimately make a hex str
		var result=random.integer(0,16777215);
		switch(type){
			case 'hex':
				result='#'+result.toString(16);
				break;
			case 'rgb':
				result=color.hexToRGBcomponents(result.toString(16));
				break;
			default:
				result='#'+result.toString(16);
		}
		return result;
	},

	name:	function(length,capitalize){
		var result='';
		while (result.length<length){
			var letter=random.integer(0,36);
			//consonents have 1/36 chance, vowels 3/36, Y chance 2/36
			switch(letter){
				case 0:case 1:case 2:
					result+='a';break;
				case 3:
					result+='b';break;
				case 4:
					result+='c';break;
				case 5:
					result+='d';break;
				case 6:case 7:case 8:
					result+='e';break;
				case 9:
					result+='f';break;
				case 10:
					result+='g';break;
				case 11:
					result+='h';break;
				case 12:case 13:case 14:
					result+='i';break;
				case 15:
					result+='j';break;
				case 16:
					result+='k';break;
				case 17:
					result+='l';break;
				case 18:
					result+='m';break;
				case 19:
					result+='n';break;
				case 20:case 21:case 22:
					result+='o';break;
				case 23:
					result+='p';break;
				case 24:
					result+='q';break;
				case 25:
					result+='r';break;
				case 26:
					result+='s';break;
				case 27:
					result+='t';break;
				case 28:case 29:case 30:
					result+='u';break;
				case 31:
					result+='v';break;
				case 32:
					result+='w';break;
				case 33:
					result+='x';break;
				case 34:case 35:
					result+='y';break;
				case 36:
					result+='z';
			}
		}
		if (capitalize) return result.charAt(0).toUpperCase()+result.slice(1);
		return result;
	}
};
