function consoleInput(e)
{
    var key=e.keyCode? e.keyCode : e.charCode      // I can't believe I'm adding support for IE...
    if (key!=13) return;                           // if not hitting Enter, return
    var input=document.getElementById("in").value;
    console.log("Console input: "+input);
    var args=input.split(" ");                     // split input into arguments
    try {
        switch(args[0])
        {
            case "function":
            if (args[1]==undefined) throw "no function"
            eval(args[1]);
            consoleOut("Function <span class='var'>"+args[1]+"</span> called.");
            break;
            case "set":
            if (args[1]==undefined || args[2]==undefined) throw "invalid set command";
            // I want it to output the value of 'var' when 'x' is not defined
            /*if (args[2]==undefined) {
                //consoleOut("<span class='var'>"+)
                eval("consoleOut('<span class=\"var\">'+"+args[1]+"+'</span>:<span class=\"data\">"+args[1]+");");
                break;
            }*/
            eval(args[1]+"="+args[2]+";");
            consoleOut("<span class='var'>"+args[1]+"</span> set to: <span class='data'>"+eval(args[1])+"</span>.");
            break;
            case "speed":
            case "runSpeed":
            if (args[1]==undefined) {
                consoleOut("<span class='var'>runSpeed</span>=<span class='data'>"+runSpeed+"</span>, <span class='var'>hyperWarp</span>=<span class='data'>"+hyperWarp+"</span>, <span class='var'>hyperSpeed</span>=<span class='data'>"+hyperSpeed+"</span>");
            } else {
                runSpeed=args[1];
                if (args[2]!==undefined) hyperWarp=args[2];
                if (args[3]!==undefined) hyperSpeed=args[3];
                consoleOut("Running every <span class='data'>"+runSpeed+"</span> milliseconds. <span class='var'>hyperWarp</span>: <span class='data'>"+hyperWarp+"</span> (<span class='var'>hyperSpeed</span>: <span class='data'>"+hyperSpeed+"</span>).");
                clearInterval(interval);
                start();
            }
            break;
            case "accuracy":
            case "timeStep":
            if (args[1]==undefined) {
                consoleOut("<span class='var'>timeStep</span>=<span class='data'>"+timeStep+"</span>");
            } else {
                timeStep=args[1];
                consoleOut("Time step <span class='data'>"+timeStep+"</span>, lower is more accurate.");
            }
            break;
            case "id":
            if (args[1]==undefined) {
                consoleOut("<span class='var'>playerId</span>=<span class='data'>"+playerId+"</span>, <span class='var'>renderId</span>=<span class='data'>"+renderId+"</span>, <span class='var'>parentId</span>=<span class='data'>"+parentId+"</span>");
            } else {
                playerId=args[1];
                if (args[2]!==undefined) renderId=args[2];
                if (args[3]!==undefined) parentId=args[3];
                consoleOut("<span class='var'>playerId</span>=<span class='data'>"+playerId+"</span>. <span class='var'>renderId</span>=<span class='data'>"+renderId+"</span>. <span class='var'>parentId</span>=<span class='data'>"+parentId+"</span>.");
            }
            break;
            case "scale":
            if (args[1]!==undefined) scaleFactor=args[1];
            consoleOut("<span class='var'>scaleFactor</span>=<span class='data'>"+scaleFactor+"</span>");
            break;
            case "hyperRender":
            hyperRender=!hyperRender;
            consoleOut("<span class='var'>hyperRender</span>=<span class='data'>"+hyperRender+"</span>.");
            break;
            case "parentRotation":
            parentRotation=!parentRotation;
            consoleOut("<span class='var'>parentRotation</span>=<span class='data'>"+parentRotation+"</span>.");
            break;
            case "renderType":
            if (args[1]!==undefined) renderType=args[1];
            consoleOut("<span class='var'>renderType</span>=<span class='data'>"+renderType+"</span>");
            break;
            case "path":
            path=!path;
            consoleOut("Pathing toggled to <span class='data'>"+path+"</span>.");
            break;
            case "zoom":
            if (args[1]=="state") {
                consoleOut("<span class='var'>zoom</span>=<span class='data'>"+zoom+"</span>, <span class='var'>zoomFactor</span>=<span class='data'>"+zoomFactor+"</span>. Current <span class='var'>scaleFactor</span>=<span class='data'>"+scaleFactor+"</span>.");
                break;
            }
            // if zoom=on, if adjusting zoom, adjust zoom, else zoom=off
            // if zoom=off, zoom true, if adjusting, adjust
            if (zoom) {
                if (args[1]!==undefined) {
                    zoomFactor=args[1];
                    consoleOut("Zoom adjusted. <span class='var'>zoomFactor</span>=<span class='data'>"+zoomFactor+"</span>.");
                } else {
                    zoom=false;
                    consoleOut("Zoom turned off.");
                }
            } else {
                zoom=true;
                if (args[1]!==undefined) zoomFactor=args[1];
                consoleOut("Zoom turned on. Current <span class='var'>zoomFactor</span>=<span class='data'>"+zoomFactor+"</span>.");
            }
            /*clearInterval(interval);
            start();*/
            break;
            case "clear":
            switch(args[1])
            {
                case "canvas":
                canvasClear();
                consoleOut("Canvas cleared.");
                break;
                case "console":
                document.getElementById("out").innerHTML="";
                consoleOut("Console cleared.");
                break;
                default:
                canvasClear();
                document.getElementById("out").innerHTML="";
                consoleOut("Canvas and console cleared.");
            }
            break;
            default:
            throw "unknown command";
        }
    }
    catch(err) {
        switch(err)
        {
            case "unknown command":
            consoleOut("Command '<span class='grey'>"+document.getElementById("in").value+"</span>' not recognised.","Failed console command: "+err);
            break;
            case "no function":
            consoleOut("Function not specfied.");
            break;
            case "invalid set command":
            consoleOut("No variable or no data to be set. Use '<span class='grey'>set var x</span>' to set data.");
            break;
            default:
            consoleOut("Unknown error: <span class='grey'>"+err+"</span>","Unknown error: "+err);
        }
    }
    document.getElementById("in").value=null; // reset value of textarea
}

function consoleOut(out,con)
{
    document.getElementById("out").innerHTML+=out+"<br />";
    if (con!==undefined) console.log(con);
    logdiv.scrollTop = logdiv.scrollHeight;
}

function playerOut()
{
    var out="<table>"+objects[playerId].dataOut()+"<tr><td colspan='2'>Total velocity:<br />"+objects[playerId].getVelocity()+"</td><td colspan='2'>Distance from origin:<br />"+objects[playerId].getOriginDistance()+"</td></tr></table>";
    document.getElementById("playerStats").innerHTML = out;
}

function debugOut()
{
    var out="<table>"
    for (var i = 0; i < objects.length; i++)
    {
        var out=out+objects[i].dataOut();
    }
    document.getElementById("debug").innerHTML = out+"</table>";
}