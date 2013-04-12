ToDo Next
---------

Stuff I want to work on as soon as possible.

* Make it possible to add in an object with a certain orbit using v = sqrt(GM/r)
  G=gravitational force of parent on new object, M=mass of parent object, r=radius of orbit
* Change collisions to calculate forces of both objects, then apply those to a new velocity for this using a new mass based on adding both masses, this is also move to a location right in the center between objects[j] and this?
* Change collisions to somehow mitigate extreme inaccuracy in certain collisions' velocity changes (check against radius to keep objects from going too far in? reverse gravity one step for that object?)
* Collider checks the radius of the larger object outwards from that object and can break apart objects entering within this radius? (Roche limit lazily implemented)
* Collider needs to make sure collisions with fixed objects keep the fixed object in its place and fixed in place
* Controllable object (with playerId)

General ToDo
------------

This is stuff I want to do sooner rather than later.

* Saving and loading simulations.
* Stats for average velocity between playerId and another Thing.
* Stats for average distance between playerId and another Thing.
* Graph for playerId relative distance and velocity to another Thing.
* Image rendering (objects can be defined as an image).
* Support for rotation of objects (after adding images).
* timeFactor can be scaled to smallest distance between two objects for higher accuracy with faster simulation when further out
* Proper pathing, ie. the paths fade after a certain amount of time (and are drawn as lines instead of just points again and again?)

Optimizing
----------

These will not happen for a long time basically.

* Implement collision detection inside gravity function (but not what happens during a collision)?
* Take as many config things as possible and just choose one option.