import { startBackgroundMusic } from './BackgroundMusic.js';

/**
 * Preloader Component with Brittany Signature Script Handwriting Animation
 * Background: /assets/preloder.png
 * Center Writings:
 *   Geethu
 *   &
 *   Abhin
 */

export function renderPreloader() {
  return `
    <div id="wedding-preloader" class="wedding-preloader" role="dialog" aria-modal="true" aria-label="Wedding Invitation Preloader">
      <!-- Fullscreen Background Image with Ken Burns effect and cinematic vignette -->
      <div class="preloader-bg-media">
        <img src="/assets/preloder.png" alt="Geethu &amp; Abhin" class="preloader-bg-img" />
        <div class="preloader-overlay"></div>
      </div>

      <!-- Floating subtle gold stardust / petals -->
      <div class="preloader-particles" aria-hidden="true">
        <span class="preloader-particle p1"></span>
        <span class="preloader-particle p2"></span>
        <span class="preloader-particle p3"></span>
        <span class="preloader-particle p4"></span>
        <span class="preloader-particle p5"></span>
        <span class="preloader-particle p6"></span>
      </div>

      <!-- Initial Gate: Tap to Open Button directly on Background Image -->
      <div class="preloader-gate-wrapper" id="preloader-gate-wrapper">
        <div class="preloader-gate-content">
          <div class="preloader-gate-badge">
            <span class="preloader-tagline">WEDDING INVITATION</span>
          </div>
          <button class="preloader-open-pill-btn ready-pulse" id="preloader-enter-btn" aria-label="Tap to Open Invitation">
            <span>Tap to Open</span>
          </button>
        </div>
      </div>

      <!-- Center Content: Auspicious Monogram + Handwriting Script (Reveals after tap) -->
      <div class="preloader-content" id="preloader-content-box">
        <!-- Top Inscription -->
        <div class="preloader-top-badge">
          <span class="preloader-tagline">WEDDING INVITATION</span>
        </div>

        <!-- Brittany Signature Script Handwriting Animation Container -->
        <div class="preloader-script-container" id="preloader-script-box">
          <!-- Line 1: Geethu -->
          <div class="script-line script-geethu script-arunima script-rahul">
            <span class="script-text">Geethu</span>
            <span class="calligraphy-pen-spark" id="spark-geethu"></span>
          </div>

          <!-- Line 2: & Ampersand -->
          <div class="script-line script-ampersand">
            <span class="script-text">&amp;</span>
          </div>

          <!-- Line 3: Abhin -->
          <div class="script-line script-abhin script-abhijith script-anjana">
            <span class="script-text">Abhin</span>
            <span class="calligraphy-pen-spark" id="spark-abhin"></span>
          </div>

          <!-- Calligraphy Flourish Line underneath -->
          <div class="flourish-wrap">
            <svg class="calligraphy-flourish" viewBox="0 0 280 26" fill="none" preserveAspectRatio="none">
              <path class="flourish-path" d="M14,14 C65,4 105,6 140,16 C175,24 215,10 266,8" stroke="url(#goldFlourishGrad)" stroke-width="2.2" stroke-linecap="round" />
              <defs>
                <linearGradient id="goldFlourishGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="rgba(245, 230, 180, 0.1)" />
                  <stop offset="35%" stop-color="rgba(255, 235, 170, 0.95)" />
                  <stop offset="70%" stop-color="rgba(218, 165, 32, 0.95)" />
                  <stop offset="100%" stop-color="rgba(245, 230, 180, 0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <!-- Subtitle & Date -->
        <div class="preloader-subtext">
          <p class="preloader-date">26 . NOVEMBER . 2026</p>
        </div>
      </div>
    </div>
  `;
}

export function initPreloader() {
  const preloader = document.getElementById('wedding-preloader');
  if (!preloader) return;

  // Lock body scroll while preloader is visible
  document.body.classList.add('preloader-active');

  // Pre-load font immediately in background
  if (document.fonts && document.fonts.load) {
    document.fonts.load('48px "Brittany Signature"').catch(() => {});
  }

  let stage = 'waiting'; // 'waiting' | 'revealing' | 'dismissed'
  let autoDismissTimer = null;

  function handleTapToOpen() {
    if (stage !== 'waiting') {
      // If user taps again while writings are displaying, immediately open the invitation
      if (stage === 'revealing') {
        dismissPreloader();
      }
      return;
    }

    stage = 'revealing';

    // 1. User interaction starts background audio immediately
    startBackgroundMusic();

    // 2. Start handwriting calligraphy animation ("Geethu & Abhin")
    preloader.classList.add('preloader-animating');

    // 3. Golden shimmer sweep on signature after writing finishes (5.0s)
    setTimeout(() => {
      const scriptBox = document.getElementById('preloader-script-box');
      if (scriptBox) {
        scriptBox.classList.add('shimmer-active');
        scriptBox.querySelectorAll('.script-text').forEach((el) => {
          el.style.clipPath = 'none';
          el.style.opacity = '1';
          el.style.visibility = 'visible';
        });
      }
    }, 5000);

    // 4. Smoothly reveal the invitation after enjoying the handwriting & melody (7.0s)
    autoDismissTimer = setTimeout(() => {
      dismissPreloader();
    }, 7000);
  }

  function dismissPreloader() {
    if (stage === 'dismissed') return;
    stage = 'dismissed';
    if (autoDismissTimer) clearTimeout(autoDismissTimer);

    // Ensure music is active
    startBackgroundMusic();

    preloader.classList.add('preloader-fade-out');
    document.body.classList.remove('preloader-active');

    // Matches the 1.8s slow, silky dissolve transition
    setTimeout(() => {
      preloader.style.display = 'none';
      preloader.setAttribute('aria-hidden', 'true');
    }, 1850);
  }

  // Only clicking the "Tap to Open" button starts the writings & opens the invitation
  const enterBtn = document.getElementById('preloader-enter-btn');
  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleTapToOpen();
    });
  }

  // If user taps while writings are playing, allow skipping directly to the invitation
  preloader.addEventListener('click', () => {
    if (stage === 'revealing') {
      dismissPreloader();
    }
  });

  // Also support keyboard Enter/Space/Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      handleTapToOpen();
    }
  });
}
