const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const indices = shuffle([...Array(8)].map((_, i) => i));
let index = indices.indexOf(7);
const video = document.querySelector('#mochi');
video.addEventListener('click', () => {
  index = index + 1 === indices.length ? 0 : index + 1;
  video.src = `public/${index}.webm`;
});
