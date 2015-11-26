define([
    './block',
    './helper'
],function(Block, helper) {
    'use strict';
    var Cls_maze = function(width, heigth) {
        if (typeof width == 'object') {
            for (var key in width) {
                if (width.hasOwerty(key)) {
                    this[key] = width[key];
                }
            }
        } else if (typeof width == 'number' && typeof heigth == 'number') {
            this.width = width;
            this.heigth = heigth;
        }
        this.init();
    }
    Cls_maze.prototype = helper.extend([], {
        width: 10,
        heigth: 10,
        init: function() {
            for (var y = 0; y < this.heigth; y++) {
                var row = [];
                for (var x = 0; x < this.width; x++) {
                    row[x] = new Block(x, y);
                }
                this.push(row);
            }
        },
        get: function(x, y) {
            return this[y][x];
        },
        getNeighbor: function(x, y) {
            if (typeof x == 'object') {
                x = x.x;
                y = x.y;
            };
            var r = {
                top: null,
                right: null,
                bottom: null,
                left: null
            };
            if (x < 0 || x >= this.width || y < 0 || y >= this.heigth) return r;
            if (x > 0) {
                r.left = this.get(x - 1, y);
            }
            if (x < this.width - 1) {
                r.right = this.get(x + 1, y);
            }
            if (y > 0) {
                r.top = this.get(x, y - 1);
            }
            if (y < this.heigth - 1) {
                r.bottom = this.get(x, y + 1);
            }
            return r;
        }
    });
    return Cls_maze;
});