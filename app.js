// Carousel auto-scroll setup
function setupCarouselAutoscroll() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const items = carousel.querySelectorAll('.carousel-item');
  let scrollAmount = 0;
  const scrollStep = carousel.clientWidth;
  const scrollInterval = 3000;

  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.classList.add('carousel-indicators');

  const oldIndicators = carousel.parentElement.querySelector('.carousel-indicators');
  if (oldIndicators) oldIndicators.remove();

  items.forEach((_, index) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator-dot');
    if (index === 0) indicator.classList.add('active');
    indicator.dataset.index = index;

    indicator.addEventListener('click', () => {
      scrollAmount = index * scrollStep;
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      updateActiveIndicator(index);
    });

    indicatorsContainer.appendChild(indicator);
  });

  carousel.parentElement.appendChild(indicatorsContainer);

  function updateActiveIndicator(activeIndex) {
    indicatorsContainer.querySelectorAll('.indicator-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  setInterval(() => {
    scrollAmount += scrollStep;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }

    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    const index = Math.round(scrollAmount / scrollStep);
    updateActiveIndicator(index);
  }, scrollInterval);
}

// Toggle mobile nav
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

window.onload = () => {
  setupCarouselAutoscroll();
};

