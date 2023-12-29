~~~if-not:factor
A nested list (or *array* in JavaScript) is a list that appears as a value inside another list, 

```python
[item, item, [item, item], item]
```
in the above list, [item, item] is a nested list.  
  
Your goal is to write a function that determines the depth of the deepest nested list within a given list.  
return 1 if there are no nested lists.
The list passed to your function can contain any data types.  
~~~

~~~if:factor
A nested list in factor is a sequence that appears inside another sequence.
```factor
{ item item { item item } item }
```
in the above list, `{ item item }` is a nested list.  

Your goal is to write a word that determines the depth of the deepest nested list within a given list.
return 1 if there are no nested lists.
The list passed to your function can contain any data types.  
~~~
A few examples:

```python
list_depth([True])
return 1

list_depth([])
return 1

list_depth([2, "yes", [True, False]])
return 2

list_depth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1])
return 6

list_depth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]])
return 2
```
```javascript
arrayDepth([true]) // returns 1

arrayDepth([]) // returns 1

arrayDepth([2, "yes", [true, false]]) // returns 2

arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]) // returns 6

arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]) // returns 2
```
```factor
{ t } depth -> 1
{ } depth -> 1 
{ 2 "yes" { t 0 } } depth -> 2
{ 1 { 2 { 3 { 4 { 5 { 6 } 5 } 4 } 3 } 2 } 1 } depth -> 6
{ 2.0 { 2 0 } 3.7 { 3 7 } 6.7 { 6 7 } } depth -> 2
```
