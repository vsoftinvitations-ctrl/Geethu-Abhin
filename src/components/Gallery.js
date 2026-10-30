import { weddingData } from '../data/wedding-data.js';

/**
 * Our Story — Image Rolling During Scroll
 * Clean, seamless Kerala Kasavu wedding aesthetic (no dark box).
 * As the user scrolls down, the cards smoothly roll / slide horizontally
 * across the screen, then page scrolling naturally continues down to the next section.
 */
export function renderGallery() {
  const { galleryImages } = weddingData;

  const cardsHtml = galleryImages
    .map(
      (img, idx) => `
      <article class="kasavu-card story-photo-card" data-index="${idx}" role="button" tabindex="0" aria-label="${img.title} - ${img.tagline}">
        <div class="photo-mat-frame">
          <!-- 4 Delicate Gold Corner Photo Brackets -->
          <span class="photo-corner corner-tl"></span>
          <span class="photo-corner corner-tr"></span>
          <span class="photo-corner corner-bl"></span>
          <span class="photo-corner corner-br"></span>

          <img src="${img.src}" alt="${img.alt}" loading="lazy" class="story-card-img" />

          <div class="photo-hover-veil">
            <button class="photo-zoom-btn" data-index="${idx}" aria-label="Enlarge photo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="photo-card-meta">
          <span class="photo-chapter-badge">${img.tagline}</span>
          <h3 class="photo-title">${img.title}</h3>
        </div>
      </article>
    `
    )
    .join('');

  return `
    <section id="photo-gallery" class="story-scroll-section">
      <!-- Tall Scroll Container for Sticky Horizontal Rolling -->
      <div class="story-scroll-container" id="story-scroll-container">
        <div class="story-sticky-viewport" id="story-sticky-viewport">
          
          <!-- Section Header (Traditional Warm Ivory & Gold) -->
          <div class="story-header-wrap">
            <h2 class="gallery-section-title">OUR STORY</h2>
            <p class="gallery-subtitle">Moments captured along our path to forever</p>
            <div class="section-divider" style="margin: 0.4rem auto 0.8rem;">
              <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="260" height="26" />
            </div>
            <p class="story-scroll-hint">[Scroll down to slide moments]</p>
          </div>

          <!-- Horizontal Cards Rolling Track -->
          <div class="story-track-window" id="story-track-window">
            <div class="story-cards-track" id="story-cards-track">
              ${cardsHtml}
            </div>
          </div>

        </div>
      </div>

      <!-- Lightbox Modal for Full View -->
      <div class="lightbox-modal" id="gallery-lightbox" aria-hidden="true" role="dialog">
        <button class="lightbox-close-btn" id="lightbox-close" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-nav-btn lightbox-prev-btn" id="lightbox-prev" aria-label="Previous Photo">&#10094;</button>
        <button class="lightbox-nav-btn lightbox-next-btn" id="lightbox-next" aria-label="Next Photo">&#10095;</button>
        <div class="lightbox-content">
          <span class="lightbox-badge" id="lightbox-badge"></span>
          <img id="lightbox-img" src="" alt="Enlarged photo" />
          <div class="lightbox-caption" id="lightbox-caption"></div>
        </div>
      </div>
    </section>
  `;
}

export function initGalleryCarousel() {
  const scrollContainer = document.getElementById('story-scroll-container');
  const track = document.getElementById('story-cards-track');
  if (!scrollContainer || !track) return;

  const cards = track.querySelectorAll('.story-photo-card');

  // Lightbox elements
  const modal = document.getElementById('gallery-lightbox');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const modalBadge = document.getElementById('lightbox-badge');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let activeLightboxIndex = 0;
  const totalImages = weddingData.galleryImages.length;

  // Calculate container height dynamically based on track width
  function updateScrollDistance() {
    const trackWidth = track.scrollWidth;
    const windowWidth = window.innerWidth;
    const maxTranslate = Math.max(0, trackWidth - windowWidth + 140);

    // Vertical scroll distance proportional to horizontal distance
    const extraHeight = Math.max(maxTranslate * 1.05, window.innerHeight * 1.25);
    scrollContainer.style.height = `${window.innerHeight + extraHeight}px`;

    onScroll();
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = scrollContainer.getBoundingClientRect();
        const maxScroll = scrollContainer.offsetHeight - window.innerHeight;

        if (maxScroll > 0) {
          // Progress from 0 to 1
          const progress = Math.min(Math.max(-rect.top / maxScroll, 0), 1);

          const trackWidth = track.scrollWidth;
          const windowWidth = window.innerWidth;
          const maxTranslate = Math.max(0, trackWidth - windowWidth + 140);
          const currentX = progress * maxTranslate;

          track.style.transform = `translate3d(${-currentX}px, 0, 0)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateScrollDistance);

  // Mobile swipe gestures
  let touchStartX = 0;
  let touchStartY = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isSwiping = true;
    }
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isSwiping || e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = touchStartX - currentX;
    const deltaY = Math.abs(touchStartY - currentY);

    if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > 8) {
      window.scrollBy({ top: deltaX * 0.9, behavior: 'auto' });
      touchStartX = currentX;
    }
  }, { passive: true });

  track.addEventListener('touchend', () => {
    isSwiping = false;
  }, { passive: true });

  setTimeout(updateScrollDistance, 100);
  window.addEventListener('load', updateScrollDistance);

  // Lightbox interaction
  function updateLightbox(idx) {
    if (idx < 0) idx = totalImages - 1;
    if (idx >= totalImages) idx = 0;
    activeLightboxIndex = idx;

    const item = weddingData.galleryImages[activeLightboxIndex];
    if (!item) return;

    modalImg.src = item.src;
    modalImg.alt = item.alt;
    if (modalCaption) modalCaption.textContent = `${item.tagline} — ${item.title}`;
    if (modalBadge) modalBadge.textContent = item.location || '';
  }

  function openLightbox(idx) {
    updateLightbox(idx);
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cards.forEach((card, idx) => {
    card.addEventListener('click', () => openLightbox(idx));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(activeLightboxIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(activeLightboxIndex + 1);
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') updateLightbox(activeLightboxIndex - 1);
    if (e.key === 'ArrowRight') updateLightbox(activeLightboxIndex + 1);
  });
}
