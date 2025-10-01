import { ContactOptions } from "@/components/contact/ContactOptions";
import { ContactForm } from "@/components/contact/ContactForm";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export const metadata = {
  title: "Contact",
  description: "Collaborate on immersive product experiences, platform tooling, and animation systems.",
};

export default async function ContactPage() {
  const { contacts, contactPage } = await getPortfolioData();

  return (
    <div>
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">{contactPage.title}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          {contactPage.headline}
        </h1>
        <p className="mt-4 text-sm text-muted">{contactPage.description}</p>
      </header>

      <ContactOptions options={contacts} />
      <ContactForm />

      <section className="mt-16 rounded-3xl border border-[color:var(--color-accent)/.2] bg-[color:var(--color-background)/.6] p-10">
        <h2 className="text-2xl font-semibold text-white">Collaboration kit</h2>
        <ul className="mt-4 grid gap-4 text-sm text-muted md:grid-cols-3">
          {contactPage.collaborationKit.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-[color:var(--color-border)]/40 bg-black/30 p-4"
            >
              - {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
