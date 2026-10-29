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

      <div class="locations-dual-grid">
        <!-- Location 1: Guruvayoor Temple (Wedding Ceremony) -->
        <div class="kasavu-card location-card reveal-on-scroll">
          <div class="location-card-grid">
            <div class="location-media-col">
              <img
                src="${event.venueImage || '/assets/guruvayoor.png'}"
                alt="Wedding Venue - ${event.venueName}"
                class="location-venue-img"
                loading="lazy"
              />
            </div>

            <div class="location-details-col">
              <div class="location-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
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
        <div class="kasavu-card location-card reveal-on-scroll">
          <div class="location-card-grid">
            <div class="location-media-col">
              <img
                src="/assets/venue-stage.jpg"
                alt="Reception Venue - ${reception.venueName}"
                class="location-venue-img"
                loading="lazy"
              />
            </div>

            <div class="location-details-col">
              <div class="location-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
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
    </section>
  `;
}

