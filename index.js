const N = 8;
const randN = n => Math.floor(Math.random() * n);
const video = document.querySelector('#mochi');
video.src = `public/${randN(N)}.webm`;
video.addEventListener('click', () => window.location.reload());
