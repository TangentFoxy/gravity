function randomSystem()
{
	// temporary (later you should already have the environment defined by this point)
	setEnvironment("load",vergaEnvironment);

	// temporary (just for watching things happen faster)
	timeStep=0.8;
	//scaleFactor=0.01; // can technically work for any scale, but works/looks best at 0.08

	objects.splice(0,objects.length);

	//make sure playerId, renderId, parentId all exist
	playerId=1;
	renderId=0;
	parentId=0;

	switch(randType)
	{
		case 'stabley':
		randStabley();
		break;
		case 'chaos':
		randChaos();
		break;
		case 'formation':
		randFormation();
		break;
		default:
		throw 'invalid randType';
	}
}

function randStabley()
{
	// every system needs a star at the center
	// TODO: make more types, neutron star, brown dwarf (r = 2x g, g = ##, b = 0), white dwarf, red dwarf, black hole, red giant, blue giant (white to blue gradient, up to 113 blue)
	// make settings for how to gen star?
	var color=randomInt(0,255);
	var atm_color=randomInt(0,255);
	if (randNames) {
		objects[0]=new Thing(random(100,200)*100/scaleFactor,0,0,0,0,"#FF"+color.toString(16)+"00",false,randomName(randomInt(2,6),true),false,random(0.6,2)/scaleFactor,"#FF"+atm_color.toString(16)+"00");
	} else {
		objects[0]=new Thing(random(100,200)*100/scaleFactor,0,0,0,0,"#FF"+color.toString(16)+"00",false,"s 0",false,random(0.6,2)/scaleFactor,"#FF"+atm_color.toString(16)+"00");
	}

	var gen=randomInt(randSysMin,randSysMax);
	var counter=1;
	while(counter < gen)
	{
		//Location
		var x=random(-225/scaleFactor,225/scaleFactor);
		var y=random(-225/scaleFactor,225/scaleFactor);
		//Color
		color=randomInt(0,16777215);
		atm_color=randomInt(0,16777215);
		var ast_color=randomInt(0,255);
		//Type
		var type=random(0,1);
		if (type > 0.9) {
			// gas giant
			if (randNames) {
				objects[counter]=new Thing(random(75,225)*8/scaleFactor,x,y,0,0,"#"+color.toString(16),false,randomName(randomInt(2,6),true),false,random(0.1,0.8)/scaleFactor,"#"+atm_color.toString(16));
			} else {
				objects[counter]=new Thing(random(75,225)*8/scaleFactor,x,y,0,0,"#"+color.toString(16),false,"g "+counter,false,random(0.1,0.8)/scaleFactor,"#"+atm_color.toString(16));
			}
		} else if (type < 0.25) {
			// planet
			if (randNames) {
				objects[counter]=new Thing(random(10,60)/1.6/scaleFactor,x,y,0,0,"#"+color.toString(16),false,randomName(randomInt(2,6),true),false,random(0.2,0.6)/scaleFactor,"#"+atm_color.toString(16));
			} else {
				objects[counter]=new Thing(random(10,60)/1.6/scaleFactor,x,y,0,0,"#"+color.toString(16),false,"p "+counter,false,random(0.2,0.6)/scaleFactor,"#"+atm_color.toString(16));
			}
		} else {
			// asteroid
			if (randNames) {
				objects[counter]=new Thing(random(1,60)/16/scaleFactor,x,y,0,0,"#"+ast_color.toString(16)+ast_color.toString(16)+ast_color.toString(16),false,randomName(randomInt(2,6),true));
			} else {
				objects[counter]=new Thing(random(1,60)/16/scaleFactor,x,y,0,0,"#"+ast_color.toString(16)+ast_color.toString(16)+ast_color.toString(16),false,"a "+counter);
			}
		}
		//Orbit
		setOrbit(0,counter);

		//m,x,y,Vx,Vy,color,radius,name,rotation,air_height,air_fill

		counter++;
	}
}

