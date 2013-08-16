function setOrbitalVelocity(id,d)
{
    //id=parent body id, d=radius of orbit (distance)
    //this function will remain the same
    var result=Math.sqrt(Math.abs(G*objects[id].m/(d*orbitalVelocityCorrection)));
    consoleOut("Calculated orbital velocity: "+result,"Calculated orbital velocity: "+result);
    return result;
}

function setOrbit(parent,child,retrograde)
{
    var Nx=false;                                     // reset negative booleans
    var Ny=false;
    var Dx=objects[parent].x-objects[child].x;        // get distance
    var Dy=objects[parent].y-objects[child].y;
        if (Dx < 0)
        {
            Nx=true;                                  // fix negativeness for calculations
            Dx=-Dx;
        }
        if (Dy < 0)
        {
            Ny=true;
            Dy=-Dy;
        }
    var distance=Math.sqrt(Dx*Dx+Dy*Dy);
    var velocity=setOrbitalVelocity(parent,distance); // get velocity

    var Ax=Dx*velocity/(Dx+Dy);
    var Ay=velocity-Ax;
        if (!retrograde) {
        if (Nx) Ax=-Ax;                               // make orbits counterclockwise
        if (Ny) Ay=-Ay;
    }
    objects[child].Vx=-Ay+objects[parent].Vx;
    objects[child].Vy=Ax+objects[parent].Vy;
}

function random(min,max)
{
    var x = Math.random() * (max - min) + min;
    //return Number(x.toFixed(1));
    return x;
}

