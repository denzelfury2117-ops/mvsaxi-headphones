const slides = document.querySelectorAll('.slide');
const swatches = document.querySelectorAll('.swatch');
const total = slides.length;
let current = 1; // начинаем с зелёного (середина)

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

// Клик по свотчу
swatches.forEach(btn => {
  btn.addEventListener('click', () => {
    goTo(Number(btn.dataset.index));
  });
});

// Первый рендер
render();