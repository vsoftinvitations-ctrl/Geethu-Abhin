import { weddingData } from '../data/wedding-data.js';

/**
 * Friends & Shared Circle Invitation Component
 * Tailored for couples who are friends marrying each other,
 * inviting their mutual friend group with warmth from both bride's and groom's sides.
 */
export function renderFriendsInviteSection() {
  const { friendsInvite } = weddingData;
  if (!friendsInvite) return '';

  return `
    <section id="friends-invitation" class="friends-invite-section">
      <div class="kasavu-card friends-invite-card reveal-on-scroll">
        <!-- Badge -->
        <div class="friends-invite-badge-wrap">
          <span class="friends-invite-badge">${friendsInvite.badge}</span>
        </div>

        <!-- Section Main Title -->
        <h2 class="friends-invite-title">${friendsInvite.heading}</h2>
        <p class="friends-invite-subtitle">${friendsInvite.subtitle}</p>

        <div class="section-divider" style="margin: 0.75rem auto 1.75rem;">
          <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="240" height="24" />
        </div>

        <!-- Friendship Journey Quote -->
        <p class="friends-invite-quote">${friendsInvite.quote}</p>

        <!-- Two Columns: Bride Side & Groom Side Invitation Message -->
        <div class="friends-dual-grid">
          <!-- Bride's Side Column -->
          <div class="friend-side-box bride-side-box reveal-on-scroll reveal-delay-1">
            <div class="friend-side-header">
              <span class="friend-side-tag bride-tag">${friendsInvite.brideNote.side}</span>
              <h3 class="friend-side-title">${friendsInvite.brideNote.title}</h3>
            </div>
            <p class="friend-side-message">"${friendsInvite.brideNote.message}"</p>
            <div class="friend-side-sign">${friendsInvite.brideNote.sign}</div>
          </div>

          <!-- Lifelong Bonds Bridge -->
          <div class="friends-bridge-badge reveal-on-scroll">
            <span class="friends-bridge-icon">🤍</span>
            <span class="friends-bridge-text">Lifelong Bonds</span>
          </div>

          <!-- Groom's Side Column -->
          <div class="friend-side-box groom-side-box reveal-on-scroll reveal-delay-2">
            <div class="friend-side-header">
              <span class="friend-side-tag groom-tag">${friendsInvite.groomNote.side}</span>
              <h3 class="friend-side-title">${friendsInvite.groomNote.title}</h3>
            </div>
            <p class="friend-side-message">"${friendsInvite.groomNote.message}"</p>
            <div class="friend-side-sign">${friendsInvite.groomNote.sign}</div>
          </div>
        </div>

        <!-- Joint Call to Action / Mutual Note -->
        <div class="friends-joint-banner reveal-on-scroll">
          <p class="joint-banner-text">${friendsInvite.jointNote}</p>
        </div>
      </div>
    </section>
  `;
}
