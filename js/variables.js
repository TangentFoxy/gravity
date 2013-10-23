// RUNNING SPEED VARIABLES
var runSpeed=10;     // how many milliseconds between each iteration
var hyperWarp=false; // simulation is run multiple times per iteration
                     // WARNING: Messing with this can freeze or crash your browser.
var hyperSpeed=20;   // how many times to run simulation per iteration
                     // WARNING: High values lead to lag, freezing, crashing.
var timeStep=0.5;    // multipled by velocity/movement to change accuracy/speed of the simulation
                     // (lower is more accurate, but slower)

// PLAYER RELATED VARIABLES
var playerId=0;      // ID of Thing that is the player

// PHYSICS RELATED VARIABLES
var scaleFactor=0.08; // I have started using this for too many physics things, it should be constant now
var colliderType="combine";          // Which collider to use, "combine" or "none" or ???
var colorMix=false;                  // Experimental color mixing in the collider!
var atmosphereGeneration=true;       // when a big enough object is created through collisions, it gets a small atmosphere
var atmGenThreshold=32;              // this/scaleFactor = minimum mass for atmosphereca (32/0.08=400)
var atmGenAmount=0.1;                // how much atmosphere to initially give these objects
var orbitalVelocityCorrection=1.251; // the formula to calculate circular orbits seems to be off by this factor,
									 // so I use this to correct for it
var formationCorrection=true;        // Attempts to correct wider orbits in formation random generation
var formationCorrectionFactor=0.32;  // this * distance/num_of_obj + velocity to maintain orbit = true velocity

// RENDER RELATED VARIABLES
var hyperRender=true; //True=normal render, False=rendering ONLY WORKS with hyperWarp on, and at runSpeed
var displayScaleFactor=1;  // (CURRENTLY STILL USING scaleFactor) multiplied by data in rendering to adjust zoom level
var displayScaleFactor=scaleFactor;
var renderRadius=1; // minimum render radius for an object
var renderId=0;     // ID of Thing to put at center of frame
var parentId=0;     // ID of Thing to use as parent body (for rotating frame of reference)
var parentRotation=true; // whether to rotate based on angle between parentId and renderId (true),
                        // or using the rotation of renderId (false)
var renderType="norm"; // "norm" shows top-down, "side" shows a sideview (1D), "3D" shows fake-3D
var path=true;      // draw path? [by not clearing canvas]
var pathFade=true;  // path fades away over time?
var fadeAlpha=0.05; // how much fade per iteration
var drawNames=true; // whether or not to write the names of things next to them
var namesColor='object';   // color to write names in
var zoom=false;            // zoom in slowly? (just for the hell of it)
var zoomFactor=1;          // how much to increase scaleFactor each frame when zoom is on
var debugToggle=true;      // debug info on or off
var minimumAtmosphere=0.6; // minimum radius to make atmosphere visible
var atmosphereAlpha=0.15;  // how much the atmosphere fades into the background of space

// CONSTANTS
var version="0.1.2"  //Yes, there is a version number now. Don't know why.
var G;               //Gravitational Constant
Math.Tau=2*Math.PI;  //Tau is useful. I like Tau.

var iLastVelocity=0; //used to find SoI
var jLastVelocity=0;

// RANDOMNESS PARAMETERS
var randSysMin=20;           //5 to 100 default
var randSysMax=80;
var randType='stabley';   // valid random generation types 'stabley' 'chaos' 'formation'
var randNames=true;         // True generates names like Uuts, False generates a letter and number for type and ID

var randGgiantChance=0.9;   // if rand(0,1) > this, spawn gas giant
var rantGgiantMin=75;       // min before multiplier
var randGgiantMax=225;      // max    '       '
var randGgiantMultiplier=8;
var randPlanetChance=0.25;  // if rand(0,1) < this, spawn planet
var randPlanetMin=10;
var randPlanetMax=60;
var randPlanetMultiplier=1.6;
							// else asteroid
var randAstMin=1;
var randAstMax=60;
var randAstMultiplier=16;   // actually, is divided

var randChaosMin=5;		// decided to move chaos randomization into its own thing and abandon any possible improvements
var randChaosMax=200;	// it won't be used in the future anyhow!