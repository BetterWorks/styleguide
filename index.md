## Styleguide

### Table of Contents

- [1.0 General](#10-general)
- [2.0 Angular / Coffeescript](#20-angular--coffeescript)
  - [2.1 Basics](#21-basics)
  - [2.2 Angular specifics](#22-angular-specifics)
  - [2.3 Coffeescript specifics](#23-coffeescript-specifics)
- [3.0 Django / Python](#30-django--python)
  - [3.1 Basics](#31-basics)
- [4.0 Styleguide](#40-styleguide)


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

- Single quotes for strings, unless using string interpolation, then double quotes is acceptable

```coffeescript
# bad
aString = "Hello World"
anotherString = 'Hello #{ aString }' # this won't work at all

# good
aString = 'Hello World'
anotherString = "Hello #{ aString }"
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

#### 2.2 Angular specifics

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

- One way binding and functions passed down over two way binding

#### 2.3 Coffeescript specifics

- Always use strict

```coffeescript
# bad
app = angular.module 'bwApp'

app.component '...', ...

# good
'use strict'

app = angular.module 'bwApp'

app. component '...', ...

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

### 4.0 Styleguide

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

