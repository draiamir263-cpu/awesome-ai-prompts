# DevLearn 🚀

A modern, fully responsive educational platform for learning Web Development, Mobile Development, and Python — all in one place.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + React Router v6 |
| Styling | Tailwind CSS (dark/light mode) |
| Animations | Framer Motion |
| Fonts | Syne (display) · DM Sans (body) · JetBrains Mono (code) |

## Project Structure

```
src/
├── components/
│   ├── UI.jsx          # Button, Badge, Card, ProgressBar, CodeBlock, Tag
│   ├── Navbar.jsx      # Fixed top navigation
│   ├── MobileNav.jsx   # Bottom nav bar (mobile)
│   └── TrackCard.jsx   # Track summary card
├── pages/
│   ├── Home.jsx        # Hero, tracks overview, features, CTA
│   ├── Tracks.jsx      # Tracks list + Track detail with curriculum
│   ├── Lesson.jsx      # Lesson reader with sidebar + code blocks
│   ├── Dashboard.jsx   # Progress stats, streaks, heatmap
│   └── Auth.jsx        # Login / Signup UI mockup
├── data/
│   └── curriculum.js   # All track, module, lesson & content data
├── hooks/
│   ├── useTheme.js     # Dark/light mode toggle (persisted)
│   └── useProgress.js  # Lesson completion tracking (in-memory)
├── App.jsx             # Router + providers
├── index.js            # Entry point
└── index.css           # Tailwind + global styles
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Home Page** — Hero with animated orbs, stats bar, track cards, features grid, CTA banner
- **Tracks** — Three learning tracks (Web, Mobile, Python) with module accordions and lesson lists
- **Lesson Page** — Sidebar nav, rich content sections, syntax-highlighted code blocks with copy button
- **Dashboard** — Animated progress bars, streak tracker, activity feed, heatmap
- **Auth** — Login/Signup tab UI with social buttons (frontend mockup, no backend)
- **Dark/Light mode** — Persisted via localStorage, toggled from navbar
- **Progress tracking** — Mark lessons complete, progress reflected across all views
- **Fully responsive** — Desktop sidebar layout, mobile bottom nav

## Adding Lessons

Add lesson content to `src/data/curriculum.js` in the `LESSON_CONTENT` object:

```js
"your-lesson-id": {
  trackId: "web",           // "web" | "mobile" | "python"
  badge: "CSS · Beginner",
  title: "Your Lesson Title",
  duration: "15 min",
  type: "Theory",           // Theory | Practice | Advanced | Project
  intro: "Intro paragraph...",
  sections: [
    { heading: "Section Title", body: "Section body text..." },
  ],
  codeExamples: [
    { lang: "css", label: "CSS", title: "Example title", code: `/* your code */` },
  ],
  nextLesson: "next-lesson-id",
  prevLesson: "prev-lesson-id",
},
```
