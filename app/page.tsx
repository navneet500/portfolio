"use client";

import Image from "next/image";
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

const highlights = [
  {
    label: "Experience",
    value: "3+ years",
    detail: "Cloud data pipelines at scale"
  },
  {
    label: "Certifications",
    value: "3x AWS",
    detail: "Cloud Practitioner · Developer · AI"
  },
  {
    label: "Focus",
    value: "Risk analytics",
    detail: "Consumer banking data products"
  }
];

const expertise = [
  "Cloud data & AI engineer delivering billions of records across AWS-based platforms.",
  "Hands-on with Python, SQL, dbt-core, Airflow, Databricks, Redshift, Snowflake, Athena, and S3 data lakes.",
  "Modernized legacy ETL into modular pipelines with measurable performance gains.",
  "Led POCs for DBT + AWS integration, Iceberg evaluation, and Airflow/Step Functions orchestration.",
  "Collaborative leader translating business needs into data contracts and analytics-ready models."
];

const skills = [
  {
    title: "Languages",
    items: [
      "Python",
      "PySpark",
      "SQL",
      "Shell Scripting",
      "C++",
      "TypeScript",
      "React",
      "HTML/CSS"
    ]
  },
  {
    title: "Cloud & Databases",
    items: [
      "AWS EC2, S3, Lambda",
      "Step Functions",
      "Glue",
      "Redshift",
      "DynamoDB",
      "PostgreSQL",
      "MySQL",
      "Athena"
    ]
  },
  {
    title: "Data Platforms",
    items: [
      "DBT",
      "Databricks",
      "Airflow",
      "Tivoli Workload Scheduler",
      "Snowflake",
      "Teradata",
      "Iceberg",
      "S3 Data Lakes"
    ]
  },
  {
    title: "Tools & Frameworks",
    items: ["Flask", "FastAPI", "GitHub", "Bitbucket", "Docker", "GitLab"]
  },
  {
    title: "Foundations",
    items: [
      "Data Modeling",
      "DBMS",
      "Linux",
      "Data Structures",
      "ETL/ELT Patterns"
    ]
  },
  {
    title: "DevOps & CI/CD",
    items: ["GitLab CI/CD", "Jenkins", "GitHub Actions", "Docker"]
  },
  {
    title: "Big Data & Storage",
    items: [
      "Hadoop",
      "Teradata",
      "Snowflake",
      "S3 Pipelines",
      "ETL/ELT Patterns"
    ]
  }
];

const aboutNarrative = [
  "Cloud Data and AI Engineer with 3 years of experience designing, building, and optimizing cloud-native data pipelines for consumer banking risk, working on datasets that scale to billions of records across AWS-based platforms.",
  "Strong hands-on expertise across Python, SQL, dbt-core, Airflow, Databricks, Redshift, Snowflake, Athena, and S3-based data lakes, with a track record of modernizing legacy ETL into modular pipelines and improving execution performance.",
  "Three-times AWS certified and known as a collaborative, solutions-focused engineer who translates ambiguous business requirements into clear data contracts, resilient pipelines, and analytics-ready models."
];

const experience = [
  {
    role: "Senior Software Engineer – BA4",
    company: "Barclays Technology Centre India, Pune",
    timeline: "Mar 2025 – Present",
    points: [
      "Led design and optimization of cloud-native data pipelines on AWS for the Credit Risk Data Warehouse, processing millions of records daily.",
      "Modernized CI/CD workflows by migrating to GitLab pipelines and containerized AWS deployments, improving release reliability and speed by 90%.",
      "Championed experimentation with Airflow, Databricks, and Iceberg to inform next-gen risk data platform strategy."
    ]
  },
  {
    role: "Software Engineer – BA3",
    company: "Barclays Technology Centre India, Pune",
    timeline: "Jul 2023 – Mar 2025",
    points: [
      "Built and maintained DBT transformation models on AWS and S3 data lakes for downstream risk analytics and reporting.",
      "Productionized Python and AWS Glue ETL jobs with validation, date control, and static data loading to meet SLAs.",
      "Defined and governed data contracts with upstream and downstream teams, strengthening data quality and lineage."
    ]
  }
];

const projects = [
  {
    title: "CRDW-Teradata Exit",
    subtitle: "Credit Risk Data Warehouse Modernization",
    points: [
      "Built an industry-grade modernization project using AWS and DBT to elevate data processing capabilities.",
      "Deployed Dockerized DBT pipelines on ECS with Step Functions to orchestrate multi-account S3 ingestion.",
      "Optimized DBT-based ETL on 100M records, reducing runtime by ~44% (45 → 25 minutes).",
      "Automated workflows with AWS Glue and Lambda for robust data validation and quality controls."
    ],
    stack: ["AWS", "DBT", "ECS", "Step Functions", "Glue"]
  },
  {
    title: "Risk Model Data Pipelines",
    subtitle: "Golden Source to Downstream Analytics",
    points: [
      "Developed complex SQL transformations in DBT to create risk model datasets.",
      "Implemented GitLab CI/CD pipelines for one-click deployments to AWS S3 and EC2.",
      "Automated daily batch scheduling with Tivoli Workload Scheduler integrated with AWS services."
    ],
    stack: ["SQL", "DBT", "GitLab", "TWS", "S3"]
  }
];

