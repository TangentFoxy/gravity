Immediate ToDo
--------------

These are things I should've done before pushing to github. If there is something here, I am a lazy fool, beat me with a large stick.

* add toggle to objects for whether or not to display their names
* add ability to offset render from center of object

** check what would happen if something with negative mass collides with something of positive mass

* Add command to change size of canvas?
* Make quick command reference built-in.

* Check all for loops to make sure nothing is excluded.
* Check all loops (think there are errors because looping while deleting).
* Try changing collider to delete i and keep j instead? What happens to objects falling through
  the cracks so-to-speak?

* add in atmosphere collisions (change collider to initially check atmospheric collision, then actual collision)
* add in rotation changes based on collision angles (in new collider, possible in glancing collision collider?)
* start work on glancing collision detector...

Known Bugs
----------

That I haven't figured out how to fix. (To report a bug, look to the right on the github page where it says "Issues" and submit something
there. Please check this list first though. And please do report a bug if it's in this list but vague ('something wrong with collider'
'hyperRender seems to be acting up' etc).

* hyperRender may be having an issue along with changing zoom, but these have most likely been fixed (remember hyperRender=false with
  hyperWarp=false will break the rendering until one of them is set true)
* There are seemingly random errors in the collider. Something to do with deleting objects while looping through the array?

* Collider is lowering radius, it is not supposed to be able to.
* Something is wrong with changing speed on the fly, speeds don't appear to change until changing hyperRender to false, and then
  they don't appear to change back..

* colorName stuff is broken when changed with set var x command

ToDo Soon
---------

Stuff I want to work on as soon as possible.

* Add image support, along with rotation support.
* Make an equation you can call to check how stable your orbit will be (check gravitational influence
  of the major object(s) in the system against parent body influence, parent
  needs to be > other influences (like the current SoI system, maybe just a check if the SoI ever changes,
  which would mean an unstable orbit, of course the downside is it continuously says it's stable and doesn't actually know))
* "Rocher" Collider checks the radius of the larger object outwards from that object and can break
  apart objects entering within this radius? (Roche limit lazily implemented)
* Glancing collisions collider (idea=Large object loses fraction of mass, small object split in
  half, things go flying off with similar velocity to impact)
* Instead of two canvases with one hidden being copied to the first, have both canvases on top of each other and the top one transparent (removing the need to copy over a canvas image each iteration)
* Optimize clearing by having previous location stored in each object, have a clear loop before the draw loop that clears each of them with a circle+1 radius
* Optimize clearing on the top canvas by only clearing text areas based on previous iteration and size of text area (find out how to do this)

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
* if an object is on the surface of another, its speed should be the same (note gravity calculations need to be tweaked),
  and its 'rotation' (the kind of rotation used in the render code) should be applied as the rotation of the parent object,
  so it stays on the same spot on the surface, basically, use the render code for parentRotation as movement code instead
  of just display code
* 'Dark Matter' mode for generating random stuff, explodes outward, and a slowly more and more significant
  invisible mass is created at 0,0
* Read this: http://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
* Controllable object (with playerId)

Long-Term
---------

* Implement collision detection inside gravity function (but not what happens during a collision)??
* Add heat/heat colors. Things colliding generate heat. Things cool down over time (except when over
  certain sizes, certain heat is maintained (thus large planets have some small heat and stars have much heat)).
* Additional physics (such as the various effects of sunlight/radiation) that won't be done realistically
  at all.
* window.performance.now() - something you can use to run faster than 1000x per second(?), only in Chrome
* SoI can be taken out of gravity function to make it faster (and should not require global variables?)
* Brighten the RCS exhaust png, or you know, get a proper asset

Unorganized temporary
---------------------

(From a file of random ideas jotted down while coding.)

Save/Load commands accepting a string of comma-separated data.

system that checks (every 100 turns) how far player is from origin and if above certain distance (I'm thinking 1 mil), moves everything
in the universe back by that amount

change SoI to only check every 100 turns
make system count up velocity and average it every 100 turns for an average velocity

make a universe instead of a solar system :)

add optional settings to remove objects if they get a certain distance from the player (only checks every 100 turns)

make SoI system only consider it truly an SoI if influence is above 0.0001 (allowing for pretty far out orbits but denying anything waaay out)
(actually find out how to determine the threshold about where gravity will no longer stop something??)

Add game timing thing, so can keep track of when things happen.
find a way to mix colors on collisions, improve the atmosphere height mixing (right now just adds them)

For SoI checking calculation what about this idea?

Every iteration, the time keeping variable will be subtracted by the number of things in the simulation.
If this value == id of this Thing, calculate SoI

every time an object passes the positive x axis around it's parent (within 10 units of the axis), it trips the counter to say an orbit has occured
however, if less than 100 iterations have occured between the last count, it not count as orbit (so that far out stuff won't have 1 iteration orbits between true orbits)
- side effect things in extremely low orbit might only get an orbit counted every two times around
- things in a far enough out orbit might have an extremely short orbit followed by the proper time, followed by a short again

objects closer to star get atmospheres blown away
objects with atmosphere get tiny fraction of mass more atmosphere from objects with no atmosphere
objects atmosphere values are treated like mass?? they should be anyhow, and there needs to be some sort of variation with atmospheres besides mass???

http://www.reddit.com/r/KerbalSpaceProgram/comments/1id0u2/curious_about_how_good_the_orbital_physics_are/cbh7qkg?context=3

http://www.quackit.com/javascript/javascript_reserved_words.cfm