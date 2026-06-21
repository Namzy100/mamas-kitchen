import LegalLayout, { H2 } from './LegalLayout.jsx'

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="June 2026">
      <p>
        Welcome to Mama&apos;s Kitchen. By using this website and placing orders or reservations with us, you agree to
        the following terms.
      </p>

      <H2>Orders &amp; availability</H2>
      <p>
        Menu items, prices, and availability may change without notice and can vary between dine-in, pickup, and
        delivery. Prices shown on third-party delivery platforms may differ from in-store pricing. We do our best to keep
        the menu on this site accurate.
      </p>

      <H2>Reservations &amp; catering</H2>
      <p>
        Reservation and catering requests submitted through this site are inquiries, not confirmed bookings, until a
        member of our team confirms with you directly. Large group and thali orders may require advance notice.
      </p>

      <H2>Allergens</H2>
      <p>
        Our food is prepared in a kitchen that handles dairy, nuts, gluten, and other allergens. If you have a dietary
        restriction, please tell us before ordering and we&apos;ll help you find a dish that works for you.
      </p>

      <H2>Delivery</H2>
      <p>
        Delivery is fulfilled within our service area during posted hours. Delivery fees and service fees are set by our
        delivery partners and shown at checkout.
      </p>

      <H2>Limitation of liability</H2>
      <p>
        This website is provided &ldquo;as is.&rdquo; Mama&apos;s Kitchen is not liable for indirect or incidental damages
        arising from use of the site to the fullest extent permitted by law.
      </p>

      <H2>Contact</H2>
      <p>
        Questions about these terms? Call <a className="text-primary font-medium" href="tel:+12602283252">(260) 228-3252</a> or
        visit us at 134 E University Ave, Champaign, IL 61820.
      </p>
    </LegalLayout>
  )
}
