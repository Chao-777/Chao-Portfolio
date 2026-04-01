# Chao Yuan — Portfolio

> Personal portfolio website with a retro 80s CRT terminal aesthetic, dual day/night themes, and animated boot sequence.

**Live:** https://chao-777.github.io/Chao-Portfolio/

---

## Screenshots

### Night Mode — Amber Phosphor CRT
![Night Mode Hero](docs/screenshot-night-hero.png)

### Day Mode — Navy Ink on Parchment
![Day Mode Hero](docs/screenshot-day-hero.png)

### About & Experience
![About Section](docs/screenshot-about.png)

### Projects
![Projects Section](docs/screenshot-projects.png)

---

## Features

- **Dual theme** — toggle between amber-on-black (night) and navy-on-parchment (day) with a smooth transition
- **Boot sequence** — animated terminal loading screen with progress bar before the site appears
- **Live clock** — real-time timestamp in the navbar header
- **Typewriter effect** — system log lines in the hero type in sequentially with a blinking cursor
- **CRT scanlines** — subtle fixed overlay for authentic retro monitor feel
- **Scroll reveal** — sections fade in as you scroll using IntersectionObserver
- **Contact form** — EmailJS integration with client-side validation, no backend required
- **Responsive** — mobile menu, stacked layouts on small screens
- **Docker ready** — multi-stage build (Node → Nginx) for containerised deployment

---

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | React 19, Vite 6 |
| Styling | Tailwind CSS v4, CSS custom properties |
| Icons | react-icons |
| Email | EmailJS |
| Deployment | GitHub Pages, Docker + Nginx |

---

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Home.jsx        # Hero — profile photo, identity fields, typewriter log
│   │   ├── About.jsx       # Skills, certifications, education, experience
│   │   ├── Projects.jsx    # Featured project cards
│   │   └── Contact.jsx     # EmailJS contact form
│   ├── NavBar.jsx          # Sticky nav with live clock and theme toggle
│   ├── MobileMenu.jsx      # Full-screen mobile overlay
│   ├── LoadingScreen.jsx   # Boot sequence animation
│   ├── RevealOnScroll.jsx  # IntersectionObserver scroll wrapper
│   └── Footer.jsx          # Social links
├── assets/
├── index.css               # Design system — CSS variables, terminal primitives
├── App.jsx                 # Root — theme state, scanlines overlay
└── main.jsx
public/
├── profile.jpg             # Profile photo
├── Chao_Yuan_Resume.pdf    # Downloadable CV
└── favicon.png
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
git clone https://github.com/Chao-777/Chao-Portfolio.git
cd Chao-Portfolio
npm install
npm run dev
```

Open `http://localhost:5173/Chao-Portfolio/`

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build → `/dist` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## Deployment

### GitHub Pages

```bash
npm run deploy
```

Builds the project and pushes `/dist` to the `gh-pages` branch automatically.

### Docker

```bash
# Build
docker build -t chao-portfolio .

# Run
docker run -p 8080:80 chao-portfolio
```

Open `http://localhost:8080`

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

Get your keys from [EmailJS](https://www.emailjs.com/).

---
