const button = document.getElementById('boo');
const sound = document.getElementById('boo-sound');

button.addEventListener('click', () => {
  sound.currentTime = 0;
  sound.play();
});
