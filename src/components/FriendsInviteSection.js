import { weddingData } from '../data/wedding-data.js';

/**
 * Family & Friends Invitation Component
 * Unified single invitation from both bride's and groom's sides,
 * inviting family and friends together and signed off as Geethu — Abhin.
 */
export function renderFriendsInviteSection() {
  const { friendsInvite } = weddingData;
  if (!friendsInvite) return '';

  const note = friendsInvite.note || {};

  return `
    <section id="friends-invitation" class="friends-invite-section">
      <div class="kasavu-card friends-invite-card reveal-on-scroll">
        <!-- Friends Photo Shade / Watermark Backdrop -->
        <div class="friends-shade-backdrop" aria-hidden="true">
          <img src="/assets/frnd.png" alt="" class="friends-shade-img" loading="lazy" />
          <div class="friends-shade-overlay"></div>
        </div>

        <div class="friends-invite-content">
          <!-- Section Main Title -->
          <h2 class="friends-invite-title">${friendsInvite.heading}</h2>
          <p class="friends-invite-subtitle">${friendsInvite.subtitle}</p>

          <div class="section-divider" style="margin: 0.75rem auto 1.75rem;">
            <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="240" height="24" />
          </div>

          <!-- Single Unified Invitation Card From Both Sides -->
          <div class="friend-unified-box reveal-on-scroll">
            <div class="friend-unified-header">
              <span class="friend-unified-tag">${note.tag || 'With Love From Both Sides'}</span>
              <h3 class="friend-unified-title">${note.title || 'Cordially Inviting You With Family'}</h3>
            </div>
            
            <p class="friend-unified-message">"${note.message || ''}"</p>

            <div class="friend-unified-divider" aria-hidden="true">
              <span class="friend-divider-line"></span>
              <span class="friend-divider-icon">🤍</span>
              <span class="friend-divider-line"></span>
            </div>

            <div class="friend-unified-sign-block">
              <span class="friend-sign-tag">With Warm Love &amp; Regards,</span>
              <div class="friend-unified-names">${note.sign || 'Geethu — Abhin'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
