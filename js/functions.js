function setOrbitalVelocity(id,d)
{
    //id=parent body id, d=radius of orbit (distance)
    //change to set this value relative to the parent body, applying any accelerations to the parent to the child
    var result=Math.sqrt(G*objects[id].m/(d*1.25));
    consoleOutput("Calculated orbital velocity: "+result,"Calculated orbital velocity: "+result);
    return result;
}