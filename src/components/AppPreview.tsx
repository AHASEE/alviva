import Image from "next/image";
import { Camera, Droplets, Flame, Target } from "lucide-react";

/**
 * Branded illustrative product preview, not a live screenshot.
 * Uses the same Alviva logo asset as the site's navbar/footer.
 */
export default function AppPreview() {
  return (
    <figure className="alviva-preview" aria-label="Illustrative Alviva nutrition tracking app preview">
      <div className="preview-back preview-phone" aria-hidden="true">
        <div className="preview-screen">
          <div className="preview-notch" />
          <div className="preview-small-logo">
            <Image src="/images/alviva-navbar.svg" alt="" width={140} height={37} unoptimized />
          </div>
          <span className="preview-eyebrow">YOUR DAILY PROGRESS</span>
          <div className="preview-progress-circle">
            <Flame size={19} aria-hidden="true" />
            <strong>1,250</strong><span>of 2,000 kcal</span>
          </div>
          <div className="preview-water"><Droplets size={17} aria-hidden="true" /> Water tracked <strong>1.5 L</strong></div>
          <div className="preview-mini-card"><Target size={16} aria-hidden="true" /> Stay on track</div>
        </div>
      </div>
      <div className="preview-front preview-phone">
        <div className="preview-screen">
          <div className="preview-notch" aria-hidden="true" />
          <div className="preview-small-logo">
            <Image src="/images/alviva-navbar.svg" alt="Alviva" width={140} height={37} unoptimized />
          </div>
          <span className="preview-eyebrow">SNAP · REVIEW · LOG</span>
          <div className="preview-food">
            <Image
              src="/images/chicken-bowl.webp"
              alt="Grilled chicken and vegetables in a bowl"
              fill
              sizes="(max-width: 760px) 210px, 240px"
            />
            <span className="preview-scanning"><Camera size={14} aria-hidden="true" /> AI Food Scan</span>
          </div>
          <div className="preview-meal-line"><strong>Chicken bowl</strong><span>520 kcal*</span></div>
          <div className="preview-macros">
            <span><b>42g</b>Protein</span><span><b>56g</b>Carbs</span><span><b>18g</b>Fats</span>
          </div>
          <div className="preview-add" aria-hidden="true">+ Add to Diary</div>
        </div>
      </div>
      <figcaption className="preview-disclaimer">Illustrative preview · *Example estimate; actual results may vary</figcaption>
    </figure>
  );
}
