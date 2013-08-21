function start()
{
    if (hyperWarp)
    {
        interval=setInterval(function()
        {
            for (var i = 0; i < hyperSpeed; i++) loop();
            if (!hyperRender) {
                redraw();
                if (debugToggle) debugOut();
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
        if (debugToggle) debugOut();
        playerOut();
    }
}

function gravity(i,j)
{
    /*iLastVelocity=0;                  //I believe these need to be reset here
    jLastVelocity=0;*/
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

function Thing(m,x,y,Vx,Vy,color,radius,name,rotation,air_height,air_fill,showName)
{
    !name ? this.name="unnamed" : this.name=name;
    this.m=m;                                                                 //mass
    !radius ? this.rad=Math.pow(m,1/3) : this.rad=radius;
    this.x=x;                                                                 //location
    this.y=y;
    this.Vx=Vx;                                                               //velocity
    this.Vy=Vy;
    this.rot=0;                                                               //current rotation
    !rotation ? this.rotspd=0 : this.rotspd=rotation*Math.PI/180;             //rotation speed

    !color ? this.fill="#FFFFFF" : this.fill=colorToHex(color);               //fill color
    !air_height ? this.atmosphere=false : this.atmosphere=air_height;         //atmosphere stuff
    !air_fill ? this.air_fill="#FFFFFF" : this.air_fill=colorToHex(air_fill);
    this.fixed=false;
    this.collides=true;
    this.SoI;                                                                 //ID of Thing in the SoI of

    !showName ? this.showName=true : this.showName=showName;                  //display name on render?
    
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
        return "<tr><td>"+objects.indexOf(this)+". <span style='color:"+this.fill+";'>"+this.name+"</span><br />&nbsp;&nbsp;&nbsp;&nbsp;"+this.fill
        +"</td><td>Mass:<br />"+this.m.toFixed(3)+"</td><td>Radius:<br />"+this.rad.toFixed(3)+"</td><td>X: "+this.x.toFixed(2)+"<br />Y: "+this.y.toFixed(2)
        +"</td><td>Velocity X/Y:<br />"+this.Vx.toFixed(2)+" / "+this.Vy.toFixed(2)+"</td><td>Fixed? "+this.fixed.toString()+"<br />Collides? "+this.collides.toString()+"</td></tr>";
    }
}

function Vessel(parts,x,y,Vx,Vy,rot,name,showName)
{
    this.parts=parts; //an array of parts
    this.x=x;
    this.y=y;
    this.Vx=Vx;
    this.Vy=Vy;
    this.rot=rot;
    this.rotspd=0;
    !name ? this.name="unnamed" : this.name=name;
    !showName ? this.showName=true : this.showName=showName;
}

function Part(type,x,y,len_rad,rot,r1,r1_amt,r2,r2_amt)
{
    this.type=type;
    this.x=x;               // these are relative to the center of the vessel (or craft)
    this.y=y;
    // Could/Should replace this switch with just everything being len_rad and let type choose how to operate in physics/display?
    switch(type)
    {
        case "circle":
        this.rad=len_rad;   // length for rectangles/squares, radius for circles
        break;
        case "square":
        this.sides=len_rad;
        break;
        case "rectangle":
        this.len=len_rad;
        this.wid=len_rad*3;
        break;
        default:
        throw "invalid part type";
    }
    eval("this."+r1+"="+r1_amt); // is this right? I just want these things to have their own resouces properly XD
}