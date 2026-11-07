import { weddingData } from '../data/wedding-data.js';

export function renderWeddingDetails() {
  const { texts, event, reception, groomReception } = weddingData;

  // Google Calendar URL generator for Wedding
  const weddingStart = "20261126T013000Z"; // 7:00 AM IST = 01:30 UTC
  const weddingEnd = "20261126T023000Z";   // 8:00 AM IST = 02:30 UTC
  const weddingGCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.googleCalendarTitle)}&dates=${weddingStart}/${weddingEnd}&details=${encodeURIComponent(event.googleCalendarDescription)}&location=${encodeURIComponent(event.venueName + ', ' + event.city)}`;

  // Google Calendar URL generator for Bride's Reception
  const receptionStart = "20261122T123000Z"; // 6:00 PM IST = 12:30 UTC
  const receptionEnd = "20261122T163000Z";   // 10:00 PM IST = 16:30 UTC
  const receptionGCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(reception.googleCalendarTitle)}&dates=${receptionStart}/${receptionEnd}&details=${encodeURIComponent(reception.googleCalendarDescription)}&location=${encodeURIComponent(reception.venueName + ', ' + reception.venueAddress + ', ' + reception.city)}`;

  // Google Calendar URL generator for Groom's Reception
  const groomReceptionData = groomReception || {
    label: "Wedding Reception",
    traditionalDate: "Groom side Reception",
    dateDisplay: "Saturday, 28 November 2026",
    timeDisplay: "3:30 PM – 8:30 PM",
    venueName: "Royal Convention Centre",
    venueAddress: "Neduvathoor",
    city: "Kottarakara, Kerala",
    googleMapsUrl: "https://maps.google.com/?q=Royal+Convention+Centre,+Neduvathoor,+Kottarakara,+Kerala",
    googleCalendarTitle: "Groom side Reception of Geethu & Abhin",
    googleCalendarDescription: "You are cordially invited with family to celebrate the Groom side Reception of Geethu Girish Babu & Abhin A S at Royal Convention Centre, Neduvathoor, Kottarakara, Kerala."
  };
  const groomReceptionStart = "20261128T100000Z"; // 3:30 PM IST = 10:00 UTC
  const groomReceptionEnd = "20261128T150000Z";   // 8:30 PM IST = 15:00 UTC
  const groomGCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(groomReceptionData.googleCalendarTitle)}&dates=${groomReceptionStart}/${groomReceptionEnd}&details=${encodeURIComponent(groomReceptionData.googleCalendarDescription)}&location=${encodeURIComponent(groomReceptionData.venueName + ', ' + groomReceptionData.venueAddress + ', ' + groomReceptionData.city)}`;

  return `
    <section id="invitation-details" class="invitation-details-section">
      <!-- SECTION 2: INVITATION HEADER -->
      <div class="invitation-section-header reveal-on-scroll">
        <h2 class="invitation-title-en">${texts.invitationHeading || 'Cordially Inviting You'}</h2>
        <p class="invitation-subtitle-en">${texts.invitationSubtitleEng}</p>
        <div class="section-divider">
          <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="280" height="28" />
        </div>
      </div>

      <!-- EVENTS CARDS GRID -->
      <div class="events-cards-grid">
        <!-- CARD 1: WEDDING CEREMONY (MUHURTHAM) -->
        <div class="kasavu-card wedding-details-card reveal-on-scroll">
          <div class="event-type-badge">Auspicious Ceremony</div>
          <div class="details-muhurtham-label">${event.muhurthamLabel || 'Wedding Ceremony'}</div>
          ${event.traditionalDate ? `<div class="details-traditional-date">${event.traditionalDate}</div>` : ''}

          <div class="details-grid">
            <!-- Date Item -->
            <div class="details-item">
              <span class="details-label">Date</span>
              <span class="details-val-primary">${event.dateDisplay}</span>
            </div>

            <!-- Time Item -->
            <div class="details-item">
              <span class="details-label">Auspicious Muhurtham</span>
              <span class="details-val-primary">${event.timeDisplay}</span>
              <span class="details-val-secondary">${event.muhurthamTimeWindow}</span>
            </div>
          </div>

          <!-- Venue Item -->
          <div class="details-venue-box">
            <span class="details-label">Sacred Venue</span>
            <div class="details-venue-name">${event.venueName}</div>
            <div class="details-venue-city">${event.city}</div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons-group">
            <a href="${event.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold" id="btn-view-wedding-location">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>View Location</span>
            </a>

            <a href="${weddingGCalUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline-gold" id="btn-add-wedding-calendar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Add to Calendar</span>
            </a>
          </div>
        </div>

        <!-- CARD 2: BRIDE SIDE PRE-WEDDING CELEBRATION -->
        <div class="kasavu-card wedding-details-card reception-details-card reveal-on-scroll">
          <div class="event-type-badge reception-badge">Celebration Evening</div>
          <div class="details-muhurtham-label">${reception.label || 'Wedding Reception'}</div>
          <div class="details-traditional-date">${reception.traditionalDate || 'Pre-Wedding Celebration from Bride side'}</div>

          <div class="details-grid">
            <!-- Date Item -->
            <div class="details-item">
              <span class="details-label">Date</span>
              <span class="details-val-primary">${reception.dateDisplay}</span>
            </div>

            <!-- Time Item -->
            <div class="details-item">
              <span class="details-label">Reception Time</span>
              <span class="details-val-primary">${reception.timeDisplay}</span>
              <span class="details-val-secondary">Dinner &amp; Gathering</span>
            </div>
          </div>

          <!-- Venue Item -->
          <div class="details-venue-box">
            <span class="details-label">Reception Venue</span>
            <div class="details-venue-name">${reception.venueName}</div>
            <div class="details-venue-city">${reception.venueAddress}, ${reception.city}</div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons-group">
            <a href="${reception.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold" id="btn-view-reception-location">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>View Location</span>
            </a>

            <a href="${receptionGCalUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline-gold" id="btn-add-reception-calendar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Add to Calendar</span>
            </a>
          </div>
        </div>

        <!-- CARD 3: GROOM SIDE RECEPTION -->
        <div class="kasavu-card wedding-details-card reception-details-card reveal-on-scroll">
          <div class="event-type-badge reception-badge">Celebration Evening</div>
          <div class="details-muhurtham-label">${groomReceptionData.label || 'Wedding Reception'}</div>
          <div class="details-traditional-date">${groomReceptionData.traditionalDate || 'Groom side Reception'}</div>

          <div class="details-grid">
            <!-- Date Item -->
            <div class="details-item">
              <span class="details-label">Date</span>
              <span class="details-val-primary">${groomReceptionData.dateDisplay}</span>
            </div>

            <!-- Time Item -->
            <div class="details-item">
              <span class="details-label">Reception Time</span>
              <span class="details-val-primary">${groomReceptionData.timeDisplay}</span>
              <span class="details-val-secondary">Dinner &amp; Gathering</span>
            </div>
          </div>

          <!-- Venue Item -->
          <div class="details-venue-box">
            <span class="details-label">Reception Venue</span>
            <div class="details-venue-name">${groomReceptionData.venueName}</div>
            <div class="details-venue-city">${groomReceptionData.venueAddress}, ${groomReceptionData.city}</div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons-group">
            <a href="${groomReceptionData.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold" id="btn-view-groom-reception-location">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>View Location</span>
            </a>

            <a href="${groomGCalUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline-gold" id="btn-add-groom-reception-calendar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Add to Calendar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

