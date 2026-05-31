import { quickEnquiryUrl } from "@/lib/whatsapp";
import Icon from "@/components/Icon";

/** Persistent floating WhatsApp button — always-available conversion point. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={quickEnquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-105"
    >
      <Icon name="whatsapp" className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">Chat with us</span>
      {/* pulse ring */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 group-hover:hidden" />
    </a>
  );
}
