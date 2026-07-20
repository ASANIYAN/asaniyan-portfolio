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
      "A real-time multiplayer Scrabble implementation with real board rules, scoring, and dictionary validation. Two players share a link to play, no signup required. Pnpm workspace split into a framework-free rules engine, a NestJS + WebSocket server that holds authoritative game state, and a React client that runs the same engine locally for instant feedback.",
    stack: ["React", "NestJS", "WebSockets", "Drizzle ORM", "PostgreSQL", "TypeScript"],
    live: "https://ligature-server.onrender.com/",
    repo: "https://github.com/ASANIYAN/Ligature",
  },
  {
    index: "02",
    name: "Meridian",
    description:
      "A real-time collaborative document editor — Google Docs–style continuous prose. Yjs CRDT sync over WebSocket, Redis pub/sub fan-out across server instances, and an AI chatbot that edits documents directly via Yjs operations.",
    stack: ["React", "NestJS", "Yjs / CRDT", "Redis", "PostgreSQL", "WebSockets"],
    live: "https://meri-dian.vercel.app",
    repo: "https://github.com/ASANIYAN/Meridian",
  },
  {
    index: "03",
    name: "Lyncs",
    description:
      "Production-grade URL shortener and analytics platform. Modular NestJS monolith on Fastify, Redis Streams for async click-tracking with a dedicated worker process, JWT + OTP authentication with refresh tokens.",
    stack: ["React", "NestJS", "Fastify", "Redis", "PostgreSQL"],
    live: "https://lyncss.vercel.app/",
    repo: "https://github.com/ASANIYAN/lyncs-frontend",
  },
  {
    index: "04",
    name: "Payment Gateway",
    description:
      "A payment processing API with a domain-driven, layered architecture: state-machine payment lifecycle, idempotency keys, circuit breaker for external bank calls, and background jobs for stuck-payment recovery.",
    stack: ["Express", "TypeScript", "PostgreSQL"],
    repo: "https://github.com/ASANIYAN/payment-gateway",
  },
  {
    index: "05",
    name: "MagikInterior",
    description:
      "AI-powered interior design platform — users upload imagery, choose design criteria, and get instant AI-generated visual feedback via Replicate API integrations.",
    stack: ["React", "TanStack Query", "Express", "PostgreSQL", "Replicate API"],
    live: "https://magikinterior.com/",
  },
  {
    index: "06",
    name: "Unred",
    description:
      "An online editorial magazine platform with a structured content submission and publishing workflow — built on Next.js with a Sanity-backed CMS.",
    stack: ["Next.js", "TypeScript", "GSAP", "Sanity"],
    live: "https://unred.co",
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
