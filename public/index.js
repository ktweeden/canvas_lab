const app = function() {
  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');
  context.strokeStyle = 'grey';

  canvas.addEventListener('click', function(event) {
    console.log(event.layerX, event.layerY);
  })

  let startPoint = {x: 10, y: 490};

  const moveLeftButton = document.querySelector('#move-left');
  moveLeftButton.addEventListener('click', () => {
    drawLeft()
  })

  const drawLeft = function() {
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    console.log('Before increment', startPoint);
    if (startPoint.x > 0) {
      startPoint.x -= 5;
    }
    console.log('After increment', startPoint);
    context.lineTo(startPoint.x, startPoint.y);
    context.stroke();
  }

const moveRightButton = document.querySelector('#move-right');
moveRightButton.addEventListener('click', () => {
  drawRight();
});

const drawRight = function() {
  context.beginPath();
  context.moveTo(startPoint.x, startPoint.y);
  if (startPoint.x < 600) {
    startPoint.x += 5;
  }
  context.lineTo(startPoint.x, startPoint.y);
  context.stroke();
}

}// end of app

document.addEventListener('DOMContentLoaded', app);
