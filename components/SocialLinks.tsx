import { contact } from "@/lib/contact";

export default function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`social-links ${className}`}>
      <a
        href={contact.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow AKRA Collection Layan on Facebook"
        className="social-link"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
          <path
            fill="currentColor"
            d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"
          />
        </svg>
        <span>Facebook</span>
      </a>
      <a
        href={contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow AKRA Collection Layan on Instagram"
        className="social-link"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
          <path
            fill="currentColor"
            d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 2.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.5 7a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
          />
        </svg>
        <span>Instagram</span>
      </a>
    </div>
  );
}
