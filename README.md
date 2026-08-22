# AVA ANCHOR HOUSE Apartments — Website

A lightweight static website (HTML + CSS + JavaScript, with no build tools or
framework required) for advertising AVA ANCHOR HOUSE shared-room rentals in
Koronadal City, South Cotabato. The website content is currently written in
English.

## Project Files

```
Apartment/
├── index.html   # Page content, sections, image references, and form markup
├── style.css    # Layout, colors, typography, responsive behavior
├── script.js    # Mobile menu, scroll header, lightbox, and form handling
├── photos/      # Local gallery and hero images
└── README.md    # Project documentation
```

Keep the files and the `photos/` folder together. The HTML uses relative paths
for the stylesheet, JavaScript file, and local images.

## Current Website Content

The current page includes:

| Content | Location |
|---|---|
| Property name and hero content | `.logo-text`, `.hero-title`, `.hero-tagline`, and `#top` |
| Room description and facts | `#tungkol` |
| Amenities | `#amenities`, using `.amenity` list items |
| Gallery images and captions | `#gallery` |
| Address and nearby landmarks | `#lokasyon` |
| Rental prices and inclusions | `#presyo` |
| Phone, WhatsApp, Messenger, and email | `#kontak` and `.contact-methods` |

The current rental information is a shared room for up to 4 people, with an
18 sqm ground-floor room, private bathroom, common kitchen, study area, CCTV,
Vendo WiFi, and parking. The listed rate is PHP 1,500 per month or PHP 1,500
per night for short-term stays.

### Local Images

The current HTML references these local files:

- `photos/BG-darkened.jpg` - hero background
- `photos/CommonArea.png` - common area gallery image
- `photos/Kusina.png` - kitchen gallery image

The bedroom, bathroom, and balcony gallery items still use placeholder image
URLs. Replace those `src` values in `index.html` when the final photos are
available. Keep image filenames and letter casing consistent, especially when
deploying to a case-sensitive host.

## Contact Form Setup

The form in `#kontak` uses [Formspree](https://formspree.io), which can send
inquiry messages from this static website without a custom backend:

1. Create an account at [formspree.io](https://formspree.io).
2. Create a form and set the email address that should receive inquiries.
3. Copy the endpoint, for example `https://formspree.io/f/abcd1234`.
4. Replace `PALITAN_NG_FORM_ID` in the `action` attribute of the form in
   `index.html`.

Until the placeholder endpoint is replaced, `script.js` shows a setup reminder
instead of submitting the form. The Call, WhatsApp, Messenger, and Email links
remain available independently.

## Test Before Deployment

Open `index.html` in a browser and verify the following:

1. The hero image at local gallery images load correctly.
2. The layout remains readable at desktop and mobile widths.
3. Gallery images open in the lightbox and close with the close button or
   Escape key.
4. The mobile menu opens and closes correctly.
5. The contact form shows the expected setup, success, or error status.

## Deployment

### Option A - Netlify

1. Sign up at [netlify.com](https://www.netlify.com).
2. Choose **Add new site -> Deploy manually**.
3. Drag and drop the entire `Apartment` folder, including `photos/`.
4. Netlify will provide a shareable `netlify.app` URL.

Upload the updated folder again whenever you change the content or images.

### Option B - GitHub Pages

1. Create a repository at [github.com](https://github.com).
2. Upload `index.html`, `style.css`, `script.js`, and the complete `photos/`
   folder.
3. Open **Settings -> Pages**.
4. Select the `main` branch and save.
5. GitHub Pages will provide a URL such as
   `https://username.github.io/apartment-site/`.

### Custom Domain

You can connect a purchased domain through Netlify's **Domain settings -> Add
custom domain** or GitHub Pages' **Settings -> Pages -> Custom domain**.

## Frequently Asked Questions

**Why is an image not loading?**
Check the filename, extension, capitalization, and relative path in the
corresponding `src` attribute. The image must be inside the `photos/` folder.

**Does this include an Airbnb-style booking calendar?**
No. This is currently an advertising and inquiry website. Real-time booking,
availability, and payments would require a backend or a third-party booking
service.
