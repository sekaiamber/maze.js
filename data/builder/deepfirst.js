define([
    './base',
    '../helper'
], function(Base, helper) {
    'use strict';
    var Cls_dfMazeBuilder = function() {};
    Cls_dfMazeBuilder.prototype = helper.extend(new Base(), {
        build: function(maze) {
            var current = maze.get(0, 0);
            while (!current.__built) {
                
            }
            this.clear(maze);
        }
    });
    return Cls_dfMazeBuilder;
});