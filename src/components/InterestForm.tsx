export default function InterestForm({ affiliate = false }: { affiliate?: boolean }) {
  return (
    <form action="https://formsubmit.co/abdulhaseeb1.dev@gmail.com" method="POST" className="interest-form">
      <input type="hidden" name="_subject" value={affiliate ? "Alviva — new affiliate interest" : "Alviva — early access request"} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="request_type" value={affiliate ? "affiliate" : "early-access"} />
      <input type="hidden" name="notice_version" value="2026-10-07" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <label>Name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
      {affiliate && <>
        <label>Website or social profile<input name="profile" type="url" required placeholder="https://" maxLength={500} /></label>
        <label>Tell us about your audience (optional)<textarea name="audience" rows={3} maxLength={1500} placeholder="What do you create, and who follows your work?" /></label>
      </>}
      <label className="consent-label"><input name="contact_consent" type="checkbox" value="agreed" required /><span>I agree to be contacted about {affiliate ? "the Alviva affiliate program" : "Alviva early access and launch updates"} and have read the <a href="/privacy">Privacy Policy</a>{affiliate && <> and <a href="#affiliate-terms">general conditions</a></>}.</span></label>
      <button className="button lime" type="submit">{affiliate ? "Register interest ↗" : "Request early access ↗"}</button>
      <p className="form-note">You will continue to FormSubmit to complete verification and submit your details to Alviva. No email app needed. Please do not include sensitive information.</p>
      <p className="form-note">Having trouble? Email <a href="mailto:abdulhaseeb1.dev@gmail.com">abdulhaseeb1.dev@gmail.com</a>.</p>
    </form>
  );
}
