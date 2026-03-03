import { FadeIn } from "@/components/fade-in";
import { DownloadIcon, ExternalLinkIcon } from "@/components/icons";

const PROOF_POINTS = [
  {
    metric: "~$1M",
    subtitle: "incremental ARR/year proven by AB tests",
  },
  {
    metric: "6+ years",
    subtitle: "at Prezi: data \u2192 product",
  },
  {
    metric: "PhD",
    subtitle: "in Management Sciences, Summa cum laude",
  },
  {
    metric: "50+",
    subtitle: "AB tests shipped end-to-end",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-20">
      <FadeIn>
        <p className="font-serif text-3xl md:text-4xl leading-relaxed text-text">
          Experienced product analyst and product manager. Well versed in quantitative
          and qualitative research and experiment methodologies. Proven record of turning
          data-driven hypotheses, customer behaviour signals and customer feedback into revenue.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {PROOF_POINTS.map((point) => (
            <div
              key={point.metric}
              className="bg-card rounded-2xl p-5 hover:bg-card-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <p className="font-serif text-2xl text-accent">{point.metric}</p>
              <p className="text-sm text-text-muted mt-1 leading-snug">{point.subtitle}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="/resume/Resume_Levente_Dudas.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <DownloadIcon />
            Full resume (PDF)
          </a>
          <a
            href="https://www.linkedin.com/in/levente-l%C3%A1szl%C3%B3-dud%C3%A1s-8261a053/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ExternalLinkIcon />
            LinkedIn profile
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
