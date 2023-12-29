For this kata you will be using some meta-programming magic to create a new `Thing` object. This object will allow you to define things in a descriptive **sentence like format**.

This challenge attempts to build on itself in an increasingly complex manner.

## Examples of what can be done with "Thing":

```ruby
jane = Thing.new('Jane')
jane.name # => 'Jane'

# can define boolean methods on an instance
jane.is_a.person
jane.is_a.woman
jane.is_not_a.man

jane.person? # => true
jane.man? # => false

# can define properties on a per instance level
jane.is_the.parent_of.joe
jane.parent_of # => 'joe'

# can define number of child things
# when more than 1, an array is created
jane.has(2).legs
jane.legs.size # => 2
jane.legs.first.is_a?(Thing) # => true

# can define single items
jane.has(1).head

jane.head.is_a?(Thing) # => true

# can define number of things in a chainable and natural format
jane.has(2).arms.each { having(1).hand.having(5).fingers }

jane.arms.first.hand.fingers.size # => 5

# can define properties on nested items
jane.has(1).head.having(2).eyes.each { being_the.color.blue.and_the.shape.round }

# can define methods
jane.can.speak('spoke') do |phrase|
  "#{name} says: #{phrase}"
end

jane.speak("hello") # => "Jane says: hello"

# if past tense was provided then method calls are tracked
jane.spoke # => ["Jane says: hello"]

```

```javascript
const jane = new Thing('Jane');
jane.name; // => 'Jane'

// can define boolean methods on an instance
jane.is_a.person;
jane.is_a.woman;
jane.is_not_a.man;

jane.is_a_person; // => true
jane.is_a_man; // => false

// can define properties on a per instance level
jane.is_the.parent_of.joe;
jane.parent_of; // => 'joe'

// can define number of child things
// when more than 1, an array is created
jane.has(2).legs;
jane.legs.length; // => 2
jane.legs[0] instanceof Thing; // => true

// can define single items
jane.has(1).head;

jane.head instanceof Thing; // => true

// can define number of things in a chainable and natural format
jane.has(2).arms.each((arm) => having(1).hand.having(5).fingers);

jane.arms[0].hand.fingers.length; // => 5

// can define properties on nested items
jane.has(1)
    .head.having(2)
    .eyes.each((eye) => being_the.color.blue.having(1).pupil.being_the.color.black);

// can define methods
jane.can.speak('spoke', (phrase) => `${name} says: ${phrase}`);

jane.speak('hello'); // => "Jane says: hello"

// if past tense was provided then method calls are tracked
jane.spoke; // => ["Jane says: hello"]
```

```coffeescript
jane = new Thing 'Jane'
jane.name # => 'Jane'

# can define boolean methods on an instance
jane.is_a.person
jane.is_a.woman
jane.is_not_a.man

jane.is_a_person # => true
jane.is_a_man # => false

# can define properties on a per instance level
jane.is_the.parent_of.joe
jane.parent_of # => 'joe'

# can define number of child things
# when more than 1, an array is created
jane.has(2).legs
jane.legs.length # => 2
jane.legs[0] instanceof Thing # => true

# can define single items
jane.has(1).head

jane.head instanceof Thing # => true

# can define number of things in a chainable and natural format
jane.has(2).arms.each (arm)-> having(1).hand.having(5).fingers

jane.arms[0].hand.fingers.length # => 5

# can define properties on nested items
jane.has(1).head.having(2).eyes.each (eye) ->
  being_the.color.blue.with(1).pupil.being_the.color.black

# can define methods
jane.can.speak 'spoke', (phrase)-> "#{name} says: #{phrase}"

jane.speak 'hello' # => 'Jane says: hello'

# if past tense was provided then method calls are tracked
jane.spoke # => ['Jane says: hello']

```

```python
jane = Thing('Jane')
jane.name # => 'Jane'

# can define boolean methods on an instance
jane.is_a.person
jane.is_a.woman
jane.is_not_a.man

jane.is_a_person # => True
jane.is_a_man # => False

# can define properties on a per instance level
jane.is_the.parent_of.joe
jane.parent_of # => 'joe'

# can define number of child things
# when more than 1, a tuple subclass is created
jane.has(2).legs
len(jane.legs) # => 2
isinstance(jane.legs[0], Thing) # => True

# can define single items
jane.has(1).head
isinstance(jane.head, Thing) # => True

# can define number of things in a chainable and natural format
>> Note: Python, unlike Ruby and Javascript, doesn't have a pretty syntax for blocks of expressions and a forEach method for iterables. So you should implement this behaviour yourself.
jane.has(2).arms.each.having(1).hand.having(5).fingers
len(jane.arms[0].hand.fingers) # => 5

# can define properties on nested items
jane.has(1).head.having(2).eyes.each.being_the.color.blue.having(1).pupil.being_the.color.black

# can define methods: thing.can.verb(method, past='')
method = lambda phrase: "%s says: %s" % (name, phrase)
# or
def method(phrase):
  return "%s says: %s" % (name, phrase)
jane.can.speak(method, "spoke")

jane.speak("hello") # => "Jane says: hello"

# if past tense was provided then method calls are tracked
jane.spoke # => ["Jane says: hello"]
```

> Note: Most of the test cases have already been provided for you so that you can see how the Thing object is supposed to work.
