import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const siteTitle = 'Darkelf Browser — Privacy-First, Hardened, Non-Persistent';
const siteDescription =
  'Darkelf Browser: open-source, hardened, non-persistent privacy browsers for macOS, Linux, and Windows. Anti-fingerprinting, Tor-native, post-quantum ready. Built for security researchers, journalists, OSINT analysts, and privacy advocates. Verify every build with SHA-256.';
const siteUrl = 'https://darkelfbrowser.com';
const ogImage = '/lock.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s — Darkelf Browser',
  },
  description: siteDescription,
  keywords: [
    // Brand
    'Darkelf Browser',
    'Darkelf Cocoa',
    'Darkelf Shadow',
    'Darkelf OSINT AI',
    'Dr Kevin Moore browser',
    // Privacy & Security
    'privacy browser',
    'secure browser',
    'hardened browser',
    'anonymous browser',
    'private browser',
    'non-persistent browser',
    'ephemeral browser',
    'zero footprint browser',
    'no tracking browser',
    'privacy-first browser',
    'open source privacy browser',
    'incognito browser alternative',
    // Anti-fingerprinting
    'anti-fingerprinting browser',
    'fingerprint resistant browser',
    'canvas fingerprint protection',
    'WebGL fingerprint blocking',
    'browser fingerprint spoofing',
    'user agent spoofing',
    'letterboxing browser',
    // Tor / Network
    'Tor browser',
    'Tor browser alternative',
    'Tor-native browser',
    'SOCKS5 proxy browser',
    'WebRTC leak prevention',
    'WebRTC disabled browser',
    'IP leak protection browser',
    'proxy browser',
    // Post-quantum
    'post-quantum browser',
    'PQC browser',
    'quantum resistant browser',
    'quantum safe browser',
    'ML-KEM browser',
    'post-quantum cryptography browser',
    // Platform
    'macOS privacy browser',
    'Linux privacy browser',
    'Windows privacy browser',
    'macOS secure browser',
    'Linux hardened browser',
    'PySide6 browser',
    'QtWebEngine browser',
    'WebKit browser macOS',
    'Cocoa browser macOS',
    'Python privacy browser',
    // Session / Persistence
    'session isolation browser',
    'no cookies browser',
    'no history browser',
    'no cache browser',
    'browser no logs',
    'memory-only browser',
    'ephemeral session browser',
    // OSINT
    'OSINT browser',
    'OSINT tools',
    'open source intelligence browser',
    'OSINT AI',
    'AI OSINT assistant',
    'Ollama OSINT',
    'identity isolation browser',
    'compartmentalized browsing',
    'evidence capture browser',
    // Security researcher
    'security researcher browser',
    'penetration testing browser',
    'red team browser',
    'cybersecurity browser',
    'journalist privacy browser',
    'activist browser',
    'whistleblower browser',
    // Verification
    'SHA-256 browser download',
    'verify browser download',
    'checksum browser',
    'secure download browser',
    // General
    'browser security',
    'browser privacy',
    'browser anonymity',
    'download center',
    'browser download',
  ],
  authors: [{ name: 'Dr. Kevin Moore', url: siteUrl }],
  creator: 'Dr. Kevin Moore',
  publisher: 'Darkelf Browser',
  category: 'Technology',
  classification: 'Privacy & Security Software',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Darkelf Browser',
    images: [
      {
        url: ogImage,
        width: 512,
        height: 512,
        alt: 'Darkelf Browser — Privacy-First Secure Browser',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
    creator: '@DarkelfBrowser',
    site: '@DarkelfBrowser',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/lock.png',
    shortcut: '/favicon.ico',
    apple: '/lock.png',
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#0a0e17',
    'theme-color': '#0a0e17',
    'application-name': 'Darkelf Browser',
    'apple-mobile-web-app-title': 'Darkelf Browser',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Darkelf Browser',
    url: siteUrl,
    logo: `${siteUrl}/lock.png`,
    description: siteDescription,
    foundingDate: '2024',
    founder: { '@type': 'Person', name: 'Dr. Kevin Moore' },
    knowsAbout: [
      'Privacy Browsers', 'Browser Security', 'Post-Quantum Cryptography',
      'OSINT', 'Tor Network', 'Anti-Fingerprinting', 'Cybersecurity',
    ],
    sameAs: [
      'https://github.com/Darkelf2024',
      'https://github.com/Darkelf2024/Darkelf-Cocoa-Browser',
      'https://github.com/Darkelf2024/Darkelf-Shadow',
      'https://github.com/Darkelf2024/Darkelf-OSINT-Ai',
    ],
  } as const;

  const schemaWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Darkelf Browser',
    alternateName: 'Darkelf Download Center',
    url: siteUrl,
    description: siteDescription,
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  } as const;

  const schemaSoftwareList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Darkelf Browser Products',
    description: 'Hardened, non-persistent, privacy-first browsers and tools for security researchers, journalists, and OSINT analysts.',
    url: siteUrl,
    numberOfItems: 3,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Darkelf Cocoa',
          applicationCategory: 'BrowserApplication',
          operatingSystem: 'macOS',
          description: 'macOS-native Cocoa/WebKit privacy browser. Hardened, non-persistent, session-isolated. Secure Snapshot, TLS indicator, canvas hardening.',
          url: `${siteUrl}/`,
          downloadUrl: 'https://github.com/Darkelf2024/Darkelf-Cocoa-Browser/releases',
          softwareVersion: '4.0.0',
          releaseNotes: `${siteUrl}/releases/cocoa/4.0.0`,
          license: 'https://opensource.org/licenses/MIT',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Darkelf Shadow',
          applicationCategory: 'BrowserApplication',
          operatingSystem: 'Linux, Windows',
          description: 'PySide6/QtWebEngine privacy browser for Linux and Windows. Hardened sandbox, request interception, no persistence, no WebRTC.',
          url: `${siteUrl}/`,
          downloadUrl: 'https://github.com/Darkelf2024/Darkelf-Shadow/releases',
          softwareVersion: '0.1.0-nightly',
          license: 'https://opensource.org/licenses/MIT',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Darkelf OSINT AI',
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'Windows, Linux, macOS',
          description: 'AI-powered Open-Source Intelligence assistant. Combines OSINT workflows with local Ollama AI reasoning. Modular, ethical, built for investigators.',
          url: `${siteUrl}/`,
          downloadUrl: 'https://github.com/Darkelf2024/Darkelf-OSINT-Ai/releases',
          softwareVersion: '0.1.0-alpha',
          license: 'https://opensource.org/licenses/MIT',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
      },
    ],
  } as const;

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Darkelf Browser?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Darkelf Browser is a suite of open-source, hardened, non-persistent privacy browsers and tools built for security researchers, journalists, OSINT analysts, and privacy advocates. Products include Darkelf Cocoa (macOS), Darkelf Shadow (Linux/Windows), and Darkelf OSINT AI.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Darkelf Browser free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All Darkelf Browser products are free and open-source, released under the MIT license and available on GitHub.',
        },
      },
      {
        '@type': 'Question',
        name: 'What platforms does Darkelf Browser support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Darkelf Cocoa is macOS-only. Darkelf Shadow supports Linux and Windows. Darkelf OSINT AI supports Windows, Linux, and macOS.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I verify a Darkelf Browser download?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every Darkelf release is published with a SHA-256 checksum. On Windows use Get-FileHash; on Linux/macOS use sha256sum. Compare the output to the published hash on the release page before running the binary.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Darkelf Browser support Tor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Tor-native edition is temporarily offline while we refocus the product line. Current builds prioritize hardened networking on Cocoa and Shadow; Tor routing will return in a dedicated release.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Darkelf OSINT AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Darkelf OSINT AI is an AI-powered open-source intelligence assistant that combines traditional OSINT workflows with local AI reasoning via Ollama. It supports multi-source intelligence across domains, usernames, emails, IPs, and social platforms.',
        },
      },
    ],
  } as const;

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSoftwareList) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
        />
      </head>
      <body className={mono.className}>{children}</body>
    </html>
  );
}
