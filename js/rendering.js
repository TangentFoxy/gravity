function redraw()
{
    if (zoom) scaleFactor+=zoomFactor; // just messing around zooming in slowly over time
    if (!parentRotation)
    {
        var rot=objects[renderId].rot;
    } else {
        var a=objects[renderId].x-objects[parentId].x;
        var o=objects[renderId].y-objects[parentId].y;
        var rot=Math.atan2(a,o)-Math.PI/2;
    }
    path ? canvasPath() : canvasClear();
    for (var i = 0; i < objects.length; i++)
    {
        context.beginPath();
        if (renderType=="side")
        {
            var x=(objects[i].x-objects[renderId].x)*scaleFactor+canvas.clientWidth/2;
            var y=(objects[i].x-objects[renderId].x)*scaleFactor+canvas.clientHeight/2;
        } else if (renderType=="3D")
        {
            var x=((objects[i].x-objects[renderId].x)*Math.cos(30)-(objects[i].y-objects[renderId].y)*Math.sin(30))*scaleFactor+canvas.clientWidth/2;
            var y=((objects[i].y-objects[renderId].y)*Math.sin(30)+(objects[i].x-objects[renderId].x)*Math.cos(30))*scaleFactor+canvas.clientHeight/2;
        } else {
            var x=((objects[i].x-objects[renderId].x)*Math.cos(rot)-(objects[i].y-objects[renderId].y)*Math.sin(rot))*scaleFactor+canvas.clientWidth/2;
            var y=((objects[i].x-objects[renderId].x)*Math.sin(rot)+(objects[i].y-objects[renderId].y)*Math.cos(rot))*scaleFactor+canvas.clientHeight/2;
        }
        var radius=objects[i].rad*scaleFactor;
        if (radius < renderRadius) radius=renderRadius;
        context.arc(x,y,radius,0,2*Math.PI); //Technically should render from objects[i].rot TO 2*Math.PI+objects[i].rot ?? Doesn't really matter when we're circles...
        context.fillStyle=objects[i].fill;
        context.fill();
    }
}

function canvasPath()
{
    if (pathFade) {
        //replace this with the solid background version
        context.beginPath();
        context.rect(0,0,canvas.clientWidth,canvas.clientHeight);
        context.fillStyle="rgba(0,0,0,"+fadeAlpha+")";
        context.fill();
    }
    //don't need to check for anything else yet, because the other type of pathing is to do nothing
}

function canvasClear()
{
    context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
}