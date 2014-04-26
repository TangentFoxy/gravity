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
var interval={
	start:	function(funcStr,timing){
		return {func:funcStr,time:timing,id:setInterval(funcStr,timing)};
	},
	pause:	function(i){
		clearInterval(interval.i.id);
	},
	resume:	function(i){
		i.id=setInterval(interval.i.func,interval.i.time);
	},
	stop:	function(i){
		clearInterval(interval.i.id);
		delete interval.i.func;
		delete interval.i.time;
		delete interval.i.id;
		delete interval.i;
	}
};

var Timer={
	set:	function(func,time){return setTimeout(func,time);},
	cancel:	function(ref){clearTimeout(ref);}
};
