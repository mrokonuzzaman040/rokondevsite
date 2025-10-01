import Link from "next/link";

const socials = [
  { href: "https://github.com/rokondev", label: "GitHub" },
  { href: "https://www.linkedin.com/in/rokondev", label: "LinkedIn" },
  { href: "mailto:hello@rokon.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-6xl border-t border-[color:var(--color-border)]/70 px-6 py-10 text-sm text-muted">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs uppercase tracking-[0.4em]">Crafted in motion</p>
        <div className="flex items-center gap-6">
          {socials.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-white"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs text-muted/70">
        © {new Date().getFullYear()} Rokon. Engineering products with empathy and immersive storytelling.
      </p>
    </footer>
  );
}
