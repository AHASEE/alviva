import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Alviva home">
          <Image
            src="/images/alviva-navbar.svg"
            alt="Alviva"
            width={220}
            height={58}
            className="brand-logo"
            priority
            unoptimized
          />
        </Link>
        <div className="navlinks">
          <Link href="/#features">Features</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/affiliate">Affiliate</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <Link className="button small nav-cta" href="/#early-access">
          Early access ↗
        </Link>
      </nav>
    </header>
  );
}
