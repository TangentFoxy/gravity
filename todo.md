Immediate ToDo
--------------

These are things I should've done before pushing to github. If there is something here, I am a lazy fool, beat me with a large stick.

* What happens if there is only one object? (Add a fix for this, I assume it will break.)
* Collider is lowering radius, it is not supposed to be able to.
* Try changing collider to delete i and keep j instead? What happens to objects falling through
  the cracks so-to-speak?
* Add a pause button/pause function/pause command.
* Add nameplates to planets moving around
  (need to add second canvas element and do the fanciness with that for pathing from now on).
* Make system for testing equal sized objects colliding from a stand-still.
* Make system(s) for testing synchronous movements (should stay synced but won't).

* Make a random system maker. (Or at least a random distribution of mass maker.)
* Add command to change size of canvas.
* Make quick command reference built-in.
* Pathing that overlays previous paths with a black screen with an alpha channel to make the current objects' locations stand out

* Check all for loops to make sure nothing is excluded.
* Check all loops (think there are errors because looping while deleting).

* Make 'norm' an actual display type and error if an invalid type is selected.

Known Bugs
----------

That I haven't figured out how to fix.

* hyperRender may be having an issue along with changing zoom, but these have most likely been fixed (remember hyperRender=false with
  hyperWarp=false will break the rendering until one of them is set true)

ToDo Soon
---------

Stuff I want to work on as soon as possible.

* Add image support, along with rotation support.
* Make an equation you can call to check how stable your orbit will be (check gravitational influence
  of the major object(s) in the system against parent body influence, parent
  needs to be > other influences (like the current SoI system, maybe just a check if the SoI ever changes,
  which would mean an unstable orbit))
* "Rocher" Collider checks the radius of the larger object outwards from that object and can break
  apart objects entering within this radius? (Roche limit lazily implemented)
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
* if an object is on the surface of another, its speed should be the same (note gravity calculations need to be tweaked),
  and its 'rotation' (the kind of rotation used in the render code) should be applied as the rotation of the parent object,
  so it stays on the same spot on the surface, basically, use the render code for parentRotation as movement code instead
  of just display code
* 'Dark Matter' mode for generating random stuff, explodes outward, and a slowly more and more significant
  invisible mass is created at 0,0

Long-Term
---------

* Implement collision detection inside gravity function (but not what happens during a collision)??
* Add heat/heat colors. Things colliding generate heat. Things cool down over time (except when over
  certain sizes, certain heat is maintained (thus large planets have some small heat and stars have much heat)).
* Additional physics (such as the various effects of sunlight/radiation) that won't be done realistically
  at all.
* window.performance.now() - something you can use to run faster than 1000x per second(?), only in Chrome
* SoI can be taken out of gravity function to make it faster (and should not require global variables?)