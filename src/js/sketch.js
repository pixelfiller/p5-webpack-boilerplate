import p5 from 'p5';

const sketch =(p5) => {

  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;

  window.p5 = p5;

  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch');
    p5.background(0, 0, 0);
  }

  p5.draw = () => {
    // drawing here
  }
}

export default sketch;