import p5 from 'p5';

const sketch = (p5) => {

  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;
  window.p5 = p5;

  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    p5.background(255, 255, 255);
  }

  p5.draw = () => {
    p5.circle(30, 30, 20);
  }
}

new p5(sketch);

export default sketch;