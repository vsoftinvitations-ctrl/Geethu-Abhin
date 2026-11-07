import { weddingData } from '../data/wedding-data.js';

/**
 * Getting Married Section
 * Layout: Horizontal Split Card with Couple Portrait
 * Image: /assets/couple.jpg
 */
export function renderGettingMarriedSection() {
  const { bride, groom } = weddingData;

  const brideDisplay = bride.shortName || 'Geethu';
  const groomDisplay = groom.shortName || 'Abhin';

  return `
    <section class="getting-married-section" id="getting-married">
      <div class="getting-married-wrapper">
        <div class="getting-married-card reveal-on-scroll">
          <!-- Left: Couple Portrait Image -->
          <div class="getting-married-media" id="getting-married-slider" role="region" aria-label="Couple Portrait">
            <img
              src="/assets/couple.jpg"
              alt="${brideDisplay} &amp; ${groomDisplay} - Couple Portrait"
              class="getting-married-photo getting-married-slide active"
              data-slide="0"
              loading="eager"
            />
          </div>

          <!-- Right: Text & Names -->
          <div class="getting-married-content">
            <span class="getting-married-subheading">A CELEBRATION OF LOVE &amp; FRIENDSHIP</span>
            <h2 class="getting-married-bride">${brideDisplay}</h2>
            <span class="getting-married-ampersand">&amp;</span>
            <h2 class="getting-married-groom">${groomDisplay}</h2>
            <p class="getting-married-friend-tag">Together With Our Families &amp; Dearest Friends</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initGettingMarriedSlider() {
  const container = document.getElementById('getting-married-slider');
  if (!container) return;

  const slides = container.querySelectorAll('.getting-married-slide');
  const dots = container.querySelectorAll('.slider-dot');
  if (slides.length < 2) return;

  let currentIndex = 0;
  let intervalId = null;
  let isTransitioning = false;

  function goToSlide(nextIndex) {
    if (nextIndex === currentIndex || isTransitioning) return;
    isTransitioning = true;

    const currentSlide = slides[currentIndex];
    const nextSlideEl = slides[nextIndex];

    // Outgoing slide remains fully visible underneath at z-index 2
    slides.forEach(s => s.classList.remove('incoming', 'outgoing', 'active'));
    currentSlide.classList.add('outgoing');

    // Prepare incoming slide at z-index 3 starting at opacity 0
    nextSlideEl.style.transition = 'none';
    nextSlideEl.style.opacity = '0';
    nextSlideEl.classList.add('incoming');
    void nextSlideEl.offsetWidth; // Force reflow to commit opacity: 0

    // Smoothly fade in incoming slide directly over outgoing slide
    nextSlideEl.style.transition = 'opacity 1.8s ease-in-out';
    nextSlideEl.style.opacity = '1';

    // Update indicator dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === nextIndex);
    });

    currentIndex = nextIndex;

    // After 1800ms fade finishes, finalize active state
    setTimeout(() => {
      slides.forEach(s => {
        s.style.transition = '';
        s.style.opacity = '';
        s.classList.remove('incoming', 'outgoing');
      });
      nextSlideEl.classList.add('active');
      isTransitioning = false;
    }, 1850);
  }

  function nextSlide() {
    const next = (currentIndex + 1) % slides.length;
    goToSlide(next);
  }

  function startAutoplay() {
    stopAutoplay();
    intervalId = setInterval(nextSlide, 4500);
  }

  function stopAutoplay() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(targetIndex)) {
        goToSlide(targetIndex);
        startAutoplay();
      }
    });
  });

  // Clicking the media container cycles to next image with smooth fade
  container.addEventListener('click', (e) => {
    if (!e.target.classList.contains('slider-dot')) {
      nextSlide();
      startAutoplay();
    }
  });

  // Pause autoplay on mouse hover (desktop), resume on leave
  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}
