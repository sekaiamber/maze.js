# maze.js

## Introduction

This is a javascript library used for making a maze.

## Usage

```javascript
// make a 20 blocks width and 10 blocks height maze.
var maze = new Maze(20, 10);

// get block of 1 block from top(the second block) and 2 blocks from left(the 3rd block).
var block = maze.get(1, 2);
// or get block of 1 block from top and 3 blocks from left.
var block2 = maze[3][1];
```

## Develop

Go into `index.html`, and change the config or require.js.

```html
<script>
    // Release
    // var rconfig = {
    //     paths: {
    //         "main": "scripts/maze"
    //     }
    // }
    // Develop  NOTE: use this config.
    var rconfig = {
        baseUrl: 'data',
    }
    require.config(rconfig);
    require(["main"]);
</script>
```

## Release

I use `r.js` to optimize requirejs's module, run following command:

```shell
$ cd path/to/repo/
$ r.js -o build.js
```

You can get optimized file `maze.js` in `./scripts/maze.js`

And into `index.html` to check if all goes well:

```html
<script>
    // Release  NOTE: use this config.
    var rconfig = {
        paths: {
            "main": "scripts/maze"
        }
    }
    // Develop
    // var rconfig = {
    //     baseUrl: 'data',
    // }
    require.config(rconfig);
    require(["main"]);
</script>
```