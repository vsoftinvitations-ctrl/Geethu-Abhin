import { weddingData } from '../data/wedding-data.js';

export function renderLocationSection() {
  const { texts, event, reception } = weddingData;

  return `
    <section id="location-section" class="location-section">
      <div class="location-section-header reveal-on-scroll">
        <h2 class="location-title-en">${texts.locationHeading || 'Locations & Directions'}</h2>
        <p class="location-subtitle-en">Join us to celebrate in Guruvayur and Kozhikode</p>
        <div class="section-divider" style="margin-top: 0.75rem; margin-bottom: 2rem;">
          <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="240" height="24" />
        </div>
      </div>

      <!-- Mobile Swipe Notification -->
      <div class="location-mobile-controls" aria-label="Venue switcher">
        <div class="location-swipe-hint" id="location-swipe-hint" role="status" aria-live="polite" title="Tap or swipe to switch venue">
          <span class="swipe-hint-icon-left" id="swipe-icon-left" style="display: none;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </span>
          <span class="swipe-hint-text" id="location-swipe-text">Swipe left for Reception Venue</span>
          <span class="swipe-hint-icon-right" id="swipe-icon-right">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
        </div>
      </div>

      <!-- Slider Container (horizontal scroll-snap on mobile, stack on desktop) -->
      <div class="locations-slider-container" id="locations-slider-container">
        <div class="locations-dual-grid" id="locations-dual-grid">
          <!-- Location 1: Guruvayoor Temple (Wedding Ceremony) -->
          <div class="kasavu-card location-card reveal-on-scroll" data-venue-index="0" id="venue-card-0">
            <div class="location-card-grid">
              <div class="location-media-col">
                <div class="location-media-bg-blur ceremony-blur" style="background-image: url('${event.venueImage || '/assets/guruvayoor.png'}');"></div>
                <picture class="location-picture-frame">
                  <source media="(max-width: 768px)" srcset="${event.venueImageMobile || '/assets/guru.png'}" />
                  <img
                    src="${event.venueImage || '/assets/guruvayoor.png'}"
                    alt="Wedding Venue - ${event.venueName}"
                    class="location-venue-img"
                    loading="lazy"
                  />
                </picture>
                <div class="location-media-tag">Ceremony</div>
              </div>

              <div class="location-details-col">
                <div class="location-icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>

                <div class="location-badge">Wedding Ceremony Venue</div>
                <div class="location-venue-name">${event.venueName}</div>
                <div class="location-venue-detail">
                  ${event.venueAddress},
                  <br />
                  ${event.city}
                </div>

                <a href="${event.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold" id="btn-get-wedding-directions">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Location 2: Snehanjali Community Hall (Reception) -->
          <div class="kasavu-card location-card reveal-on-scroll" data-venue-index="1" id="venue-card-1">
            <div class="location-card-grid">
              <div class="location-media-col">
                <div class="location-media-bg-blur" style="background-image: url('/assets/venue-stage.jpg');"></div>
                <img
                  src="/assets/venue-stage.jpg"
                  alt="Reception Venue - ${reception.venueName}"
                  class="location-venue-img"
                  loading="lazy"
                />
                <div class="location-media-tag reception-tag">Reception</div>
              </div>

              <div class="location-details-col">
                <div class="location-icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>

                <div class="location-badge reception-loc-badge">Reception Venue</div>
                <div class="location-venue-name">${reception.venueName}</div>
                <div class="location-venue-detail">
                  ${reception.venueAddress},
                  <br />
                  ${reception.city}
                </div>

                <a href="${reception.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold" id="btn-get-reception-directions">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initLocationSlider() {
  const container = document.getElementById('locations-slider-container');
  const swipeHint = document.getElementById('location-swipe-hint');
  const swipeText = document.getElementById('location-swipe-text');
  const iconLeft = document.getElementById('swipe-icon-left');
  const iconRight = document.getElementById('swipe-icon-right');
  const cards = document.querySelectorAll('.location-card[data-venue-index]');

  if (!container || cards.length < 2) return;

  let activeIndex = 0;

  function updateIndicator(index) {
    activeIndex = index;

    // Update swipe hint text and arrow direction
    if (swipeText) {
      if (activeIndex === 0) {
        swipeText.textContent = 'Swipe left for Reception Venue';
        if (iconLeft) iconLeft.style.display = 'none';
        if (iconRight) iconRight.style.display = 'inline-flex';
      } else {
        swipeText.textContent = 'Swipe right for Ceremony Venue';
        if (iconLeft) iconLeft.style.display = 'inline-flex';
        if (iconRight) iconRight.style.display = 'none';
      }
    }
  }

  function scrollToVenue(index, smooth = true) {
    const targetCard = cards[index];
    if (targetCard && container.scrollWidth > container.clientWidth) {
      const targetLeft = targetCard.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetLeft,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
    updateIndicator(index);
  }

  // Click on swipe hint notification toggles to the other venue
  if (swipeHint) {
    swipeHint.addEventListener('click', () => {
      const nextIdx = activeIndex === 0 ? 1 : 0;
      scrollToVenue(nextIdx, true);
    });
  }

  // Scroll listener to sync indicator when user swipes
  let scrollDebounce = null;
  container.addEventListener('scroll', () => {
    if (window.innerWidth > 768) return;
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
      const scrollPos = container.scrollLeft;
      const cardWidth = container.clientWidth;
      if (cardWidth <= 0) return;
      const newIndex = Math.round(scrollPos / cardWidth);
      if (newIndex >= 0 && newIndex < cards.length && newIndex !== activeIndex) {
        updateIndicator(newIndex);
      }
    }, 60);
  }, { passive: true });

  // Touch gesture support on mobile cards
  let touchStartX = 0;
  let touchStartY = 0;

  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1) {
      const diffX = touchStartX - e.changedTouches[0].clientX;
      const diffY = Math.abs(touchStartY - e.changedTouches[0].clientY);
      // Horizontal swipe threshold
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > diffY) {
        if (diffX > 0 && activeIndex === 0) {
          scrollToVenue(1, true);
        } else if (diffX < 0 && activeIndex === 1) {
          scrollToVenue(0, true);
        }
      }
    }
  }, { passive: true });
}
