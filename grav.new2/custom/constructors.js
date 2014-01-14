function Body(mass,x,y,color,name,atmosphereHeight,atmosphereColor,rotation,rotationSpeed) {
	Vector.call(this,Vx,Vy);
	Circle.call(this,x,y,radius,color,1,rotation);
	this.radius=Math.pow(mass,1/3); //may change how radius defined
	this.mass=mass;
	!name ? this.name='unnamed' : this.name=name;
	!rotationSpeed ? this.rotationSpeed=0 : this.rotationSpeed=rotationSpeed;
	!atmosphereHeight ? this.atmosphereHeight=0 : this.atmosphereHeight=atmosphereHeight;
	!atmosphereColor ? this.atmosphereColor='#FFFFFF' : this.atmosphereColor=atmosphereColor;
	//this.SoI; //?
	this.getVelocity=function(){return this.getMagnitude();}
}