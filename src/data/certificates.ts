export type Certificate = {
  id: string;
  type: "Certificate" | "Achievement";
  title: string;
  issuer: string;
  /** YYYY-MM */
  issued: string;
  /**
   * Picture of the certificate. Put the file in public/certificates/ and set the path,
   * for example "/certificates/anaconda-ml.jpg". Until it is set, a text card is shown.
   */
  image?: string;
  /** Optional link where someone can verify it. */
  verifyUrl?: string;
};

// Newest first.
export const certificates: Certificate[] = [
  { id: "infosys-ml", type: "Achievement", title: "Machine Learning", issuer: "Infosys", issued: "2026-11", image: "/Certificate/MLinfosys.png", verifyUrl: "https://verify.onwingspan.com/" },
  { id: "hackerrank-SEintern", type: "Achievement", title: "Software Engineer Intern", issuer: "HackerRank", issued: "2026-11", image: "/Certificate/SEintern.png", verifyUrl: "https://www.hackerrank.com/certificates/iframe/ed1fc5a50bb2" },
  { id: "tata-jobSim", type: "Certificate", title: "GenAI Powered Data Analytics Job Simulation", issuer: "Tata", issued: "2026-10", image: "/Certificate/genAijobsim.png", verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6ac7ca0a5970c17a53c4f7a9_1792042330493_completion_certificate.pdf" },
  { id: "anaconda-ml", type: "Certificate", title: "Machine Learning", issuer: "Anaconda Inc.", issued: "2026-07", image: "/Certificate/MLinPython.png", verifyUrl: "https://www.linkedin.com/learning/certificates/f54b26d4cbf9a0b37900338616f5a40536a217fe647a845be3b9489b64f7b758?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B869WQk5RRjyaHYr6CcPEtg%3D%3D" },
  { id: "forage-dataviz", type: "Certificate", title: "Data Visualisation", issuer: "Forage", issued: "2026-07", image: "/Certificate/DataVisual.png", verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_6a3b591401b44209c0991f6b_1783242056491_completion_certificate.pdf" },
  { id: "hackerrank-python", type: "Certificate", title: "Python", issuer: "HackerRank", issued: "2026-05", image: "/Certificate/pythonBasics.png", verifyUrl: "https://www.hackerrank.com/certificates/77db30d75d92" },
];

export function formatIssued(issued: string) {
  return new Date(`${issued}-01T00:00:00Z`).toLocaleString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}