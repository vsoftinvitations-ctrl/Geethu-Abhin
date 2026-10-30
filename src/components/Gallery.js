import { weddingData } from '../data/wedding-data.js';

/**
 * Our Story — Single-Place Scroll-Driven Image Rolling Gallery
 * Shows all images in ONE elegant, centered Kasavu showcase frame.
 * As the user scrolls down, the viewport locks in 1 place while the images
 * roll / slide smoothly one by one through the frame.
 * Once all images have completed, vertical scrolling naturally continues
 * down to the next section.
 */
export function renderGallery() {
  const { galleryImages } = weddingData;
  const total = galleryImages.length;

  const slidesHtml = galleryImages
    .map(
      (img, idx) => `
      <div class="story-slide-item" data-index="${idx}" role="group" aria-label="Story ${idx + 1} of ${total}">
        <div class="kasavu-card story-stage-card">
          <!-- Left/Top: Inset Photograph Frame -->
          <div class="story-card-photo-col">
            <div class="photo-mat-frame">
              <span class="photo-corner corner-tl"></span>
              <span class="photo-corner corner-tr"></span>
              <span class="photo-corner corner-bl"></span>
              <span class="photo-corner corner-br"></span>

              <img src="${img.src}" alt="${img.alt}" loading="${idx === 0 ? 'eager' : 'lazy'}" class="story-slide-img" draggable="false" />
            </div>
          </div>

          <!-- Right/Bottom: Story Narrative Details -->
          <div class="story-card-info-col">
            <div class="story-card-meta-top">
              <span class="story-meta-pill">${img.location}</span>
              <span class="story-meta-date">${img.date}</span>
            </div>

            <div class="story-card-narrative">
              <span class="story-tagline-text">${img.tagline}</span>
              <h3 class="story-headline">${img.title}</h3>
              <p class="story-caption-text">${img.caption}</p>
            </div>

            <div class="story-card-footer">
              <div class="story-slide-index-tag">MOMENT ${idx + 1} OF ${total}</div>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  const dotsHtml = galleryImages
    .map(
      (_, idx) => `
      <button class="story-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to moment ${idx + 1}"></button>
    `
    )
    .join('');

  return `
    <section id="photo-gallery" class="story-scroll-section">
      <!-- Scroll container: locks viewport in 1 place while scrolling through all images -->
      <div class="story-scroll-container" id="story-scroll-container">
        <div class="story-sticky-viewport" id="story-sticky-viewport">
          
          <!-- Section Header -->
          <div class="story-header-wrap">
            <h2 class="gallery-section-title">OUR STORY</h2>
            <p class="gallery-subtitle">Moments captured along our path to forever</p>
            <div class="section-divider" style="margin: 0.35rem auto 0.6rem;">
              <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="240" height="24" />
            </div>
          </div>

          <!-- ONE Central Showcase Stage: All images display and roll in this 1 place -->
          <div class="story-stage-wrapper">
            <div class="story-stage-viewport" id="story-stage-viewport">
              <div class="story-slides-strip" id="story-slides-strip">
                ${slidesHtml}
              </div>
            </div>

            <!-- Controls in this 1 place: Counter & Interactive Dots -->
            <div class="story-stage-controls">
              <span class="story-counter" id="story-counter">01 / 0${total}</span>
              <div class="story-dots" id="story-dots">
                ${dotsHtml}
              </div>
              <span class="story-scroll-hint">[Scroll down to roll moments]</span>
            </div>
          </div>

      </div>
    </section>
  `;
}

export function initGalleryCarousel() {
  const scrollContainer = document.getElementById('story-scroll-container');
  const strip = document.getElementById('story-slides-strip');
  const counter = document.getElementById('story-counter');
  const dots = document.querySelectorAll('.story-dot');
  if (!scrollContainer || !strip) return;

  const total = weddingData.galleryImages.length;
  if (total <= 1) return;


  let ticking = false;
  let lastActiveIdx = -1;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = scrollContainer.getBoundingClientRect();
        const maxScroll = scrollContainer.offsetHeight - window.innerHeight;

        if (maxScroll > 0) {
          // Progress goes strictly from 0 to 1
          const progress = Math.min(Math.max(-rect.top / maxScroll, 0), 1);

          // Translate the strip horizontally so images roll through the frame
          const translatePercent = progress * (total - 1) * 100;
          strip.style.transform = `translate3d(${-translatePercent}%, 0, 0)`;

          // Compute currently active image index
          const activeIdx = Math.min(Math.round(progress * (total - 1)), total - 1);

          if (activeIdx !== lastActiveIdx) {
            lastActiveIdx = activeIdx;

            // Update counter (e.g. 01 / 05)
            if (counter) {
              const currentNum = String(activeIdx + 1).padStart(2, '0');
              const totalNum = String(total).padStart(2, '0');
              counter.textContent = `${currentNum} / ${totalNum}`;
            }

            // Update dots
            dots.forEach((dot, i) => {
              dot.classList.toggle('active', i === activeIdx);
            });
          }
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Allow clicking dots to jump directly to that moment
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
      if (isNaN(targetIdx)) return;

      const maxScroll = scrollContainer.offsetHeight - window.innerHeight;
      const targetProgress = targetIdx / (total - 1);
      const containerTop = scrollContainer.getBoundingClientRect().top + window.scrollY;
      const targetScroll = containerTop + (targetProgress * maxScroll);

      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });
  });

  // Touch gesture support on mobile: swiping moves through images
  let touchStartX = 0;
  let touchStartY = 0;
  let isSwiping = false;

  strip.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isSwiping = true;
    }
  }, { passive: true });

  strip.addEventListener('touchmove', (e) => {
    if (!isSwiping || e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = touchStartX - currentX;
    const deltaY = Math.abs(touchStartY - currentY);

    if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > 10) {
      window.scrollBy({ top: deltaX * 1.2, behavior: 'auto' });
      touchStartX = currentX;
    }
  }, { passive: true });

  strip.addEventListener('touchend', () => {
    isSwiping = false;
  }, { passive: true });
}
