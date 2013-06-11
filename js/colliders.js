function update(i)
{
    objects[i].rot+=objects[i].rotspd;        //apply rotation
    if (objects[i].rot > Math.Tau) objects[i].rot-=Math.Tau;
    if (!objects[i].fixed)
    {
        objects[i].x+=objects[i].Vx*timeStep; //apply acceleration
        objects[i].y+=objects[i].Vy*timeStep;
    }
}

function collisionCheck(i,j)
{
    // try/catch shouldn't be needed, but there are errors after collisions where objects are removed
    try
    {
    var Dx=objects[i].x-objects[j].x; //find distances
    }
    catch(err)
    {
        console.log("Error caught: "+err);
        return;
    }
    var Dy=objects[i].y-objects[j].y;
    var d=Math.sqrt(Dx*Dx+Dy*Dy);
    if (d < objects[i].rad+objects[j].rad)
    {
        if (!objects[i].collides) 
        {
            consoleOut("Ignored collision between <span class='data'>"+i+"</span> and <span class='data'>"+j+"</span>.","Ignored collision between "+i+" and "+j+".");
            return;
        }
        if (!objects[j].collides)
        {
            consoleOut("Ignored collision between <span class='data'>"+i+"</span> and <span class='data'>"+j+"</span>.","Ignored collision between "+i+" and "+j+".");
            return;
        }
        // add tolerance checks here (surface stuff) or inside the final collider
        consoleOut("Collision between <span class='data'>"+i+"</span> and <span class='data'>"+j+"</span>. (<span class='var'>"+objects[i].name+"</span> and <span class='var'>"+objects[j].name+"</span>)","Collision between "+i+" and "+j+". ("+objects[i].name+" and "+objects[j].name+")");
        switch(colliderType)
        {
            case "combine":
            combine(i,j);
            break;
            case "none":
            break;
            default:
            throw "invalid colliderType";
        }
    }
}

function combine(i,j)
{
    if (objects[j].m > objects[i].m) {
        objects[i].fill=objects[j].fill; // color & name of most massive object is kept
        objects[i].name=objects[j].name;
    }
    if (renderId == j) renderId=i;                    // fix renderId if needed
    if (renderId > j) renderId-=1;
    if (playerId == j) playerId=i;                    // fix playerId if needed
    if (playerId > j) playerId-=1;
    if (parentId == j) parentId=i;                    // fix parentId if needed
    if (parentId > j) parentId-=1;
    if (objects[i].fixed)
    {
        objects[i].m+=objects[j].m;                   //add mass
        var rad=Math.pow(objects[i].m,1/3);           //recalc radius
        if (rad > objects[i].rad) objects[i].rad=rad;
        objects.splice(j,1);                          //delete [j]
        return;
    }
    if (objects[j].fixed)
    {
        objects[i].m+=objects[j].m;                   //add mass
        objects[i].x=objects[j].x;                    //move to correct position
        objects[i].y=objects[j].y;
        objects[i].Vx=0;                              //correct the velocity
        objects[i].Vy=0;
        var rad=Math.pow(objects[i].m,1/3);           //radius recalculated
        if (rad > objects[i].rad) objects[i].rad=rad;
        objects[i].fixed=true;                        //become fixed
        objects.splice(j,1);                          //delete [j]
        return;
    }
    var Lx=objects[i].x*objects[i].m+objects[j].x*objects[j].m;   //weighting the mass vs location to find the CoM
    var Ly=objects[i].y*objects[i].m+objects[j].y*objects[j].m;
    var Fx=objects[i].Vx*objects[i].m+objects[j].Vx*objects[j].m; //calculate force to apply to "new" object
    var Fy=objects[i].Vy*objects[i].m+objects[j].Vy*objects[j].m;
    objects[i].m+=objects[j].m;                       //add mass of [j]
    objects[i].Vx=Fx/objects[i].m;                    //apply combined force
    objects[i].Vy=Fy/objects[i].m;
    var rad=Math.pow(objects[i].m,1/3);               //recalculate radius based on new mass
    if (rad > objects[i].rad) objects[i].rad=rad;
    objects[i].x=Lx/objects[i].m;                     //find center of mass, place [i] there
    objects[i].y=Ly/objects[i].m;
    objects.splice(j,1);                              //delete [j]
}