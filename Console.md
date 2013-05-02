Console Commands!
-----------------

function name();
- Calls the function "name();"
- Does not support spaces in the call.

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