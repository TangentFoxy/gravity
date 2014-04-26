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
function Interval(funcStr,timing){
	this.func=funcStr;
	this.timing=timing;
	this.id=setInterval(funcStr,timing);
	this.running=true;

	this.pause=function(){
		clearInterval(this.id);
		this.running=false;
	}
	this.resume=function(){
		this.id=setInterval(this.func,this.timing);
		this.running=true;
	}
	this.start=function(){
		this.id=setInterval(this.func,this.timing);
		this.running=true;
	}
	this.stop=function(){
		clearInterval(this.id);
		this.running=false;
	}
	this.incSpeed=function(amt){
		if (amt==undefined) amt=1;
		this.timing-=amt;	if (this.running) this.restart();
	}
	this.decSpeed=function(amt){
		if (amt==undefined) amt=1;
		this.timing+=amt;	if (this.running) this.restart();
	}
	this.setSpeed=function(spd){
		this.timing=spd;
		if (this.running) this.restart();
	}
	this.restart=function(){
		clearInterval(this.id);
		this.id=setInterval(this.func,this.timing);
	}
}

var Timer={
	set:	function(func,time){return setTimeout(func,time);},
	cancel:	function(ref){clearTimeout(ref);}
};



var interval={ /*THIS OBJECT IS DEPRECATED*/
	start:		function(funcStr,timing){
		console.log("Using a deprecated function: interval.start()");
		return {func:funcStr,time:timing,running:true,id:setInterval(funcStr,timing)};
	},
	pause:		function(i){
		console.log("Using a deprecated function: interval.pause()");
		clearInterval(interval.i.id);
		interval.i.running=false;
	},
	resume:		function(i){
		console.log("Using a deprecated function: interval.resume()");
		interval.i.id=setInterval(interval.i.func,interval.i.time);
		interval.i.running=true;
	},
	stop:		function(i){
		console.log("Using a deprecated function: interval.stop()");
		clearInterval(interval.i.id);
		delete interval.i.func;
		delete interval.i.time;
		delete interval.i.running;
		delete interval.i.id;
		delete interval.i;
	}
};
