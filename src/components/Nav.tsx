const NAV_LINKS = ["sobre mí", "proyectos", "experiencia", "contacto"];

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">GH.</span>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.replace(" ", "")}`}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
