## Styleguide

### Table of Contents

- [1.0 General](#10-general)
- [2.0 Angular / Coffeescript](#20-angular--coffeescript)
  - [2.1 Basics](#21-basics)
  - [2.2 Strings](#22-strings)
  - [2.3 Angular specifics](#23-angular-specifics)
  - [2.4 Coffeescript specifics](#24-coffeescript-specifics)
- [3.0 Django / Python](#30-django--python)
  - [3.1 Basics](#31-basics)
  - [3.2 Strings](#32-strings)
- [4.0 HTML](#40-html)
- [5.0 Styleguide](#50-styleguide)


### 1.0 General

- Avoid unnecessary else statements

```python
# bad
if a_true_thing:
    return True
else:
    return False

# good
if a_true_thing:
    return True
return False
```

- Avoid nested if statements

```python
# bad
if a_true_thing:
    if another_true_thing:
        return 'foo'
    else:
        return 'bar'

# good
if a_true_thing and another_true_thing:
    return 'foo'
elif a_true_thing:
    return 'bar'
```

- Avoid aligning groups of vars and keys in objects
  - Caveat: Legacy files that are already aligned. Keep it consistent with what is in place.

```python
# bad
foo    = 'foo'
foobar = 'foobar'

stuff = {
    'foo'   : 'foo',
    'foobar': 'foobar,'
}

# good
foo = 'foo'
foobar = 'foobar'

stuff = {
    'foo': 'foo',
    'foobar': 'foobar',
}
```

### 2.0 Angular / Coffeescript

#### 2.1 Basics

- 2 space indent

```coffeescript
hello = ->
  console.log('hi')
  return
hello()
```

- Commas should have a space after them

```coffeescript
# bad
list = [1,2,3,4]
foo = (bar,baz) -> ...

# good
list = [1, 2, 3, 4]
foo = (bar, baz) -> ...
```

- CamelCase when naming variables and functions

```coffeescript
# bad
some_function = (foo, bar) -> ...
some_var = 'Hello world'

# good
someFunction = (foo, bar) -> ...
someVar = 'Hello world'
```

- No quotes on keys in key value pairs

```coffeescript
# bad
obj = {'key': 'value'}
obj = {'key-with-dash': 'value'} # this requires quotes, therefore avoid dashes in key names

# good
obj = {key: 'value'}
obj = {key_name: 'value'} # exception for data to be consumed by the backend that expects snake case
```

- Space between colon and value in key value pairs

```coffeescript
# bad
obj = {key : 'value'}
obj = {key :'value'}
obj = {key:'value'}

# good
obj = {key: 'value'}
```

#### 2.2 Strings

- Single quotes for strings
  - Caveat: String interpolation requires double strings
  - Caveat: Strings containing single quotes should be double quotes

```coffeescript
# bad
aString = "Hello World"
anotherString = 'Hello #{ aString }' # this won't work at all
someString = 'Hello World\'s'

# good
aString = 'Hello World'
anotherString = "Hello #{ aString }"
someString = "Hello World's"
```

- Multi-line strings should be broken up with +

```coffeescript
# bad
firstPiece = 'the first piece goes here'
secondPiece = ' the second piece goes here'
thirdPiece = ' the third piece goes here'
aReallyLongString = firstPiece + secondPiece + thirdPiece

# good
aReallyLongString = 'the first piece goes here' +
  ' the second piece goes here' +
  ' the third piece goes here'
```

#### 2.3 Angular specifics

- Components over directives unless specific directive functionality is required

```coffeescript
app.component 'componentName',
  bindings:
    someObject: '<'
    someFunction: '&'
  controller: 'ComponentNameController'
  templateUrl: '/app/views/component/componentname.html'

app.controller 'ComponentNameController', ->
  return
```

- Put controller initialization code in `$onInit` rather than on the top level of the controller

```coffeescript
# bad
app.controller 'myCtrl', ->
  this.foo = 'bar'

# good
app.controller 'myCtrl', ->
  this.$onInit = =>
    this.foo = 'bar'
```

- Multi-line injects should linebreak with no additional indent

```coffeescript
angular.module('foo').service 'AServiceWithManyInjects', ($bar, $baz, $foo, CustomService,
MoreCustomService, NewService) ->
  ...
```

- Only declare controller variables on `this` if they are used in the respective HTML

```coffeescript
# used in HTML
this.myVar1 = 1
# only used in controller
myVar2 = 2
```

- One way binding and functions passed down over two way binding

```coffeescript
# TODO
```

#### 2.4 Coffeescript specifics

- Always use strict

```coffeescript
# bad
app = angular.module 'ngApp'

app.component '...', ...

# good
'use strict'

app = angular.module 'ngApp'

app.component '...', ...

```

- Multi-line function definitions should linebreak with no additional indent

```coffeescript
  someFn = (foo, bar, baz,
  qux, etc) ->
    console.log('Hello World')
```

### 3.0 Django / Python

#### 3.1 Basics

- 4 space indent

```python
def hello():
    print 'hi'
hello()
```

- Snake_case when naming variables and functions

```python
# bad
def someFunction(foo, bar): ...
someVar = 'Hello World'

# good
def some_function(foo, bar): ...
some_var = 'Hello World'
```

- CamelCase when naming classes

```python
# bad
class some_class_view(): ...
class someclassview(): ...

# good
class SomeClassView(): ...
```

#### 3.2 Strings

- Single quotes for strings
  - Caveat: Strings containing single quotes should be double quotes

```python
# bad
a_string = "Hello World"
another_string = 'Hello World\'s'

# good
a_string = 'Hello World'
another_string = "Hello World's"
```

- Multi-line strings should be wrapped in ()

```python
# bad
first_piece = 'the first piece goes here'
second_piece = ' the second piece goes here'
third_piece = ' the third piece goes here'
a_really_long_string = first_piece + second_piece + third_piece

# good
a_really_long_string = ('the first piece goes here'
  ' the second piece goes here'
  ' the third piece goes here')
```

- Prefer % style string interpolation

```python
world = 'World'
a_string = 'Hello %s' % world

hello = 'Hello'
world = 'World'
a_string = '%s %s' % (hello, world)
```

### 4.0 HTML

- Double quotes for attribute values

```html
<!--bad-->
<my-component class='my-class'></my-component>

<!--good-->
<my-component class="my-class"></my-component>
```

### 5.0 Styleguide

- Main headers should be 3 hash symbols and sentence case, starting with a number in format x.0

```markdown
> bad
#### 1.0 A main section header
### 1.0 a main section header
### 1.0 A Main Section Header
### 1.1 A main section header
### A main section header

> good
### 1.0 A main section header
```

- Sub-section headers should be "minor version" increments

```markdown
### 1.0 A main section header

  > bad
  #### 1.5 A sub section header
  ### 1.1 A sub section header

  > good
  #### 1.1 A sub section header
  #### 1.2 A second sub section header
```

- If code examples can be shown with a bad and good example, bad goes first, prepended with comments

````markdown
  > bad
  ```python
  some_good_example = True

  some_bad_example = True
  ```

  > good
  ```python
  # bad
  some_bad_example = True

  # good
  some_good_example = True
  ```
````

