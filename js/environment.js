function setEnvironment(cmd,obj,g,rSpeed,hWarp,hSpeed,tStep,plId,hRender,sFactor,rRadius,rId,paId,pRotation,rType,p,pFade,fAlpha,z,zFactor)
{
    // set , obj  = obj isn't used, just put whatever
    // save,"obj" = obj is string naming the object
    // load, obj  = obj is an actual object
    try {
        switch(cmd)
        {
            case "set":
            G=g;
            runSpeed=rSpeed;
            hyperWarp=hWarp;
            hyperSpeed=hSpeed;
            timeStep=tStep;
            playerId=plId;
            hyperRender=hRender;
            scaleFactor=sFactor;
            renderRadius=rRadius;
            renderId=rId;
            parentId=paId;
            parentRotation=pRotation;
            renderType=rType;
            path=p;
            pathFade=pFade;
            fadeAlpha=fAlpha;
            zoom=z;
            zoomFactor=zFactor;
            break;
            case "save":
            eval(obj+".g="+g+";");
            eval(obj+".runSpeed="+rSpeed+";");
            eval(obj+".hyperWarp="+hWarp+";");
            eval(obj+".hyperSpeed="+hSpeed+";");
            eval(obj+".timeStep="+tStep+";");
            eval(obj+".playerId="+plId+";");
            eval(obj+".hyperRender="+hRender+";");
            eval(obj+".scaleFactor="+sFactor+";");
            eval(obj+".renderRadius="+rRadius+";");
            eval(obj+".renderId="+rId+";");
            eval(obj+".parentId="+paId+";");
            eval(obj+".parentRotation="+pRotation+";");
            eval(obj+".renderType="+rType+";");
            eval(obj+".path="+p+";");
            eval(obj+".pathFade="+pFade+";");
            eval(obj+".fadeAlpha="+fAlpha+";");
            eval(obj+".zoom="+z+";");
            eval(obj+".zoomFactor"+zFactor+";");
            break;
            case "load":
            G=obj.g;
            runSpeed=obj.runSpeed;
            hyperWarp=obj.hyperWarp;
            hyperSpeed=obj.hyperSpeed;
            timeStep=obj.timeStep;
            playerId=obj.playerId;
            hyperRender=obj.hyperRender;
            scaleFactor=obj.scaleFactor;
            renderRadius=obj.renderRadius;
            renderId=obj.renderId;
            parentId=obj.parentId;
            parentRotation=obj.parentRotation;
            renderType=obj.renderType;
            path=obj.path;
            pathFade=obj.pathFade;
            fadeAlpha=obj.fadeAlpha;
            zoom=obj.zoom;
            zoomFactor=obj.zoomFactor;
            canvasClear();
            break;
            default:
            throw "invalid setEnvironment() command";
        }
    }
    catch(err) {
        consoleOut("Error with setEnvironment: <span class='grey'>"+err+"</span>.","setEnvironment error: "+err);
    }
}

function Environments()
{
    vergaEnvironment = {
        g:1,
        runSpeed:33,
        hyperWarp:false,
        hyperSpeed:20,
        timeStep:0.2,
        playerId:3,
        hyperRender:true,
        scaleFactor:0.08,
        renderRadius:1,
        renderId:0,
        parentId:3,
        parentRotation:false,
        renderType:"norm",
        path:true,
        pathFade:true,
        fadeAlpha:0.05,
        zoom:false,
        zoomFactor:0.00001
    };
    stableyEnvironment = {
        g:10,
        runSpeed:33,
        hyperWarp:false,
        hyperSpeed:20,
        timeStep:0.5,
        playerId:1,
        hyperRender:true,
        scaleFactor:0.6,
        renderRadius:1,
        renderId:0,
        parentId:1,
        parentRotation:false,
        renderType:"norm",
        path:true,
        pathFade:true,
        fadeAlpha:0.05,
        zoom:false,
        zoomFactor:0.001
    };
    orbitalVelocityTestEnvironment = {
        g:10,
        runSpeed:1,
        hyperWarp:true,
        hyperSpeed:2,
        timeStep:0.5,
        playerId:1,
        hyperRender:true,
        scaleFactor:0.4,
        renderRadius:1,
        renderId:0,
        parentId:1,
        parentRotation:false,
        renderType:"norm",
        path:true,
        pathFade:true,
        fadeAlpha:0.05,
        zoom:false,
        zoomFactor:1
    };
}

