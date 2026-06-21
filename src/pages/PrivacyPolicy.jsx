import LegalLayout, { H2 } from './LegalLayout.jsx'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 2026">
      <p>
        Mama&apos;s Kitchen (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy
        explains what information we collect when you contact us, place an order, or use our website, and how we use it.
      </p>

      <H2>Information we collect</H2>
      <p>
        When you reach out through our contact form or to place a catering or group order, we may collect your name,
        email address, phone number, ZIP code, and any details you include in your message or photo uploads. We do not
        collect payment card details on this website — online orders and payments are handled by our delivery partners.
      </p>

      <H2>How we use it</H2>
      <p>
        We use your information solely to respond to your inquiry, confirm reservations and catering, and improve our
        service. We never sell your personal information to third parties.
      </p>

      <H2>Cookies &amp; analytics</H2>
      <p>
        Our site may use basic analytics to understand how visitors use the page so we can improve it. You can disable
        cookies in your browser settings at any time without affecting your ability to browse the menu.
      </p>

      <H2>Data retention</H2>
      <p>
        We keep inquiry details only as long as needed to serve you and meet our records obligations, then securely
        delete them.
      </p>

      <H2>Contact</H2>
      <p>
        Questions about your data? Call us at <a className="text-primary font-medium" href="tel:+12602283252">(260) 228-3252</a> or
        email <a className="text-primary font-medium" href="mailto:hello@mamaskitchen-cu.com">hello@mamaskitchen-cu.com</a>.
      </p>
    </LegalLayout>
  )
}
