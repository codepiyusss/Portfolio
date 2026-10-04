import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Piyush Tiwari",
  description: "How this portfolio website handles your personal information.",
};

const EMAIL = "info.contactpiyush@gmail.com";

export default function PrivacyPage() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-brand-text">
        <Link href="/" className="text-sm font-bold underline underline-offset-4 hover:text-brand-accent">
          Back to portfolio
        </Link>

        <h1 className="mt-8 text-4xl md:text-5xl font-black">Privacy Policy</h1>
        <p className="mt-3 text-brand-text/60">Last updated: October 4, 2026</p>

        <div className="mt-10 space-y-10 leading-relaxed text-brand-text/80">
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">Who I am</h2>
            <p>
              This is the personal portfolio website of Piyush Tiwari. I am the person responsible for any
              personal information collected through it. You can reach me at{" "}
              <a className="underline hover:text-brand-accent" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">What I collect</h2>
            <p className="mb-3">
              The only personal information I collect is what you type into the contact form:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The message you write</li>
            </ul>
            <p className="mt-3">
              Like most websites, the hosting provider may also record basic technical data such as IP address,
              browser type and request time in server logs, for security and reliability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">How I use it</h2>
            <p>
              I use your details only to read your message and reply to you. I do not sell your information, I do
              not use it for advertising, and I do not add you to any mailing list.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">How your message is delivered</h2>
            <p>
              When you submit the form, your message is sent through this site&apos;s server to an email delivery
              service (Resend), which forwards it to my inbox. The message then lives in my email account. The
              site itself does not keep a database of submissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">Cookies and local storage</h2>
            <p>
              This site does not use advertising or tracking cookies. Your browser may store small preferences on
              your own device, such as your light or dark theme choice. These stay on your device and are not sent
              to me.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">Service providers</h2>
            <p>
              The site is hosted on Vercel, and contact messages are delivered through Resend. These providers
              process data on my behalf and have their own privacy policies. Links to other websites, such as
              GitHub or LinkedIn, are governed by those sites&apos; own policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">How long I keep your message</h2>
            <p>
              I keep messages for as long as needed to respond and for reasonable record keeping, then delete them.
              You can ask me to delete your message at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">Your rights</h2>
            <p>
              You can ask to see, correct or delete the personal information I hold about you by emailing{" "}
              <a className="underline hover:text-brand-accent" href={`mailto:${EMAIL}`}>{EMAIL}</a>. I will respond
              as soon as I reasonably can.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">Children</h2>
            <p>This site is not directed at children, and I do not knowingly collect information from them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-3">Changes to this policy</h2>
            <p>
              If I change how the site handles personal information, I will update this page and the date at the top.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
