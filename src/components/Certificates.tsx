import { certificates } from "@/data/certificates";
import CertificateGallery from "./CertificateGallery";
import { Section } from "./Section";

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates and achievements" count={certificates.length}>
      <p className="mb-8 max-w-xl text-muted">Select a card to view it larger.</p>
      <CertificateGallery items={certificates} />
    </Section>
  );
}