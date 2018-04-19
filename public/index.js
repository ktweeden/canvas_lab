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
    if (startPoint.x > 0 && startPoint.x < 500) {
      startPoint.x -= 5;
    }
    context.lineTo(startPoint.x, startPoint.y);
    context.stroke();
  }
}

document.addEventListener('DOMContentLoaded', app);