function verga()
{
    // This will be the final system used in the game.
    setEnvironment("load",vergaEnvironment);
    //objects
    objects[0]=new Thing(120000,0,0,0,0,"yellow",false,"Verga");
    objects[1]=new Thing(24,140,0,0,0,"red",false,"Gelshc");
    objects[1].Vy=-setOrbitalVelocity(0,140);
    objects[2]=new Thing(120,575,0,0,0,"orange",false,"Oschi");
    objects[2].Vy=-setOrbitalVelocity(0,575);
    objects[3]=new Thing(100,960,0,0,0,"green",false,"Terra");
    objects[3].Vy=-setOrbitalVelocity(0,960);
    objects[4]=new Thing(46,1400,0,0,0,"red",false,"Ast");
    objects[4].Vy=-setOrbitalVelocity(0,1380);
    objects[5]=new Thing(1200,3600,0,0,0,"yellow",false,"Asgur");
    objects[5].Vy=-setOrbitalVelocity(0,3500);
    objects[6]=new Thing(80,3700,0,0,0,"blue",false,"Uriel");
    objects[6].Vy=objects[5].Vy-setOrbitalVelocity(5,100);
}

function stableySystem()
{
    setEnvironment("load",stableyEnvironment);
    //objects
    objects[0]=new Thing(100,0,0,0,0,"yellow");
    objects[0].fixed=true;
    objects[1]=new Thing(10,50,0,0,-4,"green");
    objects[2]=new Thing(0.005,180,0,0,2.32,"#6A6A87",1);
    objects[3]=new Thing(26,400,0,0,-1.5,"red");
    objects[4]=new Thing(0.01,420,0,0,-4,"blue",1);
}

function unstableSystem()
{
    setEnvironment("load",stableyEnvironment);
    //objects
    objects[0]=new Thing(100,0,0,0,0,"yellow");
    objects[0].fixed=true;
    objects[1]=new Thing(10,50,0,0,-4,"green");
    objects[2]=new Thing(0.005,180,0,0,2.32,"#6A6A87",1);
    objects[3]=new Thing(26,400,0,0,-1.5,"red");
    objects[4]=new Thing(0.01,420,0,0,-4,"blue",1);
    objects[5]=new Thing(0.005,200,0,0,2.3,"#6A6A87",1);
    objects[6]=new Thing(0.005,160,0,0,2.51,"#6A6A87",1);
    objects[7]=new Thing(0.005,-180,0,0,-2.32,"#6A6A87",1);
    objects[8]=new Thing(0.009,-170,10,0,-2,"#6A6A87",1);
    objects[9]=new Thing(0.001,-300,40,0.4,-1.5,"#6A6A87",1);
    objects[10]=new Thing(0.08,100,0,0,-2.7,"#6A6A87",1);
    objects[11]=new Thing(0.1,-400,10,0,1,"orange",2);
    objects[12]=new Thing(0.004,170,0,0,2.7,"#6A6A87",1);
    objects[13]=new Thing(0.006,140,16,0,2.51,"#6A6A87",1);
    objects[14]=new Thing(0.0032,-185,32,0,-2.32,"#6A6A87",1);
    objects[15]=new Thing(0.01,-100,10,0.4,-2.14,"#6A6A87",1);
    objects[16]=new Thing(0.0001,-325,42,0.32,-1.55,"#6A6A87",1);
    objects[17]=new Thing(0.082,105,-50,0.1,-2.7,"#6A6A87",1);
}

function collidingSystem()
{
    setEnvironment("load",stableyEnvironment);
    //objects
    objects[0]=new Thing(100,0,0,0,0,"yellow",12);
    objects[1]=new Thing(1,10,-70,0.2,0,"red",1);
    objects[2]=new Thing(20,120,10,0.1,0.1,"blue");
    objects[3]=new Thing(0.00001,-30,-30,0,0,false,0.5);
    objects[3].fixed=true;
    objects[3].collides=false;
    objects[4]=new Thing(5,-120,-10,-0.2,0.1,"green",1.3);
    objects[5]=new Thing(1,-40,-70,-0.1,0.1,"#676789",1);
    objects[5]=new Thing(100,-200,-200,0,0,"yellow");
    objects[6]=new Thing(30,400,0,0.01,0.2,"red");
}

function orbitalVelocityTest()
{
    setEnvironment("load",orbitalVelocityTestEnvironment);
    //objects
    objects[0]=new Thing(100,0,0,0,0,"yellow",12);
    objects[0].fixed=true;
    objects[1]=new Thing(0.2,0,80,0,0,"red",0.7);
    objects[1].Vx=-setOrbitalVelocity(0,80);
    objects[2]=new Thing(2.58,0,200,0,0,"orange",2);
    objects[2].Vx=-setOrbitalVelocity(0,200);
    objects[3]=new Thing(2.32,0,360,0,0,"green",1.85);
    objects[3].Vx=-setOrbitalVelocity(0,360);
    objects[4]=new Thing(0.0001,0,380,0,0,"#6A6A87");
    objects[4].Vx=objects[3].Vx;
    objects[4].Vx=-setOrbitalVelocity(3,20);
}

//objects[i]=new Thing(mass,x,y,Vx,Vy,color,radius,name,rotation);
// rotation in degrees per (what...use timeStep to "fix" this)