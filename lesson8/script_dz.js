import { diagram, drawSK } from './module_canvas_obj.js'

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

drawSK(ctx)
diagram([80, 10, 55, 35, 65], ctx)