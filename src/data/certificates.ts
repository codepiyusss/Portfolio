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
  { id: "anaconda-ml", type: "Certificate", title: "Machine Learning", issuer: "Anaconda Inc.", issued: "2026-07", image: "", verifyUrl: "" },
  { id: "forage-dataviz", type: "Certificate", title: "Data Visualisation", issuer: "Forage", issued: "2026-07", image: "", verifyUrl: "" },
  { id: "hackerrank-python", type: "Certificate", title: "Python", issuer: "HackerRank", issued: "2026-05", image: "", verifyUrl: "" },
  { id: "hplife-ds", type: "Certificate", title: "Data Science and Analytics", issuer: "HP LIFE", issued: "2026-05", image: "", verifyUrl: "" },
];

export function formatIssued(issued: string) {
  return new Date(`${issued}-01T00:00:00Z`).toLocaleString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}