function randChaos()
{
	// every system needs a star at the center
	// TODO: make more types, neutron star, brown dwarf (r = 2x g, g = ##, b = 0), white dwarf, red dwarf, black hole, red giant, blue giant (white to blue gradient, up to 113 blue)
	// make settings for how to gen star?
	var color=randomInt(0,255);
	var atm_color=randomInt(0,255);
	if (randNames) {
		objects[0]=new Thing(random(100,200)*100/scaleFactor,0,0,0,0,"#FF"+color.toString(16)+"00",false,randomName(randomInt(2,6),true),false,random(0.6,2)/scaleFactor,"#FF"+atm_color.toString(16)+"00");
	} else {
		objects[0]=new Thing(random(100,200)*100/scaleFactor,0,0,0,0,"#FF"+color.toString(16)+"00",false,"s 0",false,random(0.6,2)/scaleFactor,"#FF"+atm_color.toString(16)+"00");
	}

	var gen=randomInt(randSysMin,randSysMax);
	var counter=1;
	while(counter < gen)
	{
		//Location
		var x=random(-225/scaleFactor,225/scaleFactor);
		var y=random(-225/scaleFactor,225/scaleFactor);
		//Color
		color=randomInt(0,16777215);
		atm_color=randomInt(0,16777215);
		var ast_color=randomInt(0,255);
		//Type
		var type=random(0,1);
		if (type > 0.9) {
			// gas giant
			if (randNames) {
				objects[counter]=new Thing(random(75,225)*8/scaleFactor,x,y,random(-10,10)*G,random(-10,10)*G,"#"+color.toString(16),false,randomName(randomInt(2,6),true),false,random(0.1,0.8)/scaleFactor,"#"+atm_color.toString(16));
			} else {
				objects[counter]=new Thing(random(75,225)*8/scaleFactor,x,y,random(-10,10)*G,random(-10,10)*G,"#"+color.toString(16),false,"g "+counter,false,random(0.1,0.8)/scaleFactor,"#"+atm_color.toString(16));
			}
		} else if (type < 0.25) {
			// planet
			if (randNames) {
				objects[counter]=new Thing(random(10,60)/1.6/scaleFactor,x,y,random(-10,10)*G,random(-10,10)*G,"#"+color.toString(16),false,randomName(randomInt(2,6),true),false,random(0.2,0.6)/scaleFactor,"#"+atm_color.toString(16));
			} else {
				objects[counter]=new Thing(random(10,60)/1.6/scaleFactor,x,y,random(-10,10)*G,random(-10,10)*G,"#"+color.toString(16),false,"p "+counter,false,random(0.2,0.6)/scaleFactor,"#"+atm_color.toString(16));
			}
		} else {
			// asteroid
			if (randNames) {
				objects[counter]=new Thing(random(1,60)/16/scaleFactor,x,y,random(-10,10)*G,random(-10,10)*G,"#"+ast_color.toString(16)+ast_color.toString(16)+ast_color.toString(16),false,randomName(randomInt(2,6),true));
			} else {
				objects[counter]=new Thing(random(1,60)/16/scaleFactor,x,y,random(-10,10)*G,random(-10,10)*G,"#"+ast_color.toString(16)+ast_color.toString(16)+ast_color.toString(16),false,"a "+counter);
			}
		}

		//m,x,y,Vx,Vy,color,radius,name,rotation,air_height,air_fill

		counter++;
	}
}

function randFormation()
{
	// every system needs a star at the center
	// TODO: make more types, neutron star, brown dwarf (r = 2x g, g = ##, b = 0), white dwarf, red dwarf, black hole, red giant, blue giant (white to blue gradient, up to 113 blue)
	// make settings for how to gen star?
	var color=randomInt(0,255);
	var atm_color=randomInt(0,255);
	if (randNames) {
		objects[0]=new Thing(random(100,200)*100/scaleFactor,0,0,0,0,"#FF"+color.toString(16)+"00",false,randomName(randomInt(2,6),true),false,random(0.6,2)/scaleFactor,"#FF"+atm_color.toString(16)+"00");
	} else {
		objects[0]=new Thing(random(100,200)*100/scaleFactor,0,0,0,0,"#FF"+color.toString(16)+"00",false,"s 0",false,random(0.6,2)/scaleFactor,"#FF"+atm_color.toString(16)+"00");
	}
	var gen=randomInt(100,500);
	var counter=1;
	while(counter < gen)
	{
		//Location
		var x=random(-225/scaleFactor,225/scaleFactor);
		var y=random(-225/scaleFactor,225/scaleFactor);
		//Color
		//color=randomInt(0,16777215);
		//atm_color=randomInt(0,16777215);
		var ast_color=randomInt(0,255);
		if (randNames) {
			objects[counter]=new Thing(random(1,60)/16/scaleFactor,x,y,0,0,"#"+ast_color.toString(16)+ast_color.toString(16)+ast_color.toString(16),false,randomName(randomInt(2,6),true));
		} else {
			objects[counter]=new Thing(random(1,60)/16/scaleFactor,x,y,0,0,"#"+ast_color.toString(16)+ast_color.toString(16)+ast_color.toString(16),false,"a "+counter);
		}
		//Orbit
		setOrbit(0,counter);
		counter++;
	}
}

function randomName(length,capitalize)
{
	var result="";
	while(result.length < length)
	{
		var letter=randomInt(0,36); // every letter + 2 for each vowel (except +1 for y)
		switch(letter)
		{
			case 0:
			result+='a';
			break;
			case 1:
			result+='a';
			break;
			case 2:
			result+='a';
			break;
			case 3:
			result+='b';
			break;
			case 4:
			result+='c';
			break;
			case 5:
			result+='d';
			break;
			case 6:
			result+='e';
			break;
			case 7:
			result+='e';
			break;
			case 8:
			result+='e';
			break;
			case 9:
			result+='f';
			break;
			case 10:
			result+='g';
			break;
			case 11:
			result+='h';
			break;
			case 12:
			result+='i';
			break;
			case 13:
			result+='i';
			break;
			case 14:
			result+='i';
			break;
			case 15:
			result+='j';
			break;
			case 16:
			result+='k';
			break;
			case 17:
			result+='l';
			break;
			case 18:
			result+='m';
			break;
			case 19:
			result+='n';
			break;
			case 20:
			result+='o';
			break;
			case 21:
			result+='o';
			break;
			case 22:
			result+='o';
			break;
			case 23:
			result+='p';
			break;
			case 24:
			result+='q';
			break;
			case 25:
			result+='r';
			break;
			case 26:
			result+='s';
			break;
			case 27:
			result+='t';
			break;
			case 28:
			result+='u';
			break;
			case 29:
			result+='u';
			break;
			case 30:
			result+='u';
			break;
			case 31:
			result+='v';
			break;
			case 32:
			result+='w';
			break;
			case 33:
			result+='x';
			break;
			case 34:
			result+='y';
			break;
			case 35:
			result+='y';
			break;
			case 36:
			result+='z';
			//break;
		}
	}
	if (capitalize) return result.charAt(0).toUpperCase()+result.slice(1);
	return result;
}