import type { ReactNode } from "react";

export type IconName =
  | "github"
  | "linkedin"
  | "instagram"
  | "x"
  | "mail"
  | "telegram"
  | "phone"
  | "reddit"
  | "external"
  | "eye"
  | "folder"
  | "send";

// Simple outline icons drawn on a 24x24 grid.
const shapes: Record<IconName, ReactNode> = {
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.79 4.79 0 0 0 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4L4 20" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  telegram: (
    <>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  reddit: (
    <>
      <ellipse cx="12" cy="14" rx="8" ry="5.5" />
      <circle cx="4.5" cy="11" r="1.6" />
      <circle cx="19.5" cy="11" r="1.6" />
      <path d="M9 14h.01M15 14h.01" />
      <path d="M9.5 16.6c1.4.9 3.6.9 5 0" />
      <path d="M12 8.5 13 4l4 1" />
      <circle cx="18" cy="5.3" r="1.2" />
    </>
  ),
  external: (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  folder: (
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z" />
  ),
  send: (
    <>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </>
  ),
};

export function Icon({ name, size = 18, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {shapes[name]}
    </svg>
  );
}

type Variant = "primary" | "secondary" | "text" | "plain";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[0.95rem] font-bold text-on-accent hover:brightness-110",
  secondary:
    "inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-[0.95rem] font-semibold text-ink hover:border-muted",
  text: "inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text underline-offset-4 hover:underline",
  plain: "inline-flex items-center gap-3 font-medium underline underline-offset-4 hover:text-accent-text",
};

/** A link with an icon and a name tag. External links open in a new tab safely. */
export function IconLink({
  href,
  icon,
  children,
  variant = "secondary",
  newTab,
}: {
  href: string;
  icon: IconName;
  children: ReactNode;
  variant?: Variant;
  newTab?: boolean;
}) {
  const external = newTab ?? /^https?:/.test(href);
  return (
    <a
      href={href}
      className={styles[variant]}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon name={icon} size={variant === "text" ? 16 : 18} />
      <span>{children}</span>
    </a>
  );
}