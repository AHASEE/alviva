import type { Metadata } from "next";
import { Users, HeartHandshake, Megaphone } from "lucide-react";
import InterestForm from "../../components/InterestForm";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Affiliate program — 30% planned recurring commission | Alviva",
  description: "Join Alviva’s affiliate interest list. Planned launch offer: 30% recurring commission for the first 12 months of eligible referred subscriptions. Free to apply.",
};

const benefits = [
  { Icon: Megaphone, title: "Create content you believe in", text: "Introduce photo-based food tracking through meal ideas, honest app reviews and everyday wellness stories." },
  { Icon: Users, title: "An audience, not a follower minimum", text: "Creators, bloggers and community builders can apply. Tell us who you reach and why Alviva would be useful to them." },
  { Icon: HeartHandshake, title: "Grow with us from the start", text: "Register now to hear about launch plans and help shape the partner experience. There is no fee or obligation to apply." },
];

export default function Affiliate() {
  return <><main>
    <section className="wrap affiliate-hero">
      <span className="eyebrow">ALVIVA PARTNERS · PRE-LAUNCH INTEREST LIST</span>
      <h1>Share better habits.<br /><span>Earn together.</span></h1>
      <p className="lead">Help your audience discover a simpler way to track everyday meals. Turn thoughtful recommendations into a potential recurring income stream.</p>
      <div className="commission-offer">
        <span className="eyebrow">PLANNED LAUNCH OFFER</span>
        <strong>30%</strong>
        <h2>Recurring commission</h2>
        <p>On eligible subscription revenue from your referrals, during their first 12 months after the first paid subscription.</p>
        <p className="muted">Pre-launch proposal, subject to final written partner terms. Earnings begin only after approval, program launch and verified paid referrals.</p>
      </div>
      <a href="#affiliate-interest" className="button">Join the affiliate interest list ↗</a>
      <p className="muted">Free to apply · No purchase required · No earnings guarantee</p>
    </section>
    <section className="wrap section">
      <h2>Your community. A useful introduction.</h2>
      <div className="cards">{benefits.map(({ Icon, title, text }) => <article className="card" key={title}><div className="icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="wrap section steps-section">
      <div><span className="eyebrow">HOW IT WILL WORK</span><h2>Introduce yourself.<br />Build from there.</h2></div>
      <ol className="steps">{[
        ["Register your interest", "Share your name, email and website or social profile. We review applications for audience and content fit."],
        ["Review your invitation", "If selected, review the final commission, attribution and payout terms before joining. Referral tools are not live yet."],
        ["Share after launch", "Once approved and tracking is available, share your assigned referral link or code and earn on eligible paid subscriptions."],
      ].map(([title, text], i) => <li key={title}><span className="number">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
    </section>
    <section className="wrap section faq" id="affiliate-terms">
      <span className="eyebrow">GENERAL CONDITIONS · UPDATED 7 OCTOBER 2026</span>
      <h2>Clear terms. A fair start.</h2>
      <details open><summary>What does the planned 30% offer mean?<span>+</span></summary><p>The proposed commission is 30% of eligible subscription revenue actually received by Alviva, after discounts, taxes, refunds, chargebacks and payment or app-store fees. It applies to payments within the first 12 months after a referred customer’s first paid subscription, while that subscription remains active. Free trials and unpaid signups do not earn commission.</p><p>Example: $5 of eligible revenue would earn $1.50. This illustrates the calculation; it is not a subscription price or an income promise.</p></details>
      <details><summary>Is the program live, and am I guaranteed acceptance?<span>+</span></summary><p>Alviva is in testing. This form collects interest only; it does not create a partnership, reserve a commission rate or guarantee acceptance. The 30% offer is planned and may change before launch. Final written terms must be shared and accepted before participation. There is no application fee or purchase requirement.</p></details>
      <details><summary>How will referrals and payouts be handled?<span>+</span></summary><p>Only verified referrals through approved tracking will qualify. Attribution rules, the referral window, payout method, currency, minimum balance and schedule will be provided before enrollment. No commissions accrue before approval and program activation. Refunded, disputed, fraudulent and self-referred purchases do not qualify.</p></details>
      <details><summary>What are the promotion guidelines?<span>+</span></summary><p>Use honest descriptions and clearly disclose your affiliate relationship. Do not spam, impersonate Alviva, submit fake referrals or promise guaranteed weight loss or exact AI calorie estimates. Do not purchase ads using Alviva’s brand name without written permission. Participation may be declined or ended for misuse.</p></details>
      <details><summary>How will you use my application details?<span>+</span></summary><p>We use your details to review your interest and contact you about this program. Submission is processed by FormSubmit and delivered to our email inbox. Do not include health information or sensitive documents. You can withdraw your interest or request deletion by emailing abdulhaseeb1.dev@gmail.com. See our <a href="/privacy">Privacy Policy</a>.</p></details>
    </section>
    <section id="affiliate-interest" className="wrap section access">
      <div><span className="eyebrow">LET’S GET TO KNOW YOU</span><h2>Small audience?<br />Big on trust?</h2><p>We would love to hear from you. Tell us what you create and how Alviva could help your community.</p><p>Questions? <a href="mailto:abdulhaseeb1.dev@gmail.com">abdulhaseeb1.dev@gmail.com</a></p></div>
      <InterestForm affiliate />
    </section>
  </main><Footer /></>;
}
