Console Commands!
-----------------

function name();
- Calls the function "name();"
- Does not support spaces in the call.

speed x warp y
- Sets runSpeed (milliseconds delay between iterations) to "x"
- Optional "warp" (true/false) will turn hyperWarp on or off.
- Optional "y" will set hyperSpeed (how many times per runSpeed time to run).

accuracy x
- Sets timeStep (which controls accuracy) to "x"

id x y z
- Sets playerId to "x"
- Optional sets renderId to "y"
- Optional sets parentId to "z"
- Clears canvas when switching renderId and/or parentId.

scale x
- Sets scaleFactor to "x"

hyperRender
- Toggles hyperRender on/off. (Note: If not using hyperWarp, things will disappear.)

parentRotation
- Toggles parentRotation (rendering based on angle between renderId/parentId) on/off.

renderType x
- Sets renderType to "x"
- Types: norm, side, 3D.

path
- Toggles pathing on/off.

zoom x
- Toggles auto-zoom on/off.
- Optional "x" sets the zoomFactor.

Not Implemented
---------------

set var x
- Sets the variable "var" to the value "x"

random type
- Makes a random Thing in a random orbit of "type"
- Types: star, planet, asteroid, moon, square
- Assumes ID 0 is parent star, assumes anything else is a planet (for moon type).
- Type "square" is for the lols, and behaves exactly like a planet (except for collisions and display).
- Stars will break things in an existing system because of their large mass...duh