/* =============================================================
   BAHAY AMIHAN APARTMENTS — SCRIPT
   4 lang na trabaho nito: (1) mobile menu, (2) shadow ng nav
   pag nag-scroll, (3) gallery lightbox, (4) pag-send ng contact
   form. Hindi mo kailangan hawakan ito kung ayaw mo — gumagana
   na ito out of the box.
============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. MOBILE MENU TOGGLE ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Isara ang menu pag pumili ng link (mas maganda sa mobile UX)
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 2. NAV BACKGROUND ON SCROLL ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 3. GALLERY LIGHTBOX ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = item.dataset.caption || '';
      lightbox.hidden = false;
    });
  });

  const closeLightbox = () => { lightbox.hidden = true; lightboxImg.src = ''; };
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  /* ---------- 4. CONTACT FORM (Formspree) ----------
     Tingnan ang README.md kung paano kumuha ng sarili mong
     Formspree form ID. Hanggat hindi pa ito napapalitan,
     hindi pa aktwal na maipapadala ang mensahe, pero hindi
     naman ito mag-e-error sa user — may babala lang na dapat
     i-configure muna ito.
  ---------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.action.includes('PALITAN_NG_FORM_ID')) {
      status.textContent = 'Paalala: i-configure muna ang Formspree form ID (tingnan ang README.md) bago gumana ang form na ito.';
      return;
    }

    status.textContent = 'Ipinapadala ang mensahe...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = 'Salamat! Naipadala na ang inquiry mo — babalikan ka namin agad.';
        form.reset();
      } else {
        status.textContent = 'May problema sa pagpadala. Subukan ulit o tumawag/mag-message na lang.';
      }
    } catch (err) {
      status.textContent = 'Walang koneksyon sa internet. Subukan ulit.';
    }
  });

  /* ---------- 5. AUTO-UPDATE FOOTER YEAR ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
