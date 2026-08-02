import InfiniteMarquee from "@/components/InfiniteMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const workOptions = [
  "JavaScript  ",
  "*",
  "TypeScript",
  "*",
  "React",
  "*",
  "Next.js",
  "*",
  "NestJS",
  "*",
  "NodeJS",
  "*",
];

type Project = {
  index: string;
  name: string;
  description: string;
  stack: string[];
  live?: string;
  repo?: string;
  status?: string;
};

const projects: Project[] = [
  {
    index: "01",
    name: "Ligature",
    description:
      "Share one link and play a full game of Scrabble with a friend, no signup, no lobby, real board rules and dictionary validation enforced as you move. I built it to answer a specific question: can a browser game feel instant without trusting the client. The rules engine is framework free and shared between a NestJS + WebSocket server, which stays the single source of truth on game state, and the React client, which runs the same engine locally so your own move lands immediately instead of waiting on a round trip.",
    stack: ["React", "NestJS", "WebSockets", "Drizzle ORM", "PostgreSQL", "TypeScript"],
    live: "https://ligature-server.onrender.com/",
    repo: "https://github.com/ASANIYAN/Ligature",
  },
  {
    index: "02",
    name: "Unred",
    description:
      "An online editorial magazine platform built for a corporate manager in the entertainment industry, with a structured content submission and publishing workflow so a non-technical editorial team could take a piece from draft to published without touching code. Built on Next.js with a Sanity backed CMS, the brief came with real deadlines and a real editorial team, so the CMS structure mattered as much as the front end.",
    stack: ["Next.js", "TypeScript", "GSAP", "Sanity"],
    live: "https://unred.co",
    status: "Contracted client work",
  },
  {
    index: "03",
    name: "Meridian",
    description:
      "Edit the same document as someone else and watch their changes land in real time, Google Docs style, plus an AI assistant that edits the document directly through the same sync layer instead of just replying in a side panel. Yjs resolves conflicting edits locally, and Redis pub/sub keeps every server instance in sync, so it holds up across more than one server instead of only working in a single-process demo.",
    stack: ["React", "NestJS", "Yjs / CRDT", "Redis", "PostgreSQL", "WebSockets"],
    live: "https://meri-dian.vercel.app",
    repo: "https://github.com/ASANIYAN/Meridian",
  },
  {
    index: "04",
    name: "Lyncs",
    description:
      "A URL shortener that tracks every click without slowing down the redirect. Redis Streams queues clicks to a dedicated worker so the redirect itself stays fast regardless of how much analytics processing is happening behind it, while a modular NestJS monolith on Fastify serves the dashboard. JWT + OTP authentication with refresh tokens keeps accounts secure.",
    stack: ["React", "NestJS", "Fastify", "Redis", "PostgreSQL"],
    live: "https://lyncss.vercel.app/",
    repo: "https://github.com/ASANIYAN/lyncs-frontend",
  },
  {
    index: "05",
    name: "Payment Gateway",
    description:
      "A payment processing API with a state machine for the payment lifecycle, idempotency keys so a retried request can't double charge, a circuit breaker around external bank calls, and background jobs that recover payments stuck mid-flow. No production traffic behind this one — it's a systems design exercise I built to work through the failure modes that don't show up until real money is involved.",
    stack: ["Express", "TypeScript", "PostgreSQL"],
    repo: "https://github.com/ASANIYAN/payment-gateway",
  },
  {
    index: "06",
    name: "MagikInterior",
    description:
      "An AI interior design tool: upload a photo of a room, choose a style, get a generated redesign back through the Replicate API. The generation calls are slow and occasionally fail, so most of the work went into handling that without freezing the interface, and giving users a clear sense of what's happening while they wait.",
    stack: ["React", "TanStack Query", "Express", "PostgreSQL", "Replicate API"],
    live: "https://magikinterior.com/",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="works"
      className="mt-[72px] md:mt-[200px] w-full max-w-[1400px] mx-auto"
    >
      <div className="border-y border-y-black">
        <InfiniteMarquee
          images={[]}
          duration={10}
          texts={workOptions}
          textClassName="text-black text-[92px] uppercase"
        />
      </div>

      <section className="mt-20 md:mt-32 border-t border-t-black">
        {projects.map((project) => (
          <div
            key={project.name}
            className="project-card border-b border-b-black py-8 md:py-10 px-5 md:px-8 grid grid-cols-1 md:grid-cols-[64px_1fr] gap-x-6 gap-y-4"
          >
            <span className="label-mono text-sm text-muted-text">
              {project.index}
            </span>

            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-3xl md:text-4xl font-light">
                  {project.name}
                </h3>
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.live}
                      className="label-mono bracket-label press hover-ink text-sm text-muted-text"
                    >
                      Live Site
                    </a>
                  )}
                  {project.repo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.repo}
                      className="label-mono bracket-label press hover-ink text-sm text-muted-text"
                    >
                      View Repo
                    </a>
                  )}
                </div>
              </div>

              <p className="font-light max-w-[640px] text-sm md:text-base">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 label-mono text-xs uppercase text-muted-text">
                {project.stack.map((tech) => (
                  <li key={tech} className="bracket-label">
                    {tech}
                  </li>
                ))}
                {project.status && (
                  <li className="bracket-label diff-added">{project.status}</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Works;
