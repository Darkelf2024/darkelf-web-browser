import Link from 'next/link';
import { asset } from '@/lib/asset';

interface NavProps {
  activePath?: string;
}

export function Nav({ activePath = "" }: NavProps) {
  const links = [
    { href: "/home", label: "Home" },
    { href: "/download-center", label: "Download" },
    { href: "/releases", label: "Releases" },
    { href: "/security", label: "Security" },
  ];

  return (
    <header>
      <div className="nav">
        <Link className="brand" href="/home" aria-label="Darkelf Browser home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/lock.png")} alt="Darkelf" width={32} height={32} style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <span>Darkelf Browser</span>
          <span className="badge">Mission + Security</span>
        </Link>
        <nav aria-label="Main navigation">
          <div className="right">
            {links.map((link) => {
              const isActive = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  className={`btn${isActive ? " btn--nav-active" : ""}`}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
