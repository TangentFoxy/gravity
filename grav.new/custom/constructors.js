function Body(mass,x,y,Vx,Vy,color,rotation,rotationSpeed,atmosphere,atmosphereColor,name,showName,radius) {
	Vector.call(this,Vx,Vy);
	Circle.call(this,x,y,radius,color,1,rotation);
	this.rotationSpeed=rotationSpeed;
	// if radius wasn't defined we create our own (based on average density of stellar objects)
	if (!radius) this.radius=Math.pow(mass,1/3);
	if (!mass) {this.mass=10;} else {this.mass=mass;} //for some reason the short-form if's are not working
	if (!atmosphere) {this.atmosphere=0;} else {this.atmosphere=atmosphere;}
	/*if (!atmosphereColor) {this.atmosphereColor=hexToRGBcomponents('#FFFFFF');}
		else {this.atmosphereColor=hexToRGBcomponents(colorToHex(atmosphereColor));}*/
	this.atmosphereColor='#FFFFFF'; //temporary until above issue fixed
	if (!name) {this.name='unnamed';} else {this.name=name;}
	if (!showName) {this.showName=false;} else {this.showName=showName;}

	//Below here I am not sure if want
	this.SoI;
	this.getVelocity=function(){return Math.sqrt(this.Vx*this.Vx+this.Vy*this.Vy);}
	this.getOriginDistance=function(){return Math.sqrt(this.x*this.x+this.y*this.y);}

	/*
	this.dataOut = function()
	{
		return "<tr><td>"+objects.indexOf(this)+". <span style='color:"+this.fill+";'>"+this.name+"</span><br />&nbsp;&nbsp;&nbsp;&nbsp;"+this.fill
		+"</td><td>Mass:<br />"+this.m.toFixed(3)+"</td><td>Radius:<br />"+this.rad.toFixed(3)+"</td><td>X: "+this.x.toFixed(2)+"<br />Y: "+this.y.toFixed(2)
		+"</td><td>Velocity X/Y:<br />"+this.Vx.toFixed(2)+" / "+this.Vy.toFixed(2)+"</td></tr>";
	}
	*/}