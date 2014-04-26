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
function render(){
	this.c0=document.getElementById('canvas0');
	this.c1=document.getElementById('canvas1');
	this.c2=document.getElementById('canvas2');

	this[0]=this.c0.getContext('2d');
	this[1]=this.c1.getContext('2d');
	this[2]=this.c2.getContext('2d');

	this.cUI=document.getElementById('canvasUI');
	this.UI=this.cUI.getContext('2d');
}

var render=new render();
