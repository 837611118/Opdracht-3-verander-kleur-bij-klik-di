const movingDiv = document.getElementById('movingDiv');
let currentPosition = 0;
let direction = 1;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function moveDiv() {
  currentPosition += direction;

  if (direction === 1 && currentPosition >= window.innerWidth - 50) {
    direction = -1;
  } else if (direction === -1 && currentPosition <= 0) {
    direction = 1;
  }

  movingDiv.style.left = currentPosition + 'px';
}

function changeColor() {
  movingDiv.style.backgroundColor = getRandomColor();
}

movingDiv.addEventListener('click', changeColor);

setInterval(moveDiv, 0.00003);