const education = [
  {
    school: "Vishwakarma Institute of Technology, Pune",
    degree: "B.Tech in Computer Science & Engineering",
    timeline: "2019 – 2023",
    detail: "CGPA 8.69/10"
  },
  {
    school: "Govt. Boys’ Higher Secondary School, Jammu & Kashmir",
    degree: "Higher Secondary Schooling",
    timeline: "2017 – 2019",
    detail: "91%"
  }
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "AWS Certified Developer – Associate",
  "AWS Certified AI Practitioner",
  "Barclays 1-Year Milestone Celebration Recognition",
  "600+ challenges on LeetCode & GeeksforGeeks",
  "LEVEL0 & LEVEL1 Functional Excellence"
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,137,156,0.25),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(229,214,198,0.4),_transparent_60%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-24 md:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="section-label">Data & Cloud Engineer</p>
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Navneet Sharma
            </h1>
            <p className="text-lg text-muted md:text-xl">
              Cloud Data and AI Engineer crafting resilient data platforms for
              consumer banking risk, analytics, and regulatory reporting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">View Projects</Button>
              <a
                href="/cv.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-sand/80 bg-white px-7 text-base font-medium text-foreground transition duration-300 hover:border-accent/40 hover:bg-roseWash focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                View CV
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted">
              <span>📍 Pune, Maharashtra, India</span>
              <a
                className="transition hover:text-foreground"
                href="mailto:navneetsharma3716@gmail.com"
              >
                navneetsharma3716@gmail.com
              </a>
              <a
                className="transition hover:text-foreground"
                href="https://www.linkedin.com/in/navneet-sharma-87a193224/"
              >
                LinkedIn
              </a>
              <a
                className="transition hover:text-foreground"
                href="https://github.com/navneet500"
              >
                GitHub
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-roseWash blur-2xl" />
            <div className="glass-panel overflow-hidden rounded-[32px] p-4">
              <Image
                src="/profile.svg"
                alt="Navneet Sharma portrait"
                width={520}
                height={520}
                className="h-auto w-full rounded-[28px] object-cover"
                priority
              />
              <div className="mt-4 flex items-center justify-between px-1 text-sm text-muted">
                <span>+91 8493023174</span>
                <span>Open to roles</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="glass-panel rounded-3xl p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-foreground">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-panel rounded-3xl p-10 md:p-14"
        >
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <p className="section-label">About</p>
              <h2 className="text-3xl font-semibold text-foreground">
                Building resilient data ecosystems for financial services.
              </h2>
              <div className="space-y-4 text-base text-muted md:text-lg">
                {aboutNarrative.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="space-y-3"
            >
              {expertise.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="flex items-center justify-between rounded-2xl border border-sand/70 bg-white/60 px-5 py-4 text-sm text-foreground/80 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-foreground"
                >
                  <span>{skill}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    Focus
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="section-label">Experience</p>
              <h2 className="text-3xl font-semibold text-foreground">
                Enterprise-grade delivery with measurable outcomes.
              </h2>
            </div>
            <Button variant="ghost">View full timeline</Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {experience.map((role) => (
              <motion.div
                key={role.role}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-3xl p-7"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      {role.role}
                    </p>
                    <p className="text-sm text-muted">
                      {role.company} · {role.timeline}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10"
        >
          <div className="space-y-3">
            <p className="section-label">Projects</p>
            <h2 className="text-3xl font-semibold text-foreground">
              Strategic modernization initiatives.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-3xl p-7"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted">{project.subtitle}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="section-label">Skills</p>
              <h2 className="text-3xl font-semibold text-foreground">
                Technical breadth across the modern data stack.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((group) => (
                <div
                  key={group.title}
                  className="glass-panel rounded-3xl p-6"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {group.title}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-panel rounded-3xl p-6">
              <p className="section-label">Education</p>
              <div className="mt-5 space-y-4">
                {education.map((entry) => (
                  <div key={entry.school} className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">
                      {entry.school}
                    </p>
                    <p className="text-sm text-muted">
                      {entry.degree} · {entry.timeline}
                    </p>
                    <p className="text-sm text-muted">{entry.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-6">
              <p className="section-label">Certifications & Awards</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {certifications.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-32 pt-4 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10 rounded-3xl border border-sand/80 bg-white/70 p-10 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4">
            <p className="section-label">Contact</p>
            <h2 className="text-3xl font-semibold text-foreground">
              Let&apos;s build modern data platforms together.
            </h2>
            <p className="text-base text-muted">
              Open to data engineering, cloud modernization, and platform
              strategy roles. Let&apos;s connect about scalable analytics,
              automation, or data platform leadership.
            </p>
            <div className="space-y-2 text-sm text-muted">
              <p>
                Email:{" "}
                <a
                  className="text-foreground transition hover:text-accentStrong"
                  href="mailto:navneetsharma3716@gmail.com"
                >
                  navneetsharma3716@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  className="text-foreground transition hover:text-accentStrong"
                  href="https://www.linkedin.com/in/navneet-sharma-87a193224/"
                >
                  linkedin.com/in/navneet-sharma
                </a>
              </p>
              <p>Phone: +91 8493023174</p>
            </div>
          </div>
          <form className="space-y-4 rounded-2xl border border-sand/70 bg-white/80 p-6">
            <div className="space-y-2">
              <label className="text-sm text-muted" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-sand/80 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/40"
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
                className="w-full rounded-xl border border-sand/80 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/40"
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
                className="w-full rounded-xl border border-sand/80 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/40"
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
