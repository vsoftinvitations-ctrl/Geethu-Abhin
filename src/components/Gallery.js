import { weddingData } from '../data/wedding-data.js';

/**
 * Our Story — Scroll-Driven Horizontal Story Gallery
 * Inspired by cinematic wedding journals (e.g. Photopedia Weddings):
 * When the user scrolls down, the sticky section locks in view while
 * the story cards smoothly slide horizontally from right to left.
 * Once all cards are explored, vertical page scrolling seamlessly resumes.
 */
export function renderGallery() {
  const { galleryImages } = weddingData;

  const cardsHtml = galleryImages
    .map(
      (img, idx) => `
      <article class="story-journal-card" data-index="${idx}" role="button" tabindex="0" aria-label="${img.title} - ${img.tagline}">
        <div class="story-card-image-wrap">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" class="story-card-img" />
          <div class="story-card-gradient"></div>
        </div>

        <!-- Top Header: Location Pill & Date Badge -->
        <div class="story-card-top">
          <span class="story-card-pill">${img.location}</span>
          <span class="story-card-date">${img.date}</span>
        </div>

        <!-- Bottom Content: Tagline, Title & Enlarge Icon -->
        <div class="story-card-bottom">
          <div class="story-card-meta">
            <span class="story-card-tagline">${img.tagline}</span>
            <h3 class="story-card-title">${img.title}</h3>
          </div>
          <button class="story-card-zoom-btn" data-index="${idx}" aria-label="Enlarge photo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
        </div>
      </article>
    `
    )
    .join('');

  return `
    <section id="photo-gallery" class="story-scroll-section">
      <!-- Tall Scroll Container for Sticky Horizontal Scroll -->
      <div class="story-scroll-container" id="story-scroll-container">
        <div class="story-sticky-viewport" id="story-sticky-viewport">
          
          <!-- Narrative Header -->
          <div class="story-header-wrap">
            <div class="story-header-left">
              <span class="story-eyebrow">NARRATIVE JOURNALS</span>
              <h2 class="story-main-title">Our Story &amp; Cherished Moments</h2>
              <div class="story-scroll-hint">
                <span class="story-hint-dot"></span>
                <span class="story-hint-text">[Scroll down to slide horizontally]</span>
              </div>
            </div>

            <!-- Scroll Progress Indicator -->
            <div class="story-progress-wrap" aria-hidden="true">
              <div class="story-progress-bar" id="story-progress-bar"></div>
            </div>
          </div>

          <!-- Horizontal Cards Sliding Track -->
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
  const progressBar = document.getElementById('story-progress-bar');
  if (!scrollContainer || !track) return;

  const cards = track.querySelectorAll('.story-journal-card');

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

  // Calculate dynamic container height based on total horizontal track travel
  function updateScrollDistance() {
    const trackWidth = track.scrollWidth;
    const windowWidth = window.innerWidth;
    const maxTranslate = Math.max(0, trackWidth - windowWidth + 120);

    // Give adequate vertical scroll height proportional to horizontal distance
    const extraHeight = Math.max(maxTranslate * 1.15, window.innerHeight * 1.5);
    scrollContainer.style.height = `${window.innerHeight + extraHeight}px`;
    
    // Trigger scroll update immediately
    onScroll();
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = scrollContainer.getBoundingClientRect();
        const maxScroll = scrollContainer.offsetHeight - window.innerHeight;

        if (maxScroll > 0) {
          // Progress from 0 (entry) to 1 (all cards traversed)
          const progress = Math.min(Math.max(-rect.top / maxScroll, 0), 1);

          const trackWidth = track.scrollWidth;
          const windowWidth = window.innerWidth;
          const maxTranslate = Math.max(0, trackWidth - windowWidth + 120);
          const currentX = progress * maxTranslate;

          track.style.transform = `translate3d(${-currentX}px, 0, 0)`;

          if (progressBar) {
            progressBar.style.width = `${progress * 100}%`;
          }
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateScrollDistance);

  // Mobile touch swipe support: swiping horizontally on track scrolls page vertically
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

  // Initialize after layout / images load
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
