Immediate ToDo
--------------

These are things I should've done before pushing to github. If there is something here, I am a lazy fool, beat me with a large stick.

* Make a random system maker. (Or at least a random distribution of mass maker.)

* SoI should not be calculated inside loop, should be once in a while thing
* SoI should not need global variables for itself
* should objects have an SoI variable??

* Check all for loops to make sure nothing is excluded.
* Check all loops (think there are errors because looping while deleting).
* Add ability for objects to be images.
* Add ability to have rotation on objects. (Ties in with images as objects.) The variable is there, but
  does not do anything currently.
* Add ability to change size of canvas.
* Add ability to change renderId, clear the canvas.

ToDo Soon
---------

Stuff I want to work on as soon as possible.

* Make an equation you can call to check how stable your orbit will be (check gravitational influence
  of the major object(s) in the system against parent body influence, parent
  needs to be > other influences)
* "Rocher" Collider checks the radius of the larger object outwards from that object and can break
  apart objects entering within this radius? (Roche limit lazily implemented) half the radius again??
* Collider needs to make sure collisions with fixed objects keep the fixed object in its place and
  fixed in place (currently objects of a higher value that are fixed can lose this when
  colliding..something like that, just add a check of j if j is fixed, i becomes fixed during collision)
* Controllable object (with playerId)
* Glancing collisions collider (idea=Large object loses fraction of mass, small object split in
  half, things go flying off with similar velocity to impact)
* Make a system with lots of objects (or a way to randomly generate objects) to test it running with more calculations and thus, more lag :)

General ToDo
------------

This is stuff I want to do sooner rather than later.

* Elastic bounce collider (for screwing around??)
* Saving and loading simulations.
* Stats for average velocity between playerId and another Thing.
* Stats for average distance between playerId and another Thing.
* Graph for playerId relative distance and velocity to another Thing.
* timeFactor can be scaled to smallest distance between two objects for higher accuracy with
  faster simulation when further out
* Proper pathing, i.e. the paths fade after a certain amount of time (and are drawn as lines instead
  of just points again and again?)

Long-Term
---------

* Additional physics (such as the various effects of sunlight/radiation) that won't be done realistically
  at all.
* Implement collision detection inside gravity function (but not what happens during a collision)??
* Add heat/heat colors. Things colliding generate heat. Things cool down over time (except when over
  certain sizes, certain heat is maintained).
* window.performance.now() - something you can use to run faster than 1000x per second(?), only in Chrome