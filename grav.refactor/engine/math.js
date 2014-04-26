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
Math.Tau=Math.PI*2;

Math.toDegrees=function(radians){return radians*180/Math.PI;}
Math.toRadians=function(degrees){return degrees*Math.PI/180;}

Math.getDistance=function(A,B){
	var Dx=A.x-B.x;		var Dy=A.y-B.y;
	return Math.sqrt(Dx*Dx+Dy*Dy);
}
