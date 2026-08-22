# Bahay Amihan Apartments — Website

Simpleng 3-file na website (HTML + CSS + JS, walang build tools/framework
kailangan) para i-advertise ang apartment unit para sa upa o bookingan.

## 📁 Mga File

```
apartment-site/
├── index.html   → nilalaman ng buong page (text, larawan, mga section)
├── style.css    → hitsura/disenyo (kulay, font, spacing, layout)
├── script.js    → mga gumagalaw na parte (mobile menu, gallery, contact form)
└── README.md    → ito
```

Kailangan silang **magkasama sa iisang folder** dahil magkakaugnay sila
(tinatawag ni `index.html` ang `style.css` at `script.js` gamit ang
relative path).

## ✏️ Ano ang dapat palitan

Buksan ang `index.html` sa isang text/code editor (VS Code, Notepad++, etc.)
Hanapin ang mga komentong may `✏️ PALITAN` — doon nakatakda ang mga
sumusunod na kailangang i-edit:

| Bagay | Nasaan sa index.html |
|---|---|
| Pangalan ng apartment | `.logo-text`, `<h1 class="hero-title">`, footer |
| Lungsod/probinsya, tagline | Hero section (`#top`) |
| Presyo | Hero keytag + `#presyo` section |
| Deskripsyon ng unit, bilang ng kwarto/CR/sqm | `#tungkol` section |
| Amenities | `#amenities` — pwede magdagdag/magbawas ng `<li class="amenity">` |
| Mga larawan | `#gallery` — palitan ang `src="https://placehold.co/..."` ng sarili mong larawan (hal. `src="images/sala.jpg"`) |
| Address at landmarks | `#lokasyon` |
| Numero, email, Messenger link | `#kontak` → `.contact-methods` |

**Tip:** Gumamit ng "Find & Replace" (Ctrl+H / Cmd+H) sa editor mo para
mabilis mapalitan ang paulit-ulit na text tulad ng "Bahay Amihan".

### Paglalagay ng sariling mga larawan

1. Gumawa ng bagong folder na `images` sa loob ng `apartment-site`.
2. Ilagay doon ang mga JPG/PNG ng unit mo (i-rename halimbawa:
   `hero.jpg`, `sala.jpg`, `kusina.jpg`, `kwarto.jpg`, `banyo.jpg`,
   `balkonahe.jpg`).
3. Sa `index.html`, palitan ang `src="https://placehold.co/..."` ng
   halimbawa `src="images/sala.jpg"`.
4. Panatilihing hindi masyadong malaki ang file size ng larawan
   (ideal: under 500KB bawat larawan) para mabilis mag-load ang site —
   pwede gumamit ng [squoosh.app](https://squoosh.app) para i-compress
   nang libre.

## 📧 Pag-activate ng Contact Form (opsyonal pero rekomendado)

Ang form sa `#kontak` ay gumagamit ng [Formspree](https://formspree.io),
isang libreng serbisyo na nagpapadala ng email galing sa static na website
(hindi ito kailangang may sariling server/backend):

1. Pumunta sa [formspree.io](https://formspree.io) at mag-sign up (libre).
2. Gumawa ng bagong form, ilagay ang email na tatanggap ng inquiries.
3. Kokopyahin ka nito ng Form ID/endpoint na parang:
   `https://formspree.io/f/abcd1234`
4. Sa `index.html`, hanapin ang linyang:
   `action="https://formspree.io/f/PALITAN_NG_FORM_ID"`
   at palitan ang `PALITAN_NG_FORM_ID` ng sarili mong ID.

Kung ayaw mo munang mag-set up ng Formspree, gumagana pa rin ang site —
may mga button naman na diretso sa Call, WhatsApp, Messenger, at Email.

## 🧪 Pag-test bago mag-deploy

Bago mo i-upload, tingnan mo muna sa sarili mong computer:

1. I-double click ang `index.html` — bubukas ito sa browser mo.
2. I-resize ang window (o gamitin ang DevTools > Toggle Device Toolbar)
   para makita kung maganda pa rin tingnan sa mobile size.
3. I-click ang mga larawan sa gallery para tingnan ang lightbox.
4. I-test ang hamburger menu sa maliit na screen size.

## 🚀 Pag-deploy (LIBRE)

### Option A — Netlify (pinaka-madali, drag-and-drop lang)

1. Pumunta sa [netlify.com](https://www.netlify.com) at mag-sign up
   (pwede gamit Google/GitHub/Email — libre).
2. Sa dashboard, hanapin ang **"Add new site" → "Deploy manually"**.
3. I-drag-and-drop ang buong `apartment-site` folder papunta sa browser
   window.
4. Automatic itong bibigyan ng live link tulad ng
   `random-name-123.netlify.app`.
5. Para palitan ang pangalan: **Site settings → Change site name**.
6. Tapos na! Live na ang site mo at pwede nang i-share ang link.

Bawat may bagong pagbabago (hal. bagong larawan/presyo): i-drag-and-drop
lang ulit ang buong folder sa parehong dashboard para mag-update.

### Option B — GitHub Pages (kung may GitHub account ka na)

1. Gumawa ng bagong repository sa [github.com](https://github.com)
   (hal. pangalanan mo itong `apartment-site`).
2. I-upload ang 3 files (`index.html`, `style.css`, `script.js`) gamit
   ang "Add file → Upload files" sa web interface ng GitHub.
3. Pumunta sa **Settings → Pages** ng repository.
4. Sa ilalim ng "Branch", piliin ang `main` at i-save.
5. Maghintay ng 1–2 minuto — lalabas ang live link sa parehong page,
   parang `https://username.github.io/apartment-site/`.

### Pagdaragdag ng sariling domain (hal. bahayamihan.com)

Kapag may binili kang domain sa hinaharap (Namecheap, GoDaddy, atbp.),
pwede itong ikonekta sa alinman sa Netlify o GitHub Pages nang libre —
sa Netlify: **Domain settings → Add custom domain**; sa GitHub Pages:
**Settings → Pages → Custom domain**. Susundan mo na lang ang
mga instructions na lalabas doon para i-set up ang DNS.

## ❓ Karaniwang Tanong

**Bakit hindi lumalabas ang larawan ko?**
Siguraduhing tama ang filename/spelling sa `src="images/xxx.jpg"` at
nasa loob talaga ng `images` folder ang larawan — case-sensitive ito
minsan sa ibang hosting.

**Pwede bang gawing Airbnb-style booking calendar ito?**
Ang site na ito ay para sa pag-advertise at pag-inquire — hindi pa
kasama dito ang real-time na booking calendar/payment (kailangan nito
ng backend/database). Kung kailangan mo na ito sa hinaharap, sabihan mo
lang ako para gabayan kita sa susunod na hakbang.
