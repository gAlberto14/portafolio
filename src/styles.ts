import { T } from "./tokens";

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: ${T.bg};
    color: ${T.text};
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  a { color: inherit; text-decoration: none; }

  /* ── NAV ──────────────────────────────────────────────────────────────────── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    border-bottom: 1px solid ${T.border};
    background: rgba(10,10,10,0.95);
    backdrop-filter: blur(10px);
  }
  .nav-inner {
    max-width: 1000px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2rem; height: 56px;
  }
  .nav-logo {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700; font-size: .95rem;
    color: ${T.lime}; letter-spacing: .04em;
  }
  .nav-links { display: flex; gap: 2rem; }
  .nav-links a {
    font-size: .75rem; font-weight: 500;
    color: ${T.muted}; letter-spacing: .03em;
    font-family: 'IBM Plex Mono', monospace;
    transition: color .15s;
  }
  .nav-links a:hover { color: ${T.lime}; }

  /* ── LAYOUT ───────────────────────────────────────────────────────────────── */
  .section { padding: 5rem 2rem; }
  .container { max-width: 1000px; margin: 0 auto; }

  /* ── HERO ─────────────────────────────────────────────────────────────────── */
  .hero { padding: 7rem 2rem 4rem; }
  .hero-inner { max-width: 1000px; margin: 0 auto; }

  .hero-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .72rem; font-weight: 500;
    color: ${T.lime}; letter-spacing: .12em;
    text-transform: uppercase; margin-bottom: 1.5rem;
    display: flex; align-items: center; gap: .5rem;
  }
  .hero-label::before {
    content: ''; display: inline-block;
    width: 24px; height: 1px; background: ${T.lime};
  }
  .hero-name {
    font-family: 'IBM Plex Mono', monospace;
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 700; line-height: 1.0;
    letter-spacing: -.03em; margin-bottom: .3rem; min-height: 1.1em;
  }
  .cursor {
    display: inline-block; width: 3px; height: .85em;
    background: ${T.lime}; vertical-align: middle; margin-left: 4px;
    animation: blink 1s step-end infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  .hero-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: clamp(1.2rem, 3vw, 2.2rem);
    font-weight: 400; color: ${T.yellow};
    letter-spacing: -.02em; margin-bottom: 2rem;
    line-height: 1.1; min-height: 1.15em;
  }
  .hero-desc {
    font-size: .95rem; color: ${T.muted};
    max-width: 520px; line-height: 1.8; margin-bottom: 2.5rem;
  }
  .hero-desc strong { color: ${T.text}; font-weight: 500; }

  .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
  .btn-primary {
    background: ${T.lime}; color: #0A0A0A;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700; font-size: .78rem;
    padding: .7rem 1.5rem; border: none;
    letter-spacing: .04em; cursor: pointer;
    transition: background .15s, transform .1s; display: inline-block;
  }
  .btn-primary:hover { background: ${T.yellow}; transform: translateY(-2px); }
  .btn-ghost {
    background: transparent; color: ${T.text};
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500; font-size: .78rem;
    padding: .7rem 1.5rem; border: 1px solid ${T.border};
    letter-spacing: .04em; cursor: pointer;
    transition: border-color .15s, transform .1s; display: inline-block;
  }
  .btn-ghost:hover { border-color: ${T.lime}; transform: translateY(-2px); }

  .chips { display: flex; gap: .45rem; flex-wrap: wrap; }
  .chip {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .68rem; font-weight: 500;
    padding: .25rem .6rem; border: 1px solid ${T.border};
    color: ${T.faint}; letter-spacing: .03em;
    transition: border-color .15s, color .15s;
  }
  .chip:hover { border-color: ${T.lime}; color: ${T.lime}; }

  /* ── SECTION HEADER ───────────────────────────────────────────────────────── */
  .sec-eyebrow {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .7rem; font-weight: 700;
    color: ${T.lime}; letter-spacing: .1em;
    text-transform: uppercase; margin-bottom: .5rem;
  }
  .sec-eyebrow::before { content: '>_ '; opacity: .6; }
  .sec-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    font-weight: 700; letter-spacing: -.02em; line-height: 1.2;
  }
  .sec-rule {
    width: 40px; height: 2px;
    background: ${T.lime}; margin-top: .9rem; margin-bottom: 3rem;
  }

  /* ── ABOUT ────────────────────────────────────────────────────────────────── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 4rem; align-items: start;
  }
  .about-p { color: ${T.muted}; font-size: .9rem; line-height: 1.85; margin-bottom: .9rem; }
  .about-p strong { color: ${T.text}; font-weight: 500; }
  .about-p:last-child { margin-bottom: 0; }

  .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: ${T.border}; }
  .stat-cell { background: ${T.card}; padding: 1.4rem; }
  .stat-val {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.7rem; font-weight: 700; color: ${T.lime}; line-height: 1;
  }
  .stat-lbl { font-size: .72rem; color: #666; line-height: 1.4; margin-top: .25rem; }

  /* ── SKILLS ───────────────────────────────────────────────────────────────── */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 1px; background: ${T.border};
  }
  .skill-group { background: ${T.card}; padding: 1.4rem; }
  .skill-group-name {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .67rem; font-weight: 700;
    color: ${T.yellow}; letter-spacing: .1em;
    text-transform: uppercase; margin-bottom: .9rem;
  }
  .skill-item {
    font-size: .83rem; color: #777;
    padding: .28rem 0; display: flex; align-items: center; gap: .5rem;
  }
  .skill-item::before {
    content: ''; display: inline-block;
    width: 4px; height: 4px; background: ${T.lime}; flex-shrink: 0;
  }

  /* ── PROJECTS ─────────────────────────────────────────────────────────────── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 1px; background: ${T.border};
  }
  .project-card {
    background: ${T.card}; display: flex;
    flex-direction: column; position: relative; transition: background .25s;
  }
  .project-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(120deg, ${T.lime}, ${T.yellow}, ${T.lime});
    background-size: 200% 200%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 0 0 0 3px;
    opacity: 0; transition: opacity .3s;
    animation: borderRun 2s linear infinite paused;
  }
  .project-card:hover { background: ${T.cardHov}; }
  .project-card:hover::before { opacity: 1; animation-play-state: running; }
  .project-card.placeholder::before {
    background: linear-gradient(120deg, ${T.yellow}, ${T.lime}, ${T.yellow});
    background-size: 200% 200%;
  }
  @keyframes borderRun {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .project-body { padding: 1.4rem; flex: 1; }
  .project-tag {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .63rem; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    margin-bottom: .7rem; display: block;
  }
  .project-tag--company { color: ${T.lime}; }
  .project-tag--personal { color: ${T.yellow}; }
  .project-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .95rem; font-weight: 700;
    line-height: 1.3; margin-bottom: .7rem;
  }
  .project-desc { font-size: .83rem; color: #777; line-height: 1.7; }
  .project-hint {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .68rem; color: ${T.yellow};
    padding: .55rem 1.4rem;
    border-top: 1px dashed #2a2a00;
    background: rgba(245,224,48,.03); opacity: .8;
  }
  .project-footer {
    padding: .8rem 1.4rem;
    border-top: 1px solid #1a1a1a;
    display: flex; flex-wrap: wrap; gap: .35rem;
  }
  .tech-tag {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .63rem; font-weight: 500;
    color: ${T.faint}; letter-spacing: .04em;
    padding: .2rem .5rem; border: 1px solid #1e1e1e;
  }

  /* ── EXPERIENCE ───────────────────────────────────────────────────────────── */
  .exp-list { display: flex; flex-direction: column; }
  .exp-item {
    display: grid; grid-template-columns: 170px 1fr;
    gap: 2.5rem; padding: 2.5rem 0; border-top: 1px solid #1a1a1a;
  }
  .exp-item:last-child { border-bottom: 1px solid #1a1a1a; }
  .exp-period {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .72rem; color: #666; line-height: 1.6; padding-top: .15rem;
  }
  .exp-role {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .95rem; font-weight: 700; margin-bottom: .2rem;
  }
  .exp-company { font-size: .8rem; color: ${T.lime}; font-weight: 500; margin-bottom: .9rem; }
  .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: .4rem; }
  .exp-bullet {
    font-size: .83rem; color: #777;
    line-height: 1.65; padding-left: 1rem; position: relative;
  }
  .exp-bullet::before { content: '·'; position: absolute; left: 0; color: ${T.lime}; font-weight: 700; }

  /* ── CONTACT ──────────────────────────────────────────────────────────────── */
  .contact-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1px; background: ${T.border}; margin-top: 2.5rem;
  }
  .contact-cell { background: ${T.card}; padding: 1.75rem; }
  .contact-cell-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .67rem; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    color: #555; margin-bottom: 1.1rem;
  }
  .contact-link {
    display: flex; align-items: flex-start; gap: .7rem;
    color: #777; font-size: .85rem; margin-bottom: .8rem;
    transition: color .15s; text-decoration: none;
  }
  .contact-link:hover { color: ${T.lime}; }
  .contact-link-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .63rem; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    color: ${T.yellow}; min-width: 52px; padding-top: 2px;
  }
  .bvnote {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .68rem; color: #444; line-height: 1.7; margin-top: 1.25rem;
  }
  .bvnote span { color: ${T.lime}; }

  /* ── FOOTER ───────────────────────────────────────────────────────────────── */
  .footer {
    border-top: 1px solid #1a1a1a; padding: 1.75rem 2rem;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 1rem;
  }
  .footer p {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .67rem; color: #3a3a3a; letter-spacing: .04em;
  }
  .flag-row {
    display: flex; align-items: center; gap: .4rem;
    font-family: 'IBM Plex Mono', monospace;
    font-size: .63rem; color: #3a3a3a;
  }
  .flag { display: flex; height: 8px; border-radius: 1px; overflow: hidden; }
  .flag-green  { width: 12px; background: #006400; }
  .flag-yellow { width: 12px; background: #F5E030; }

  /* ── SCROLL REVEAL ────────────────────────────────────────────────────────── */
  .reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .delay-1 { transition-delay: .1s; }
  .delay-2 { transition-delay: .2s; }
  .delay-3 { transition-delay: .3s; }
  .delay-4 { transition-delay: .4s; }

  /* ── RESPONSIVE ───────────────────────────────────────────────────────────── */
  @media (max-width: 700px) {
    .about-grid        { grid-template-columns: 1fr; }
    .exp-item          { grid-template-columns: 1fr; gap: .6rem; }
    .contact-grid      { grid-template-columns: 1fr; }
    .nav-links         { gap: 1.1rem; }
    .section           { padding: 3.5rem 1.25rem; }
  }
`;
