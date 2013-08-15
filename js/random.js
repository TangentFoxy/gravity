function randomSystem()
{
	// temporary (later you should already have the environment defined by this point)
	setEnvironment("load",vergaEnvironment);

	// temporary (just for watching things happen faster)
	timeStep=0.8;

	objects.splice(0,objects.length);

	//make sure playerId, renderId, parentId all exist
	playerId=1;
	renderId=0;
	parentId=0;

	// every system needs a star at the center
	// TODO: make more types, neutron star, brown dwarf (r = 2x g, g = ##, b = 0), white dwarf, red dwarf, black hole, red giant, blue giant (white to blue gradient, up to 113 blue)
	// make settings for how to gen star?
	color=randomInt(0,255);
	atm_color=randomInt(0,255);
	objects[0]=new Thing(random(100,200)*100/scaleFactor,0,0,0,0,"#FF"+color.toString(16)+"00",false,"s 0",false,random(0.6,2)/scaleFactor,"#FF"+atm_color.toString(16)+"00");

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
		ast_color=randomInt(0,255);
		//Type
		// add moon type, but only with the more advanced version
		var type=random(0,1);
		if (type > 0.9) {
			// gas giant
			objects[counter]=new Thing(random(75,225)*8/scaleFactor,x,y,random(-10,10)*G,random(-10,10)*G,"#"+color.toString(16),false,"g "+counter,false,random(0.1,0.8)/scaleFactor,"#"+atm_color.toString(16));
		} else if (type < 0.25) {
			// planet
			objects[counter]=new Thing(random(120,200)/1.5/scaleFactor,x,y,random(-10,10)*G,random(-10,10)*G,"#"+color.toString(16),false,"p "+counter,false,random(0.2,0.6)/scaleFactor,"#"+atm_color.toString(16));
		} else {
			// asteroid
			objects[counter]=new Thing(random(30,120)/15/scaleFactor,x,y,random(-10,10)*G,random(-10,10)*G,"#"+ast_color.toString(16)+ast_color.toString(16)+ast_color.toString(16),false,"a "+counter);
		}

		//m,x,y,Vx,Vy,color,radius,name,rotation,air_height,air_fill

		counter++;
	}
}