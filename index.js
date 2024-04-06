const bulb = document.querySelector('.bulb');

const bulbOn = () => {
  bulb.classList.toggle('bulb--on');
};

window.addEventListener('keydown', (event) => {
   bulbOn();
});

