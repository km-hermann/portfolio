import { Navbar } from "@/components/navbar";
import ShapeHero from "@/components/ui/shape-hero";
import CardStack from "@/components/ui/card-stack";
import SpotlightCards from "@/components/ui/spotlight-cards";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import MouseEffectCard from "@/components/ui/mouse-effect-card";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { Footer } from "@/components/footer";
import { AnimeScrollAccent } from "@/components/ui/anime-accent";
import {
  ArrowDown,
  ArrowRight,
  Clock,
  Download,
  Globe2,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#060513] text-zinc-100 relative selection:bg-indigo-600 selection:text-white">
      {/* Global Background Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/15 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[500px] bg-violet-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] -left-40 w-[600px] h-[500px] bg-amber-900/10 blur-[160px] rounded-full" />
      </div>

      {/* Sticky Header */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 1. HERO SECTION */}
        <section id="hero" aria-label="Introduction">
          <ShapeHero
            title1="[PLACEHOLDER - Hermann Mea (KMH)]"
            title2="[PLACEHOLDER - Software Engineer & Systems Builder]"
            subtitle="[PLACEHOLDER - Architecting scalable web systems, event-driven backends, and bespoke digital experiences. Focused on predictable state, performance, and clean design.]"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-linear-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                download="KMH_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold border border-indigo-500/30 bg-indigo-950/40 text-indigo-200 hover:bg-indigo-900/50 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Download className="h-3.5 w-3.5 text-amber-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <span>Get In Touch</span>
                <ArrowDown className="h-3.5 w-3.5 text-zinc-500" />
              </a>
            </div>
          </ShapeHero>
        </section>

        {/* Anime.js Scroll Indicator & Divider */}
        <div className="-mt-6 mb-8 relative z-20 flex justify-center">
          <AnimeScrollAccent />
        </div>

        {/* 2. FEATURED PROJECTS TEASER */}
        <section
          id="featured"
          className="py-16 relative overflow-hidden"
          aria-labelledby="featured-heading"
        >
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center space-y-2 mb-10">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400 uppercase tracking-[0.25em]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Featured Teaser</span>
              </div>
              <h2
                id="featured-heading"
                className="font-bold text-3xl md:text-4xl text-white tracking-tight"
              >
                Flagship Implementations
              </h2>
              <p className="text-sm text-zinc-400 max-w-lg mx-auto font-light">
                Key production projects dynamically loaded from data. Click the stack to expand and explore specifications.
              </p>
            </div>

            {/* Dynamic CardStack pulling only featured projects */}
            <CardStack />
          </div>
        </section>

        {/* 3. FULL PROJECTS GRID */}
        <ProjectsSection />

        {/* 4. SKILLS SECTION */}
        <section
          id="skills"
          className="py-20 relative"
          aria-labelledby="skills-heading"
        >
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <SpotlightCards
              eyebrow="Technical Arsenal"
              heading="Skills, Languages & Technologies"
            />
          </div>
        </section>

        {/* 5. ABOUT & RESUME SECTION */}
        <AboutSection />

        {/* 6. CONTACT / CLOSING CTA SECTION */}
        <section
          id="contact"
          className="py-24 relative overflow-hidden"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="text-center space-y-2 mb-12">
              <p className="font-mono text-xs text-amber-400 uppercase tracking-[0.25em]">
                Let&apos;s Build Something Exceptional
              </p>
              <h2
                id="contact-heading"
                className="font-bold text-3xl md:text-4xl text-white tracking-tight"
              >
                Start a Conversation
              </h2>
              <p className="text-sm text-zinc-400 max-w-md mx-auto font-light">
                Whether you have an open engineering role, a distributed architecture to solve, or a partnership inquiry.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              {/* Interactive MouseEffectCard */}
              <MouseEffectCard
                title="Let's work together"
                subtitle="[PLACEHOLDER - Open for software engineering roles, high-throughput web system builds, and technical collaborations.]"
                topText="Status: Available"
                topSubtext="Full-Time & Project Engagements"
                primaryCtaText="Send an Email"
                primaryCtaUrl="mailto:kmh@example.com?subject=Project%20Inquiry%20from%20Portfolio"
                secondaryCtaText="GitHub Profile"
                secondaryCtaUrl="https://github.com/[PLACEHOLDER-USER]"
                tertiaryCtaText="LinkedIn"
                tertiaryCtaUrl="https://linkedin.com/in/[PLACEHOLDER-USER]"
                footerText="Designed & Built by Hermann Mea (KMH) • Next.js & Kokonut UI"
              />

              {/* LiquidGlassCard for Direct Info */}
              <LiquidGlassCard
                glassSize="sm"
                className="w-full max-w-2xl border-indigo-500/20 bg-slate-950/70"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                  <div className="flex items-center gap-3 p-2">
                    <div className="h-9 w-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4 text-amber-400" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-zinc-400 uppercase">
                        Email Address
                      </span>
                      <a
                        href="mailto:kmh@example.com"
                        className="text-xs font-medium text-white hover:text-amber-400 transition-colors"
                      >
                        [PLACEHOLDER: kmh@example.com]
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2">
                    <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                      <Globe2 className="h-4 w-4 text-indigo-400" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-zinc-400 uppercase">
                        Location & Time
                      </span>
                      <span className="text-xs font-medium text-white">
                        [PLACEHOLDER: Remote / GMT+1]
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2">
                    <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-zinc-400 uppercase">
                        Response Time
                      </span>
                      <span className="text-xs font-medium text-white">
                        Within 24 Hours
                      </span>
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </section>
      </main>

      {/* Semantic Accessible Footer */}
      <Footer />
    </div>
  );
}
