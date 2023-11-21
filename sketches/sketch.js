const canvasSketch = require('canvas-sketch');
const p5 = require("p5");
new p5();

const settings = {
  p5: true,
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return () => {
background(0);
circle(width/2,height/2,50);
  };
};

canvasSketch(sketch, settings);
