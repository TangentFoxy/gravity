Console Commands!
-----------------

function name();
- Calls the function "name();"

set var x
- Sets the variable "var" to the value "x"
  (remember if x is a string, to surround it with quotes)
- NOT IMPLEMENTED: If 'x' not specified, will log the value of "var"

speed x warp y
runSpeed x warp y
- Sets runSpeed (milliseconds delay between iterations) to "x"
- Optional: "warp" (true/false) will turn hyperWarp on or off
- Optional: "y" will set hyperSpeed (how many times per iteration to run)
- If 'x' not specified, will log all values this command can change

accuracy x
timeStep x
- Sets timeStep (which controls accuracy) to "x"
- If 'x' not specified, will log timeStep's value

id x y z
- Sets playerId to "x"
- Optional sets renderId to "y"
- Optional sets parentId to "z"
- If 'x' not specified, will log all values this command can change

scale x
- Sets scaleFactor to "x"
- If 'x' not specified, will log scaleFactor's value

hyperRender
- Toggles hyperRender on/off. (Note: If not using hyperWarp, things will disappear or appear to stop moving.)
- Currently this combined with the speed command are a bit buggy. Try toggling this until it goes fast. Yeah,
  I don't get it either.

parentRotation
- Toggles parentRotation (rendering based on angle between renderId/parentId) on/off.

renderType x
- Sets renderType to "x"
- Types: norm, side, 3D.
- If 'x' not specified, will log current renderType

path
- Toggles pathing on/off.

zoom x
- Toggles auto-zoom on/off.
- Optional: "x" sets the zoomFactor
- If 'x'=='state' instead returns current state of zoom/zoomFactor/scaleFactor

clear x
- Clears the canvas and console
- Optional: "x" can specify 'canvas' or 'console' to clear only one

pause
stop
- Stops the simulation.

resume
start
- Resumes the simulation.

restart
- Restarts the simulation as if the page was reloaded. Does not clear console.

fade
- Toggles path fading.

Not Implemented
---------------

random type
- Makes a random Thing in a random orbit of "type"
- Types: star, planet, asteroid, moon, square
- Assumes ID 0 is parent star, assumes anything else is a planet (for moon type).
- Type "square" is for the lols, and behaves exactly like a planet (except for collisions and display).
- Stars will break things in an existing system because of their large mass...duh