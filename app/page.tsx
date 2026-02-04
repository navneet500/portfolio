/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,116,144,0.18),_transparent_55%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-28 md:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Modern Portfolio
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Avery Chen
              <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Product Designer & Frontend Engineer
              </span>
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted md:text-xl"
          >
            I craft premium, human-centered digital products for fintech and
            enterprise teams—blending design precision, strategic thinking, and
            modern engineering.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button size="lg">View Work</Button>
            <Button size="lg" variant="secondary">
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-panel rounded-3xl p-10 md:p-14"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">
                About
              </p>
              <h2 className="text-3xl font-semibold text-foreground">
                Strategic design leadership for ambitious teams.
              </h2>
              <p className="text-base text-muted md:text-lg">
                With 9+ years of experience, I partner with executive
                stakeholders to translate complex requirements into elegant,
                revenue-driving experiences. My focus is on scalable systems,
                clean interfaces, and motion that elevates the brand without
                distraction.
              </p>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="grid gap-3"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-foreground/80 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-foreground"
                >
                  <span>{skill}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    Expert
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">
                Experience
              </p>
              <h2 className="text-3xl font-semibold text-foreground">
                Featured work with measurable impact.
              </h2>
            </div>
            <Button variant="ghost">View all projects</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-panel group rounded-3xl p-6"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge
                        key={item}
                        className="group-hover:border-white/30 group-hover:text-foreground"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-32 pt-10 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-10 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Contact
            </p>
            <h2 className="text-3xl font-semibold text-foreground">
              Let&apos;s build something exceptional.
            </h2>
            <p className="text-base text-muted">
              Available for select collaborations, consulting, and executive
              advisory. Reach out for product strategy, design systems, or
              frontend leadership.
            </p>
            <div className="space-y-2 text-sm text-muted">
              <p>
                Email:{" "}
                <a
                  className="text-foreground transition hover:text-white"
                  href="mailto:hello@averychen.com"
                >
                  hello@averychen.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  className="text-foreground transition hover:text-white"
                  href="https://www.linkedin.com"
                >
                  linkedin.com/in/averychen
                </a>
              </p>
            </div>
          </div>
          <form className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-2">
              <label className="text-sm text-muted" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/30"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/30"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project."
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/30"
              />
            </div>
            <Button className="w-full" type="submit">
              Send message
            </Button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
