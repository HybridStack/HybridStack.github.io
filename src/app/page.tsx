"use client";

import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { FAQAccordion } from "@/components/sections/FAQ";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";

const sampleProjects = [
  {
    name: "QuickCopy",
    description: "A fast clipboard manager for developers.",
    language: "TypeScript",
    url: "https://github.com/HybridStack/QuickCopy",
    color: "#3178c6",
  },
  {
    name: "promptly",
    description: "AI prompt management tool.",
    language: "TypeScript",
    url: "https://github.com/HybridStack/promptly",
    color: "#3178c6",
  },
  {
    name: "quick-foto",
    description: "Photo utility app for quick image processing.",
    language: "JavaScript",
    url: "https://github.com/HybridStack/quick-foto",
    color: "#f1e05a",
  },
  {
    name: "GridCopy",
    description: "Grid-based clipboard utility for organized copying.",
    language: "Python",
    url: "https://github.com/HybridStack/GridCopy",
    color: "#3572A5",
  },
];

const learningItems = [
  { name: "Rust", desc: "Systems programming & WebAssembly", progress: 65, emoji: "🦀" },
  { name: "React Native", desc: "Cross-platform mobile development", progress: 50, emoji: "⚛️" },
  { name: "Machine Learning", desc: "TensorFlow, PyTorch basics", progress: 35, emoji: "🤖" },
  { name: "Solidity", desc: "Smart contract development", progress: 25, emoji: "⛓️" },
];

const experienceItems = [
  {
    role: "Full-Stack Developer",
    company: "Freelance / Self-Employed",
    period: "2024 — Present",
    desc: "Building production web apps with React, Node.js, and TypeScript for diverse clients.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    role: "Web Developer",
    company: "Agency Projects",
    period: "2022 — 2024",
    desc: "Delivered responsive dashboards, landing pages, and full-stack web applications.",
    tags: ["Next.js", "Tailwind", "MongoDB", "REST APIs"],
  },
  {
    role: "Junior Developer",
    company: "Tech Startup",
    period: "2020 — 2022",
    desc: "Built and maintained frontend features, collaborated on API design, and contributed to internal tools.",
    tags: ["JavaScript", "Vue.js", "Python", "Firebase"],
  },
];

const skills = ["ts", "js", "react", "nextjs", "nodejs", "python", "tailwind", "git", "github", "vscode"];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black pb-16">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section id="home" className="content-section pt-32 pb-16 text-center px-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Available for work</p>
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">Tariq Mahmood</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-2">
          Full-stack developer · TypeScript enthusiast · Building things that matter
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <a href="#projects" className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      <main id="main" className="flex-1 w-full max-w-5xl mx-auto px-6 pb-12">
        {/* About Section */}
        <section id="about" className="content-section mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">About</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
              I&apos;m a developer focused on building practical tools and clean web experiences. I work across TypeScript, JavaScript, and modern web frameworks to ship real products.
            </p>
            <div className="flex gap-8 mb-8">
              {[
                { num: "3+", label: "Years Experience" },
                { num: "15+", label: "Projects Built" },
                { num: "10+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white">{stat.num}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {skills.map((s) => (
                <img key={s} src={`https://skillicons.dev/icons?i=${s}&theme=light`} alt={s} className="h-10 dark:hidden" />
              ))}
              {skills.map((s) => (
                <img key={`d-${s}`} src={`https://skillicons.dev/icons?i=${s}&theme=dark`} alt={s} className="h-10 hidden dark:block" />
              ))}
            </div>
          </div>
        </section>

        {/* Learning Section */}
        <section id="learning" className="content-section mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Currently Learning</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {learningItems.map((item) => (
                <div key={item.name} className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">{item.name}</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div className="h-full bg-zinc-900 dark:bg-white rounded-full transition-all" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="content-section mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Experience</h2>
            <div className="space-y-6">
              {experienceItems.map((job) => (
                <div key={job.role} className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-700">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900 dark:bg-white" />
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">{job.period}</p>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{job.role}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{job.company}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-3">{job.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {job.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="content-section mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Projects Currently Building</h2>
            <ProjectsGrid projects={sampleProjects} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">FAQ</h2>
            <FAQAccordion
              items={[
                { question: "What technologies do you use?", answer: "TypeScript, React, Next.js, Node.js, Python, Tailwind CSS, PostgreSQL, and various cloud platforms." },
                { question: "Are you available for freelance work?", answer: "Yes! Feel free to reach out via WhatsApp, Discord, or email. I'm currently available for new projects." },
                { question: "Do you accept open source contributions?", answer: "Absolutely. Check out the projects on GitHub and feel free to open a PR." },
              ]}
            />
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="content-section mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 text-center">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Newsletter</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">Stay updated with my latest projects and articles.</p>
            <NewsletterSignup />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="content-section mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 text-center">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Let&apos;s Connect</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
              Ready to bring your ideas to life? Let&apos;s discuss how we can create something amazing together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://wa.me/923017322984" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-green-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
                WhatsApp
              </a>
              <a href="https://discord.com/users/@CryptoTariq" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
                Discord
              </a>
              <a href="https://github.com/HybridStack" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition-opacity">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/chtariq" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-blue-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
                LinkedIn
              </a>
              <a href="https://x.com/Tariq_Stack" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-black dark:bg-zinc-700 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
                X
              </a>
              <a href="mailto:tariq@omail.sh" className="px-5 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          © 2026 Tariq Mahmood
        </p>
      </footer>
    </div>
  );
}