import Link from 'next/link';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';

const PHONE_HREF = 'tel:+918376817258';
const WHATSAPP_HREF =
  'https://wa.me/918376817258?text=' +
  encodeURIComponent('Hi Web Leading India Team! I would like to know more about your services.');
// Apne appointment/booking page ka route yahan set karo
const APPOINTMENT_HREF = '/contact';

/**
 * Fixed contact dock.
 *  - Mobile (< md): slim edge-to-edge bar at the bottom (Call Â· WhatsApp Â· Appointment).
 *  - Desktop (â‰¥ md): small icon-only stack at bottom-right with hover tooltips.
 * Mobile par content ke liye `pb-14 md:pb-0` rakhna.
 */
export default function FooterContactBar() {
  return (
    <>
      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€ Mobile: slim bottom bar â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_-10px_rgba(0,0,0,0.2)] backdrop-blur-md md:hidden"
      >
        <div className="grid grid-cols-3 divide-x divide-gray-100">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-1.5 py-3 text-xs font-semibold text-gray-800 active:bg-gray-50"
          >
            <Phone className="h-4 w-4 text-green-600" />
            Call
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 text-xs font-semibold text-gray-800 active:bg-gray-50"
          >
            <MessageCircle className="h-4 w-4 text-green-600" />
            WhatsApp
          </a>
          <Link
            href={APPOINTMENT_HREF}
            className="flex items-center justify-center gap-1.5 bg-green-600 py-3 text-xs font-semibold text-white active:bg-green-700"
          >
            <CalendarCheck className="h-4 w-4" />
            Appointment
          </Link>
        </div>
      </nav>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€ Desktop: compact icon dock â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        aria-label="Quick contact"
        className="fixed bottom-5 right-5 z-40 hidden flex-col gap-2 md:flex"
      >
        {[
          { label: 'WhatsApp', href: WHATSAPP_HREF, icon: MessageCircle, external: true, primary: false },
          { label: 'Call us', href: PHONE_HREF, icon: Phone, external: false, primary: false },
          { label: 'Book appointment', href: APPOINTMENT_HREF, icon: CalendarCheck, external: false, primary: true },
        ].map(({ label, href, icon: Icon, external, primary }) => {
          const cls = `group relative flex h-14 w-14 items-center justify-center rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
            primary
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'border border-gray-200 bg-white text-green-600 hover:border-green-300 hover:bg-green-50'
          }`;
          const inner = (
            <>
              <Icon className="h-[18px] w-[18px]" />
              <span className="pointer-events-none absolute right-full mr-2.5 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {label}
              </span>
            </>
          );
          if (external) {
            return (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={cls}>
                {inner}
              </a>
            );
          }
          return href.startsWith('tel:') ? (
            <a key={label} href={href} aria-label={label} className={cls}>
              {inner}
            </a>
          ) : (
            <Link key={label} href={href} aria-label={label} className={cls}>
              {inner}
            </Link>
          );
        })}
      </div>
    </>
  );
}