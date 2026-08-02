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
      "Owned the customer facing transaction and admin dashboards for a product used by 1,000+ people, processing over $15,000 in transaction volume. Because the numbers on screen are someone's money, I treated edge cases and error states as first class work, not follow up fixes.",
      "Built the component and frontend architecture other engineers built on top of, so new dashboard views could ship faster as the product grew.",
      "Worked directly with backend engineers and designers to ship financial workflows, where a UI bug means an incorrect balance, not just a display issue.",
    ],
  },
  {
    company: "Hecord",
    role: "Frontend Engineer",
    start: "DEC 2023",
    end: "JUN 2024",
    bullets: [
      "Built a real time ERP style dashboard for clinics and pharmacies — patient records, prescriptions, inventory, and billing all live in the same view, updating as staff worked instead of requiring a page refresh.",
      "Held the interface to WCAG 2.1 AA and optimised it for low bandwidth connections, because the clinics running it weren't on reliable fiber. Without that work, staff would have avoided the tool instead of using it.",
      "Built the inventory and revenue analytics tracking drug sales and operational metrics, giving pharmacy staff visibility they'd previously had to reconstruct by hand.",
    ],
  },
  {
    company: "AuditBar",
    role: "Frontend Engineer",
    start: "JAN 2023",
    end: "DEC 2023",
    bullets: [
      "Built a mobile first storefront that became the primary sales channel for 500+ customers.",
      "Designed and built an automated invoicing system that replaced manual payment follow up, which was part of what drove the increase below.",
      "Translated Figma designs into production interfaces while keeping the design system consistent as the storefront grew.",
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
