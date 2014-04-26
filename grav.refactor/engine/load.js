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
var engine=['engine/color.js',
			'engine/debug.js',
			'engine/functions.js',
			'engine/interval.js',
			'engine/io.js',
			'engine/math.js',
			'engine/physics.js',
			'engine/random.js',
			'engine/render.js'
];



var load={
	//list (array) of filenames, callback (function)[optional] to be called when all files
	// loaded, index (integer)[optional] of where to load from, stop (integer)[optional]
	// of where to stop at
	files:	function(list,callback,index,stop){
		if (!index) index=0;			//default start
		if (!stop) stop=list.length-1;	//default stop
		if (index==stop+1) return callback();
		var filetype=list[index].split('.');
		switch(filetype[filetype.length-1]) {
			case 'js':
				load.JS(list[index],function(){
					load.files(list,callback,index+1,stop);
				});
				break;
			case 'css':
				load.CSS(list[index],function(){
					load.files(list,callback,index+1,stop);
				});
				break;
			default:
				throw "load.files(): unrecognized filetype: "+filetype[filetype.length-1];
		}
	},
	//src (string) of filename, callback (function)[optional] to be called when loaded
	JS:		function(src,callback){
		var script=document.createElement('script'),loaded;
		script.setAttribute('src',src);
		if (callback) {
			script.onreadystatechange=script.onload=function(){
				if (!loaded) {
					callback();
				}
				loaded=true;
			};
		}
		document.getElementsByTagName('head')[0].appendChild(script);
	},
	//src (string) of filename, callback (function)[optional] to be called when loaded
	CSS:	function(src,callback){
		var link=document.createElement('link'),loaded;
		link.setAttribute('rel','stylesheet');
		link.setAttribute('href',src);
		if (callback) {
			link.onreadystatechange=link.onload=function(){
				if (!loaded) {
					callback();
				}
				loaded=true;
			};
		}
		document.getElementsByTagName('head')[0].appendChild(link);
	}
};



load.files(engine,function(){
	load.files(custom,function(){
		initialize();
	});
});
