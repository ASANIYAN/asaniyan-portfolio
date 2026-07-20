type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  delta?: { sign: "added" | "removed"; text: string };
};

const experience: ExperienceEntry[] = [
  {
    company: "Sharperly",
    role: "Frontend Engineer",
    start: "JUN 2024",
    end: "MAY 2026",
    bullets: [
      "Owned development of customer facing transaction and administrative dashboards used in production.",
      "Built reusable React components and frontend architecture to improve scalability and maintainability.",
      "Collaborated with backend engineers and designers to deliver secure financial workflows.",
    ],
  },
  {
    company: "Hecord",
    role: "Frontend Engineer",
    start: "DEC 2023",
    end: "JUN 2024",
    bullets: [
      "Built a responsive ERP style dashboard for clinics and pharmacies, real time patient records, prescriptions, inventory, billing, and operational analytics.",
      "Improved accessibility and performance with low bandwidth optimisations, adhering strictly to WCAG 2.1 AA standards.",
      "Developed inventory and revenue analytics tracking drug sales and operational metrics.",
    ],
  },
  {
    company: "AuditBar",
    role: "Frontend Engineer",
    start: "JAN 2023",
    end: "DEC 2023",
    bullets: [
      "Built a mobile optimised, high conversion storefront experience.",
      "Designed and engineered an automated customer invoicing system that streamlined payment workflows.",
      "Translated Figma designs into responsive, production ready interfaces while maintaining design system consistency.",
    ],
    delta: { sign: "added", text: "3x increase in client inbound sales opportunities" },
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-[1400px] mx-auto mt-16 md:mt-[88px] px-5 text-text"
    >
      <h2 className="label-mono text-sm uppercase text-muted-text mb-8">
        Work Experience
      </h2>

      <div className="border-t border-t-black">
        {experience.map((entry, index) => (
          <div
            key={entry.company}
            className="border-b border-b-black py-6 md:py-8 grid grid-cols-1 md:grid-cols-[64px_1fr_auto] gap-x-6 gap-y-3"
          >
            <span className="label-mono text-sm text-muted-text">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <p className="font-display text-2xl md:text-3xl font-light">
                {entry.company}
              </p>
              <p className="label-mono text-sm text-muted-text mt-1">
                {entry.role}
              </p>
            </div>

            <span className="label-mono bracket-label text-sm text-muted-text md:text-right">
              {entry.start} — {entry.end}
            </span>

            <div className="md:col-start-2 md:col-span-2 space-y-2 mt-2">
              <ul className="space-y-1.5 font-light text-sm md:text-base">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {entry.delta && (
                <p
                  className={`label-mono text-sm ${
                    entry.delta.sign === "added" ? "diff-added" : "diff-removed"
                  }`}
                >
                  {entry.delta.sign === "added" ? "+ " : "− "}
                  {entry.delta.text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
