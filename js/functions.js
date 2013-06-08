function setOrbitalVelocity(id,d)
{
    //id=parent body id, d=radius of orbit (distance)
    //change to set this value relative to the parent body, applying any accelerations to the parent to the child
    var result=Math.sqrt(G*objects[id].m/(d*1.25));
    consoleOut("Calculated orbital velocity: "+result,"Calculated orbital velocity: "+result);
    return result;
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