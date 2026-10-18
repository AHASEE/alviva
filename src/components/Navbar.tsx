import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="brand" aria-label="Alviva home">
        <Image
          src="/images/alviva-navbar.svg"
          alt="Alviva"
          width={220}
          height={58}
          priority
          unoptimized
          style={{ display: "block", width: "clamp(160px, 42vw, 220px)", height: "auto" }}
        />
      </Link>
      <div className="navlinks">
        <Link href="/#features">Features</Link>
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/affiliate">Affiliate</Link>
        <Link href="/#faq">FAQ</Link>
      </div>
      <Link className="button small" href="/#early-access">Early access ↗</Link>
    </nav>
  );
}
