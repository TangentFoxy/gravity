Immediate ToDo
--------------

These are things I should've done before pushing to github. If there is something here, I am a lazy fool, beat me with a large stick.

* change README to say you have to download it to make it work (cause that's the truth)
* add in atmosphere collisions (change collider to initially check atmospheric collision, then actual collision)
* add in rotation changes based on collision angles (in new collider, possible in glancing collision collider?)
* start work on glancing collision detector...
* setting hyperWarp isn't working possibly? May be setting a string value instead of a boolean
* colorName stuff is broken when changed with set var x command (find out why)
* add how to report a bug to readme
* add toggle to objects for whether or not to display their names
* add ability to offset render from center of object
* check what would happen if something with negative mass collides with something of positive mass

* Something is wrong with changing speed on the fly, speeds don't appear to change until changing hyperRender to false, and then
  they don't appear to change back..
* Somehow the canvas clears when calling a new system, I can't find where I fixed this...

* Collider is lowering radius, it is not supposed to be able to.
* Try changing collider to delete i and keep j instead? What happens to objects falling through
  the cracks so-to-speak?
* Add a pause button/pause function/pause command.
* Make system for testing equal sized objects colliding from a stand-still.
* Make system(s) for testing synchronous movements (should stay synced but won't).

* Make a random system maker. (Or at least a random distribution of mass maker.)
* Add command to change size of canvas.
* Make quick command reference built-in.

* Check all for loops to make sure nothing is excluded.
* Check all loops (think there are errors because looping while deleting).

Known Bugs
----------

That I haven't figured out how to fix.

* hyperRender may be having an issue along with changing zoom, but these have most likely been fixed (remember hyperRender=false with
  hyperWarp=false will break the rendering until one of them is set true)
* There are seemingly random errors in the collider. Something to do with deleting objects while looping through the array?

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
* Read this: http://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line

Long-Term
---------

* Implement collision detection inside gravity function (but not what happens during a collision)??
* Add heat/heat colors. Things colliding generate heat. Things cool down over time (except when over
  certain sizes, certain heat is maintained (thus large planets have some small heat and stars have much heat)).
* Additional physics (such as the various effects of sunlight/radiation) that won't be done realistically
  at all.
* window.performance.now() - something you can use to run faster than 1000x per second(?), only in Chrome
* SoI can be taken out of gravity function to make it faster (and should not require global variables?)
* Color mixing during collision: separate "#AABBCC" into AA BB CC and min(AA1,AA2) etc to mix colors, then recombine
  Look at this for color codes to use when hitting a color name: http://www.w3schools.com/cssref/css_colornames.asp
  Also check this because I want to take mass into account when mixing colors: http://www.w3schools.com/tags/ref_colormixer.asp
  Also check if min(a1,a2) is the best way to combine colors or not