function randomInt(min,max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function colorToHex(color)
{
    if (color.charAt(0)=="#") {
        if (color.length < 7) return shortHexToHex(color);
        return color;
    }
    return colorNameToHex(color);
}

function shortHexToHex(short)
{
    //#ABA -> #AABBAA
    return "#"+short.charAt(1)+short.charAt(1)+short.charAt(2)+short.charAt(2)+short.charAt(3)+short.charAt(3);
}
function colorNameToHex(name)
{
    switch(name.toLowerCase())
    {
        case "aliceblue":
        return "#F0F8FF";
        case "antiquewhite":
        return "#FAEBD7";
        case "aqua":
        return "#00FFFF";
        case "aquamarine":
        return "#7FFFD4";
        case "azure":
        return "#F0FFFF";
        case "beige":
        return "#F5F5DC";
        case "bisque":
        return "#FFE4C4";
        case "black":
        return "#000000";
        case "blanchedalmond":
        return "#FFEBCD";
        case "blue":
        return "#0000FF";
        case "blueviolet":
        return "#8A2BE2";
        case "brown":
        return "#A52A2A";
        case "burlywood":
        return "#DEB887";
        case "cadetblue":
        return "#5F9EA0";
        case "chartreuse":
        return "#7FFF00";
        case "chocolate":
        return "#D2691E";
        case "coral":
        return "#FF7F50";
        case "cornflowerblue":
        return "#6495ED";
        case "cornsilk":
        return "#FFF8DC";
        case "crimson":
        return "#DC143C";
        case "cyan":
        return "#00FFFF";
        case "darkblue":
        return "#00008B";
        case "darkcyan":
        return "#008B8B";
        case "darkgoldenrod":
        return "#B8860B";
        case "darkgray":
        case "darkgrey":
        return "#A9A9A9"; // 'darkgrey' not real color
        case "darkgreen":
        return "#006400";
        case "darkkhaki":
        return "#BDB76B";
        case "darkmagenta":
        return "#8B008B";
        case "darkolivegreen":
        return "#556B2F";
        case "darkorange":
        return "#FF8C00";
        case "darkorchid":
        return "#9932CC";
        case "darkred":
        return "#8B0000";
        case "darksalmon":
        return "#E9967A";
        case "darkseagreen":
        return "#8FBC8F";
        case "darkslateblue":
        return "#483D8B";
        case "darkslategray":
        case "darkslategrey": // again alternate spelling of gray
        return "#2F4F4F";
        case "darkturquoise":
        return "#00CED1";
        case "darkviolet":
        return "#9400D3";
        case "deeppink":
        return "#FF1493";
        case "deepskyblue":
        return "#00BFFF";
        case "dimgray":
        case "dimgrey":
        return "#696969";
        case "dodgerblue":
        return "#1E90FF";
        case "firebrick":
        return "#B22222";
        case "floralwhite":
        return "#FFFAF0";
        case "forestgreen":
        return "#228B22";
        case "fuchsia":
        return "#FF00FF";
        case "gainsboro":
        return "#DCDCDC";
        case "ghostwhite":
        return "#F8F8FF";
        case "gold":
        return "#FFD700";
        case "goldenrod":
        return "#DAA520";
        case "gray":
        case "grey":
        return "#808080"; // alt gray spelling
        case "green":
        return "#008000";
        case "greenyellow":
        return "#ADFF2F";
        case "honeydew":
        return "#F0FFF0";
        case "hotpink":
        return "#FF69B4";
        case "indianred":
        return "#CD5C5C";
        case "indigo":
        return "#4B0082";
        case "ivory":
        return "#FFFFF0";
        case "khaki":
        return "#F0E68C";
        case "lavender":
        return "#E6E6FA";
        case "lavenderblush":
        return "#FFF0F5";
        case "lawngreen":
        return "#7CFC00";
        case "lemonchiffon":
        return "#FFFACD";
        case "lightblue":
        return "#ADD8E6";
        case "lightcoral":
        return "#F08080";
        case "lightcyan":
        return "#E0FFFF";
        case "lightgoldenrodyellow":
        return "#FAFAD2";
        case "lightgray":
        case "lightgrey":
        return "#D3D3D3"; // another gray alt
        case "lightgreen":
        return "#90EE90";
        case "lightpink":
        return "#FFB6C1";
        case "lightsalmon":
        return "#FFA07A";
        case "lightseagreen":
        return "#20B2AA";
        case "lightskyblue":
        return "#87CEFA";
        case "lightslategray":
        case "lightslategrey":
        return "#778899"; // alt gray
        case "lightsteelblue":
        return "#B0C4DE";
        case "lightyellow":
        return "#FFFFE0";
        case "lime":
        return "#00FF00";
        case "limegreen":
        return "#32CD32";
        case "linen":
        return "#FAF0E6";
        case "magenta":
        return "#FF00FF";
        case "maroon":
        return "#800000";
        case "mediumaquamarine":
        return "#66CDAA";
        case "mediumblue":
        return "#0000CD";
        case "mediumorchid":
        return "#BA55D3";
        case "mediumpurple":
        return "#9370DB";
        case "mediumseagreen":
        return "#3CB371";
        case "mediumslateblue":
        return "#7B68EE";
        case "mediumspringgreen":
        return "#00FA9A";
        case "mediumturquoise":
        return "#48D1CC";
        case "mediumvioletred":
        return "#C71585";
        case "midnightblue":
        return "#191970";
        case "mintcream":
        return "#F5FFFA";
        case "mistyrose":
        return "#FFE4E1";
        case "moccasin":
        return "#FFE4B5";
        case "navajowhite":
        return "#FFDEAD";
        case "navy":
        return "#000080";
        case "oldlace":
        return "#FDF5E6";
        case "olive":
        return "#808000";
        case "olivedrab":
        return "#6B8E23";
        case "orange":
        return "#FFA500";
        case "orangered":
        return "#FF4500";
        case "orchid":
        return "#DA70D6";
        case "palegoldenrod":
        return "#EEE8AA";
        case "palegreen":
        return "#98FB98";
        case "paleturquoise":
        return "#AFEEEE";
        case "palevioletred":
        return "#DB7093";
        case "papayawhip":
        return "#FFEFD5";
        case "peachpuff":
        return "#FFDAB9";
        case "peru":
        return "#CD853F";
        case "pink":
        return "#FFC0CB";
        case "plum":
        return "#DDA0DD";
        case "powderblue":
        return "#B0E0E6";
        case "purple":
        return "#800080";
        case "red":
        return "#FF0000";
        case "rosybrown":
        return "#BC8F8F";
        case "royalblue":
        return "#4169E1";
        case "saddlebrown":
        return "#8B4513";
        case "salmon":
        return "#FA8072";
        case "sandybrown":
        return "#F4A460";
        case "seagreen":
        return "#2E8B57";
        case "seashell":
        return "#FFF5EE";
        case "sienna":
        return "#A0522D";
        case "silver":
        return "#C0C0C0";
        case "skyblue":
        return "#87CEEB";
        case "slateblue":
        return "#6A5ACD";
        case "slategray":
        case "slategrey":
        return "#708090"; // alt gray spelling
        case "snow":
        return "#FFFAFA";
        case "springgreen":
        return "#00FF7F";
        case "steelblue":
        return "#4682B4";
        case "tan":
        return "#D2B48C";
        case "teal":
        return "#008080";
        case "thistle":
        return "#D8BFD8";
        case "tomato":
        return "#FF6347";
        case "turquoise":
        return "#40E0D0";
        case "violet":
        return "#EE82EE";
        case "wheat":
        return "#F5DEB3";
        case "white":
        return "#FFFFFF";
        case "whitesmoke":
        return "#F5F5F5";
        case "yellow":
        return "#FFFF00";
        case "yellowgreen":
        return "#9ACD32";
        default:
        console.log("Error: Invalid color name: "+name);
        return "#FFFFFF";
    }
}

function hexToRGBA(hex,alpha)
{
    // #FF00FF -> rgba(255,0,255,alpha)
    return "rgba("+parseInt("0x"+hex.substr(1,2))+","+parseInt("0x"+hex.substr(3,2))+","+parseInt("0x"+hex.substr(5,2))+","+alpha+")";
}
function hexToRGB(hex)
{
    // #FF00FF -> rgb(255,0,255)
    return "rgb("+parseInt("0x"+hex.substr(1,2))+","+parseInt("0x"+hex.substr(3,2))+","+parseInt("0x"+hex.substr(5,2))+")";
}