import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "./AnalyticsConsent";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-branding">
            <Link href="/" className="footer-logo" aria-label="Alviva home">
              <Image
                src="/images/alviva-navbar.svg"
                alt="Alviva"
                width={220}
                height={58}
                unoptimized
              />
            </Link>
            <p>Snap your meal. Know your calories.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/#features">Features</Link>
            <Link href="/affiliate">Affiliate</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="mailto:support@alviva.app">Contact</a>
            <CookieSettingsButton />
          </nav>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Alviva. All rights reserved.</small>
          <small>AI nutrition estimates are approximate. Review portions before logging.</small>
        </div>
      </div>
    </footer>
  );
}
