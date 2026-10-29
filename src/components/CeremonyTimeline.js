import { weddingData } from '../data/wedding-data.js';

export function renderCeremonyTimeline() {
  const { ceremonies } = weddingData;

  const timelineItems = ceremonies
    .map(
      item => `
      <div class="kasavu-card timeline-card-item reveal-on-scroll">
        <div class="timeline-node-pin"></div>
        <div class="timeline-meta-row">
          ${item.dateBadge ? `<span class="timeline-date-badge">${item.dateBadge}</span>` : ''}
          <span class="timeline-time-badge">${item.time}</span>
        </div>
        <h3 class="timeline-card-title-en">${item.englishTitle}</h3>
        <p class="timeline-card-desc">${item.description}</p>
      </div>
    `
    )
    .join('');

  return `
    <section id="ceremony-timeline" class="ceremony-section">
      <h2 class="timeline-section-title reveal-on-scroll">Celebration Schedule</h2>
      <p class="timeline-subtitle reveal-on-scroll">Auspicious Dates, Timings &amp; Ceremonies</p>
      <div class="section-divider reveal-on-scroll">
        <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="280" height="28" />
      </div>

      <div class="timeline-container">
        ${timelineItems}
      </div>
    </section>
  `;
}

