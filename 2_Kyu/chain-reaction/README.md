This is an extreme version of [Chain Reaction - Minimum Bombs Needed]( https://www.codewars.com/kata/64c8a9b8f7c1b7000fdcdafb). You will be given a string that represents a 2D "map" such as this:
```
0+000x000xx
++000++000+
00x0x00000x
0+000000x+0
```

The string consists of three different characters (in addition to newlines that separate the rows):
* "+" bombs: when activated, their explosion activates any bombs directly above, below, left, or right of the "+" bomb.
* "x" bombs: when activated, their explosion activates any bombs placed in any of the four diagonal directions next to the "x" bomb.
* Empty spaces "0".

The goal is simple: given a map, return the minimum number of bombs that need to be set off for all bombs to be destroyed by the chain reaction. In the above example, the answer is `3` (can you see why?).

# Performance requirement

Given a map of size `N = width x height`, your algorithm should run in time `O(N log N)`. `O(N)` is possible but not required. Map sizes tested will be:
* 10 fixed maps (up to 5 x 5) to get your feet wet
* 100 small random maps (10 x 10) to test your robustness
* 50 medium random maps (50 x 50) to test your performance
* 10 large random maps (100 x 100) to ensure you're only blowing up the *bombs*
* 2 giant random maps (250 x 250) to make you cry

The reference solution runs in around 6-7 seconds. With a smart algorithm, there's no need for micro-optimizations.

*Disabled libraries: sys, math, numpy, scipy, and sklearn*