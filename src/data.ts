// Everything shown on the site lives here. Edit this file to update the content.
// In any text field, wrap words in `backticks` to show them as code.

export type IconName = "github" | "linkedin" | "x" | "mail";

export type SocialLink = { label: string; href: string; icon: IconName };

export type Project = {
  name: string;
  href: string;
  meta: string;
  summary: string;
  points: string[];
  tags: string[];
  links: { label: string; href: string }[];
};

export type SmallProject = { name: string; href: string; summary: string };

export type TimelineItem = { title: string; place: string; years?: string };

export const profile = {
  name: "Vineet Vikram Singh",
  shortName: "Vineet",
  githubUser: "vineetvsingh",
  email: "smashvineer@gmail.com",
  status: "Open to internships and full-time roles",
  intro:
    "Computer science student building full-stack web apps and browser games in TypeScript, React and Node.js. I like projects with a hard core to them: a payment gateway with its own double-entry ledger, a Minesweeper solver that guarantees no guessing, a scheduler that finds conflicts before you do.",
  subIntro: "B.Tech CSE, Shambhunath Institute of Engineering & Technology, Prayagraj.",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/vineetvsingh", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vineetvsingh", icon: "linkedin" },
  { label: "X", href: "https://x.com/yt_vine", icon: "x" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const projects: Project[] = [
  {
    name: "Stream Donations",
    href: "https://github.com/vineetvsingh/payment-gateway-flare",
    meta: "TypeScript · Node",
    summary:
      "A donation site for live streamers. Viewers donate with a message; the message pops up on stream through an OBS overlay and is read aloud.",
    points: [
      "Runs on its own small payment gateway: payments, refunds, 3-D Secure and a double-entry ledger with fees and balances.",
      "Two modes: a test-mode simulator, or real UPI and card payments through each streamer's own Razorpay account.",
      "Messages are filtered and queued (or held for review) so alerts play one at a time.",
    ],
    tags: ["TypeScript", "node:sqlite", "Razorpay", "Docker"],
    links: [{ label: "Source", href: "https://github.com/vineetvsingh/payment-gateway-flare" }],
  },
  {
    name: "ResumeAI",
    href: "https://resume-ai-xi-fawn.vercel.app",
    meta: "Final-year project",
    summary: "An AI resume builder that generates, scores and optimises resumes against a real job description.",
    points: [
      "ATS match score with found and missing keywords for any pasted job description.",
      "Upload a PDF, DOCX or text resume to check whether ATS software can parse it.",
      "Inline editing, PDF export, and saved resume versions in MongoDB.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Groq"],
    links: [
      { label: "Live", href: "https://resume-ai-xi-fawn.vercel.app" },
      { label: "Source", href: "https://github.com/vineetvsingh/resume-ai" },
    ],
  },
  {
    name: "No-Guess Minesweeper",
    href: "https://vineetvsingh.github.io/minesweeper/",
    meta: "TypeScript",
    summary:
      "Minesweeper where every board can be solved by logic alone. After the first click, a solver plays the board using only the numbers; if it would ever need to guess, the board is rebuilt before you see it.",
    points: [
      "Hints and losses explain the deduction that was available.",
      "Boards are generated in a Web Worker, with a sliced main-thread fallback when opened from disk.",
      "Ships as one self-contained HTML file; CI tests, builds and deploys to GitHub Pages.",
    ],
    tags: ["TypeScript", "Vite", "Vitest", "Web Workers"],
    links: [
      { label: "Play", href: "https://vineetvsingh.github.io/minesweeper/" },
      { label: "Source", href: "https://github.com/vineetvsingh/minesweeper" },
    ],
  },
  {
    name: "Solitaire",
    href: "https://vineetvsingh.github.io/klondike/",
    meta: "React 19",
    summary: "Klondike, FreeCell, Spider and Pyramid in one app, animated with spring physics.",
    points: [
      "Rules engine and solvers covered by unit tests; Playwright browser tests in CI.",
      "Draw-1/Draw-3 Klondike, FreeCell supermoves, and 1/2/4-suit Spider.",
    ],
    tags: ["React", "TypeScript", "Motion", "Playwright"],
    links: [
      { label: "Play", href: "https://vineetvsingh.github.io/klondike/" },
      { label: "Source", href: "https://github.com/vineetvsingh/klondike" },
    ],
  },
  {
    name: "Plan Composer",
    href: "https://github.com/vineetvsingh/planner",
    meta: "TypeScript",
    summary:
      "An interactive planner for trips, events and schedules. Drag activities onto a day-by-day timeline and watch conflicts, free time, budget and route update as you go.",
    points: [
      "Timeline, list and map views kept in sync.",
      "Flags overlaps and out-of-hours activities, and suggests a free slot to move each conflict to.",
      "Runs entirely in the browser; plans are kept in local storage.",
    ],
    tags: ["TypeScript", "Drag and drop", "Maps"],
    links: [{ label: "Source", href: "https://github.com/vineetvsingh/planner" }],
  },
  {
    name: "JS.hub",
    href: "https://java-script-hub.vercel.app",
    meta: "Full stack",
    summary: "A JavaScript learning platform with topics, coding challenges and a live playground.",
    points: [
      "Sandboxed iframe playground that captures `console.log` and stops runaway code after 10s.",
      "JWT auth with email OTP verification, and per-user progress tracking.",
    ],
    tags: ["React", "Express", "MongoDB", "CodeMirror"],
    links: [
      { label: "Live", href: "https://java-script-hub.vercel.app" },
      { label: "Source", href: "https://github.com/vineetvsingh/JavaScriptHub" },
    ],
  },
];

export const smallProjects: SmallProject[] = [
  {
    name: "Smart Timetable Generator",
    href: "https://github.com/vineetvsingh/Timetable_generator",
    summary: "Greedy, priority-based scheduler with clash detection. React, Firebase.",
  },
  {
    name: "Algorithms",
    href: "https://github.com/vineetvsingh/Algorithms",
    summary: "Sorting and divide-and-conquer practice in C++.",
  },
  {
    name: "Apple site clone",
    href: "https://github.com/vineetvsingh/apple_website_clone",
    summary: "Layout study in HTML and CSS.",
  },
  {
    name: "Netflix front end",
    href: "https://github.com/vineetvsingh/netflix-clone-frontend",
    summary: "Responsive landing page in HTML and CSS.",
  },
  {
    name: "Todo list",
    href: "https://github.com/vineetvsingh/todo-list",
    summary: "First steps with DOM scripting.",
  },
];

export const education: TimelineItem[] = [
  {
    title: "B.Tech, Computer Science & Engineering",
    place: "Shambhunath Institute of Engineering & Technology, Prayagraj",
    // years: "2021 – 2025",
  },
  {
    title: "Class 1 – 12",
    place: "Khel Gaon Public School",
    years: "2009 – 2021",
  },
];

export const tools: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Vite",
  "Node.js",
  "Express",
  "MongoDB",
  "SQLite",
  "Firebase",
  "Tailwind CSS",
  "Vitest",
  "Playwright",
  "Docker",
  "GitHub Actions",
  "C++",
];
