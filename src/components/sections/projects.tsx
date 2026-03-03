import { FadeIn } from "@/components/fade-in";
import { ExternalLinkIcon } from "@/components/icons";

interface Project {
  title: string;
  emoji: string;
  what: string;
  why: string;
  builtWith: string;
  link?: string;
  comingSoon?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Wine Taste Game",
    emoji: "\uD83C\uDF77",
    what: "An online, customized version of a physical game to gamify wine tasting events with friends.",
    why: "Wanted to bring our favorite party game online so we could play remotely too.",
    builtWith: "Lovable",
    link: "https://wine-taste-game.lovable.app",
  },
  {
    title: "Coming soon",
    emoji: "\uD83D\uDD27",
    what: "New project in the works.",
    why: "",
    builtWith: "",
    comingSoon: true,
  },
  {
    title: "Coming soon",
    emoji: "\uD83D\uDCA1",
    what: "Another idea brewing.",
    why: "",
    builtWith: "",
    comingSoon: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <FadeIn>
        <h2 className="font-serif text-2xl md:text-3xl mb-2">Weekend Experiments</h2>
        <p className="text-text-muted mb-8">Side projects built to scratch an itch.</p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.title + i} delay={i * 100}>
            <div
              className={`bg-card rounded-2xl p-6 h-full flex flex-col transition-all duration-300 ${
                project.comingSoon
                  ? "opacity-50 border-2 border-dashed border-border"
                  : "hover:bg-card-hover hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <p className="text-2xl mb-3">{project.emoji}</p>
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{project.what}</p>

              {!project.comingSoon && (
                <>
                  <p className="text-sm mt-3">
                    <span className="text-text-muted">The itch: </span>
                    {project.why}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-xs bg-bg rounded-lg px-2.5 py-1 text-text-muted">
                      {project.builtWith}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                      >
                        Try it <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
