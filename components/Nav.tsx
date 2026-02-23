import Image from 'next/image';

interface NavProps {
  activePath?: string;
}

export function Nav({ activePath = "" }: NavProps) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/download-center", label: "Download" },
    { href: "/releases", label: "Releases" },
    { href: "/security", label: "Security" },
  ];

  return (
    <header>
      <div className="nav">
        <a className="brand" href="/" aria-label="Darkelf Browser home">
          <Image src="/lock.png" alt="Darkelf" width={32} height={32} style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <span>Darkelf Browser</span>
          <span className="badge">Mission + Security</span>
        </a>
        <nav aria-label="Main navigation">
          <div className="right">
            {links.map((link) => {
              const isActive = activePath === link.href;
              return (
                <a
                  key={link.href}
                  className={`btn${isActive ? " btn--nav-active" : ""}`}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
