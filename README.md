# EDU TECH — Placement Prep Quiz App

A single-file React app (App.jsx) built as a Claude.ai artifact.

## Features
- Login / Register (demo-level auth, stored via the artifact's storage API)
- Three main rounds: Aptitude, Verbal, Technical (30 questions each for
  Aptitude/Verbal; Technical draws 50 per attempt from a 250-question
  Zero → Pro Python bank with runnable code snippets)
- Daily Quiz: one new dated quiz every calendar day, history never removed
- Instant scoring + immediately-unlocked answer key
- Zig-zag question review + overall member ranking on the Result screen
- Profile page with a LeetCode-style donut chart and round-wise breakdown
- Leaderboard tab ranking all members by overall percentage
- Left sidebar navigation (Exams / Daily / Answers / Profile / Leaders)
- EDU TECH logo, dark exam-paper visual theme

## Notes on running this outside Claude.ai
This file was built against Claude.ai's artifact runtime, which provides:
- `window.storage` — a key/value storage API (get/set/delete/list, with a
  `shared` flag) used here for accounts, submissions, and the leaderboard.
- Pre-bundled libraries: react, recharts, lucide-react.

To run it in a normal React project (e.g. Vite or Create React App):
1. `npm install react react-dom recharts lucide-react`
2. Copy `App.jsx` into your `src/` folder.
3. Replace the `window.storage.*` calls with your own backend/localStorage/
   database calls — this app has no real backend, so multi-device/multi-user
   behavior depends entirely on whatever storage you wire up.
4. Import and render `<App />` from your `index.jsx`/`main.jsx`.

## File
- `App.jsx` — the entire application (single file, as required by the
  artifact environment it was built in).
