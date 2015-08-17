# Raffy
Simple handler for requestAnimationFrame

###Creating

```javascript
//creating an instance
var raf = new Raffy( function() {
  //some operations
} );
```

###Methods

##### `start`

Starts request animation frame
```javascript
raf.start();
```

##### `stop`

Stops request animation frame
```javascript
raf.stop();
```

###Example
```javascript
var counter,
    raf;

var iterator = function() {
  counter = counter || 0;
  
  console.log( counter++ );
};

var raf = new Raffy( iterator );

raf.start();

//...some time later...

raf.stop();
```
