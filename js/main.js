function start()
{
    if (hyperWarp)
    {
        interval=setInterval(function()
        {
            for (var i = 0; i < hyperSpeed; i++) loop();
            if (!hyperRender) {
                redraw();
                debugOut();
                playerOut();
            }
        },runSpeed);
    } else {
        interval=setInterval("loop();",runSpeed);
    }
}

function loop()
{
    for (var i = 0; i < objects.length-1; i++) for (var j = i+1; j < objects.length; j++) gravity(i,j);
    for (var i = objects.length-1; i > 0; i--) for (var j = i-1; j > -1; j--) collisionCheck(i,j);
    for (var i = 0; i < objects.length; i++) update(i);
    if (hyperRender) {
        redraw();
        debugOut();
        playerOut();
    }
}

function gravity(i,j)
{
    var Nx=false;
    var Ny=false;
    var Dx=objects[i].x-objects[j].x; //get relative distances
    var Dy=objects[i].y-objects[j].y;
    var Ds=Dx*Dx+Dy*Dy;               //note Ds is not Distance, but Distance^2
    //try adding some sort of collision detection that checks and appends collisions to a list/array/whatever to be handled after gravity finishes?
    if (Dx < 0)
    {
        Nx=true;                     //fix negative distance (for calculations)
        Dx=-Dx;
    }
    if (Dy < 0)
    {
        Ny=true;
        Dy=-Dy;
    }
    if (!objects[i].fixed)
    {
        var g=G*objects[j].m/Ds;     //calculate gravitational acceleration
        var Ax=Dx*g/(Dx+Dy);         //solve for acceleration x
        var Ay=g-Ax;                 //      for              y
        if (Nx) Ax=-Ax;              //fix negative values
        if (Ny) Ay=-Ay;
        Ax=-Ax; //i<j always, so needs gravity reversed (for some reason I forgot)
        Ay=-Ay;
        objects[i].Vx+=Ax*timeStep;  //apply change of velocity
        objects[i].Vy+=Ay*timeStep;
        //SoI stuff
        var tmp=Math.sqrt(Ax*Ax+Ay*Ay);
        if (tmp > iLastVelocity) objects[i].SoI=j;
        iLastVelocity=tmp;
    }
    if (!objects[j].fixed)
    {
        var g=G*objects[i].m/Ds;     //calculate gravitational acceleration
        var Ax=Dx*g/(Dx+Dy);         //solve for acceleration x
        var Ay=g-Ax;                 //      for              y
        if (Nx) Ax=-Ax;              //fix negative values
        if (Ny) Ay=-Ay;
        objects[j].Vx+=Ax*timeStep;  //apply change of velocity
        objects[j].Vy+=Ay*timeStep;
        //SoI stuff
        var tmp=Math.sqrt(Ax*Ax+Ay*Ay);
        if (tmp > jLastVelocity) objects[j].SoI=i;
        jLastVelocity=tmp;
    }
}

function Thing(m,x,y,Vx,Vy,color,radius,name,rotation)
{
    !name ? this.name="unnamed" : this.name=name;
    this.m=m;                                                     //mass
    !radius ? this.rad=Math.pow(m,1/3) : this.rad=radius;
    this.x=x;                                                     //location
    this.y=y;
    this.Vx=Vx;                                                   //velocity
    this.Vy=Vy;
    this.rot=0;                                                   //current rotation
    !rotation ? this.rotspd=0 : this.rotspd=rotation*Math.PI/180; //rotation speed
    !color ? this.fill="#FFFFFF" : this.fill=color;               //fill color
    this.fixed=false;
    this.collides=true;
    this.SoI;                                                     //ID of Thing in the SoI of
    
    this.getVelocity = function()
    {
        return Math.sqrt(this.Vx*this.Vx+this.Vy*this.Vy);
    }
    
    this.getOriginDistance = function()
    {
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
    
    this.dataOut = function()
    {
        return "<tr><td>Mass:<br />"+this.m.toFixed(3)+"</td><td>Radius:<br />"+this.rad.toFixed(3)+"</td><td>X: "+this.x.toFixed(2)+"<br />Y: "+this.y.toFixed(2)+"</td><td>Velocity X/Y:<br />"+this.Vx.toFixed(2)+" / "+this.Vy.toFixed(2)+"</td><td>Fill color:<br />"+this.fill+"</td><td>Fixed? "+this.fixed.toString()+"</td></tr>";
    }
}