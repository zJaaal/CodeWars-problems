<p>In this finite version of <a href="http://en.wikipedia.org/wiki/Conway's_Game_of_Life">Conway's Game of Life</a>  (here is an excerpt of the rules) ... </p>
<p>
<i>
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. 
Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
<ul>
<li>Any live cell with fewer than two live neighbours dies, as if caused by under-population.</li>
<li>Any live cell with two or three live neighbours lives on to the next generation.</li>
<li>Any live cell with more than three live neighbours dies, as if by overcrowding.</li>
<li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
</ul>
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one)
</i>
</p>
...implement your own method which will take the initial state as an NxM array of 0's (dead cell) and 1's (living cell) and return an equally sized array representing the next generation. Cells outside the array must be considered dead.
Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).<br/> N.B.: for illustration purposes, 0 and 1 will be represented as ░ and ▓ blocks (PHP: basic black and white squares) respectively. You can take advantage of the 'htmlize' function to get a text representation of the universe:<br/>eg:

```javascript
console.log(htmlize(cells));
```

```python
print htmlize(cells)
```

```ruby
puts htmlize(cells)
```

```php
echo htmlize($cells) . "\r\n";
```

```julia
print(htmlize(cells))
```
