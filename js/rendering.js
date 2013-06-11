function redraw()
{
    if (zoom) scaleFactor+=Number(zoomFactor);         // zooming ?
    if (!parentRotation)
    {
        var rot=objects[renderId].rot;                 // rotation of view
    } else {
        var a=objects[renderId].x-objects[parentId].x;
        var o=objects[renderId].y-objects[parentId].y;
        var rot=Math.atan2(a,o)-Math.PI/2;
    }
    path ? canvasPath() : canvasClear();               // path or clear ?
    //BACKEND RENDER
    for (var i = 0; i < objects.length; i++)
    {
        backctx.beginPath();
        switch(renderType)
        {
            case "side":
            var x=(objects[i].x-objects[renderId].x)*scaleFactor+backend.width/2;
            var y=(objects[i].x-objects[renderId].x)*scaleFactor+backend.height/2;
            break;
            case "3D":
            var x=((objects[i].x-objects[renderId].x)*Math.cos(30)-(objects[i].y-objects[renderId].y)*Math.sin(30))*scaleFactor+backend.width/2;
            var y=((objects[i].y-objects[renderId].y)*Math.sin(30)+(objects[i].x-objects[renderId].x)*Math.cos(30))*scaleFactor+backend.height/2;
            break;
            case "norm":
            var x=((objects[i].x-objects[renderId].x)*Math.cos(rot)-(objects[i].y-objects[renderId].y)*Math.sin(rot))*scaleFactor+backend.width/2;
            var y=((objects[i].x-objects[renderId].x)*Math.sin(rot)+(objects[i].y-objects[renderId].y)*Math.cos(rot))*scaleFactor+backend.height/2;
            break;
            default:
            throw "invalid renderType";
        }
        var radius=objects[i].rad*scaleFactor;          // set radius of object
        if (radius < renderRadius) radius=renderRadius;
        backctx.arc(x,y,radius,0,Math.Tau); //Technically should render from objects[i].rot TO 2*Math.PI+objects[i].rot ??
        backctx.fillStyle=objects[i].fill;   //  Doesn't really matter when we're circles...
        backctx.fill();
    }
    frontctx.clearRect(0,0,frontend.width,frontend.height); // clear frontend
    frontctx.drawImage(backend,0,0);                        // draw backend
    //FRONTEND RENDER
    for (var i=0;i<objects.length;i++)
    {
        switch(renderType)
        {
            case "side":
            var x=(objects[i].x-objects[renderId].x)*scaleFactor+frontend.width/2;
            var y=(objects[i].x-objects[renderId].x)*scaleFactor+frontend.height/2;
            break;
            case "3D":
            var x=((objects[i].x-objects[renderId].x)*Math.cos(30)-(objects[i].y-objects[renderId].y)*Math.sin(30))*scaleFactor+frontend.width/2;
            var y=((objects[i].y-objects[renderId].y)*Math.sin(30)+(objects[i].x-objects[renderId].x)*Math.cos(30))*scaleFactor+frontend.height/2;
            break;
            case "norm":
            var x=((objects[i].x-objects[renderId].x)*Math.cos(rot)-(objects[i].y-objects[renderId].y)*Math.sin(rot))*scaleFactor+frontend.width/2;
            var y=((objects[i].x-objects[renderId].x)*Math.sin(rot)+(objects[i].y-objects[renderId].y)*Math.cos(rot))*scaleFactor+frontend.height/2;
            break;
            default:
            throw "invalid renderType";
        }
        /*
//"rgba(r,g,b,a)"
//atmosphere is drawn on frontctx, before drawing the planet
// air_height + rad = radius
// air_fill + alpha = color
//hexToRGBA("#A20F00",0.5)

        var radius=objects[i].rad*scaleFactor;          // set radius of object
        if (radius < renderRadius) radius=renderRadius;
        backctx.arc(x,y,radius,0,2*Math.PI); //Technically should render from objects[i].rot TO 2*Math.PI+objects[i].rot ??
        backctx.fillStyle=objects[i].fill;   //  Doesn't really matter when we're circles...
        backctx.fill();
        */
        /*if (!objects[i].air_height) {
            frontctx.beginPath();
            var radius=(objects[i].rad+objects[i].air_height)*scaleFactor;
            if (radius < renderRadius) radius=renderRadius+0.6; // STOP HARDCODING THIS
            frontctx.arc(x,y,radius,0,Math.Tau);
            frontctx.fillStyle=hexToRGBA(objects[i].air_fill,0.8); // STOP HARDCODING THIS AS WELL
            frontctx.fill();
        }*/
        //
        if (drawNames) {
            frontctx.font='8pt Calibri'; //should replace font with something else??
            if (namesColor=='object') {
                frontctx.fillStyle=objects[i].fill;
            } else {
                frontctx.fillStyle=namesColor;
            }
            frontctx.fillText(objects[i].name,x+objects[i].rad*scaleFactor+2,y-objects[i].rad*scaleFactor-2);
        }
    }
}

function canvasPath()
{
    if (pathFade) {
        backctx.beginPath();
        backctx.rect(0,0,backend.width,backend.height);
        backctx.fillStyle="rgba(0,0,0,"+fadeAlpha+")";
        backctx.fill();
    }
    //don't need to check for anything else yet, because the other type of pathing is to do nothing
}

function canvasClear()
{
    backctx.clearRect(0,0,backend.width,backend.height);
}