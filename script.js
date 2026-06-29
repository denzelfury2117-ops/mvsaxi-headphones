const slides = document.querySelectorAll('.slide');
const swatches = document.querySelectorAll('.swatch');
const total = slides.length;
let current = 1;

function getClass(i) {
  const diff = (i - current + total) % total;
  if (diff === 0) return 'slide slide--active';
  if (diff === total - 1) return 'slide slide--prev';
  if (diff === 1) return 'slide slide--next';
  return 'slide slide--hidden';
}

function render() {
  slides.forEach((slide, i) => {
    slide.className = getClass(i);
  });
  swatches.forEach((btn, i) => {
    btn.classList.toggle('swatch--active', i === current);
  });
}

function goTo(index) {
  current = (index + total) % total;
  render();
}

swatches.forEach(btn => {
  btn.addEventListener('click', () => {
    goTo(Number(btn.dataset.index));
  });
});

render();


const slider = document.querySelector('.feature-slide');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = 'grabbing';
  e.preventDefault(); 
});

document.addEventListener('mouseup', () => {
  if (!isDown) return;
  isDown = false;
  slider.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  const dx = e.pageX - startX;
  slider.scrollLeft = scrollLeft - dx;
});

const detailSlider = document.querySelector('.detail-carousel');
let isDown2 = false;
let startX2;
let scrollLeft2;

detailSlider.addEventListener('mousedown', (e) => {
  isDown2 = true;
  startX2 = e.pageX;
  scrollLeft2 = detailSlider.scrollLeft;
  detailSlider.style.cursor = 'grabbing';
  e.preventDefault();
});

document.addEventListener('mouseup', () => {
  if (!isDown2) return;
  isDown2 = false;
  detailSlider.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDown2) return;
  const dx = e.pageX - startX2;
  detailSlider.scrollLeft = scrollLeft2 - dx;
});