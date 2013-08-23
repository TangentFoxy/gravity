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