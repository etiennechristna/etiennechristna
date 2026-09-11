import { useTranslations } from "next-intl";
import { Mail, MapPin, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";

const skillGroups = [
  { key: "databases", tags: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "Cassandra", "Redis"] },
  { key: "systems", tags: ["Apache", "VirtualBox", "Windows", "Linux"] },
  { key: "devTools", tags: ["Visual Studio Code", "Git"] },
  { key: "networks", tags: [] as string[] },
  { key: "gis", tags: [] as string[] },
  { key: "office", tags: ["Word", "Excel", "PowerPoint", "Access"] },
];

const languages = [
  { key: "french", levelKey: "fluent", pct: 100 },
  { key: "creole", levelKey: "fluent", pct: 100 },
  { key: "english", levelKey: "intermediate", pct: 60 },
];

const SOCIALS = {
  github: "https://github.com/etiennechristna",
  linkedin: "https://www.linkedin.com/in/etiennechristna",
};

export default function Home() {
  const tNav = useTranslations("Nav");
  const tHero = useTranslations("Hero");
  const tAbout = useTranslations("About");
  const tSkills = useTranslations("Skills");
  const tExp = useTranslations("Experience");
  const tEdu = useTranslations("Education");
  const tLang = useTranslations("Languages");
  const tContact = useTranslations("Contact");
  const tFooter = useTranslations("Footer");

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--line)]">
        <nav className="max-w-[1040px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="font-heading font-extrabold text-lg tracking-tight">
            Christna<span className="text-[var(--accent)]">.</span>
          </div>
          <div className="hidden md:flex gap-7 text-sm font-medium text-[var(--ink-soft)]">
            <a href="#about" className="hover:text-[var(--ink)]">{tNav("about")}</a>
            <a href="#skills" className="hover:text-[var(--ink)]">{tNav("skills")}</a>
            <a href="#experience" className="hover:text-[var(--ink)]">{tNav("experience")}</a>
            <a href="#education" className="hover:text-[var(--ink)]">{tNav("education")}</a>
            <a href="#contact" className="hover:text-[var(--ink)]">{tNav("contact")}</a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="/assets/Christna-Etienne-CV.pdf"
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex bg-[var(--ink)] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--accent)] transition-colors"
            >
              {tNav("downloadCv")}
            </a>
          </div>
        </nav>
      </header>

      <section className="pt-16 sm:pt-20 pb-16 max-w-[1040px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.3fr_.9fr] gap-10 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-soft)] px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              {tHero("available")}
            </div>
            <h1 className="font-heading text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.08] mb-5">
              {tHero("titleLine1")}
              <br />
              {tHero("titleLine2")}
            </h1>
            <p className="text-base sm:text-lg text-[var(--ink-soft)] max-w-[520px] mb-8">
              {tHero("lead")}
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[var(--ink)] text-white border border-[var(--ink)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                {tHero("contactMe")}
              </a>
              <a
                href="/assets/Christna-Etienne-CV.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-[var(--line)] hover:border-[var(--ink)] transition-colors"
              >
                {tHero("viewCv")}
              </a>
            </div>
          </div>
          <div className="relative rounded-[20px] overflow-hidden aspect-[4/5] bg-[var(--panel)] border border-[var(--line)] max-w-[280px] mx-auto md:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/christna-photo.png"
              alt="Christna Etienne"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-14 sm:py-16 border-t border-[var(--line)] max-w-[1040px] mx-auto px-6">
        <SectionHead num={tAbout("num")} title={tAbout("title")} sub={tAbout("sub")} />
        <p
          className="max-w-[680px] text-[1.02rem] text-[var(--ink-soft)] [&_strong]:text-[var(--ink)]"
          dangerouslySetInnerHTML={{ __html: tAbout("body") }}
        />
        <div className="flex gap-8 sm:gap-9 mt-8 flex-wrap">
          <Stat value={tAbout("stat1Value")} label={tAbout("stat1Label")} />
          <Stat value={tAbout("stat2Value")} label={tAbout("stat2Label")} />
          <Stat value={tAbout("stat3Value")} label={tAbout("stat3Label")} />
        </div>
      </section>

      <section id="skills" className="py-14 sm:py-16 border-t border-[var(--line)] max-w-[1040px] mx-auto px-6">
        <SectionHead num={tSkills("num")} title={tSkills("title")} sub={tSkills("sub")} />
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {skillGroups.map((s) => (
            <div key={s.key} className="bg-[var(--panel)] border border-[var(--line)] rounded-[14px] p-5">
              <h3 className="font-heading font-bold text-sm mb-2.5">{tSkills(s.key)}</h3>
              <div className="flex flex-wrap gap-2">
                {(s.key === "networks"
                  ? ["Réseaux", "Environnements techniques"]
                  : s.key === "gis"
                    ? ["Données géospatiales", "Outils SIG"]
                    : s.tags
                ).map((tg) => (
                  <span
                    key={tg}
                    className="bg-[var(--bg)] border border-[var(--line)] rounded-lg px-2.5 py-1 text-[.82rem] text-[var(--ink-soft)] font-medium"
                  >
                    {tg}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="py-14 sm:py-16 border-t border-[var(--line)] max-w-[1040px] mx-auto px-6">
        <SectionHead num={tExp("num")} title={tExp("title")} sub={tExp("sub")} />
        <div className="flex flex-col gap-7">
          <ExperienceItem
            date="2024 — Présent"
            role={tExp("vunepRole")}
            org={tExp("vunepOrg")}
            bullets={[tExp("vunepBullet1"), tExp("vunepBullet2")]}
          />
          <ExperienceItem
            date="Août – Sept. 2024"
            role={tExp("cnigsRole")}
            org={tExp("cnigsOrg")}
            bullets={[tExp("cnigsBullet1"), tExp("cnigsBullet2"), tExp("cnigsBullet3")]}
          />
          <ExperienceItem
            date="2022 – 2026"
            role={tExp("teachRole")}
            org={tExp("teachOrg")}
            bullets={[tExp("teachBullet1"), tExp("teachBullet2"), tExp("teachBullet3")]}
            last
          />
        </div>
      </section>

      <section id="education" className="py-14 sm:py-16 border-t border-[var(--line)] max-w-[1040px] mx-auto px-6">
        <SectionHead num={tEdu("num")} title={tEdu("title")} sub={tEdu("sub")} />
        <div className="grid gap-4">
          <EduCard title={tEdu("dessTitle")} org={tEdu("dessOrg")} date="2025 – 2026" />
          <EduCard title={tEdu("licenceTitle")} org={tEdu("licenceOrg")} date="2019 – 2025" />
          <EduCard title={tEdu("geoTitle")} org="École Nationale de Géologie Appliquée" date="2018 – 2022" />
        </div>
      </section>

      <section id="languages" className="py-14 sm:py-16 border-t border-[var(--line)] max-w-[1040px] mx-auto px-6">
        <SectionHead num={tLang("num")} title={tLang("title")} sub="" />
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
          {languages.map((l) => (
            <div key={l.key} className="border border-[var(--line)] rounded-[14px] p-4.5">
              <h4 className="font-heading font-bold text-sm mb-2">{tLang(l.key)}</h4>
              <div className="h-1.5 rounded-full bg-[var(--line)] overflow-hidden">
                <span className="block h-full bg-[var(--accent)]" style={{ width: `${l.pct}%` }} />
              </div>
              <div className="text-xs text-[var(--ink-soft)] mt-1.5">{tLang(l.levelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-14 sm:py-16 border-t border-[var(--line)] max-w-[1040px] mx-auto px-6">
        <SectionHead num={tContact("num")} title={tContact("title")} sub={tContact("sub")} />
        <div className="grid sm:grid-cols-2 gap-4">
          <ContactCard
            icon={<Mail className="w-4 h-4" />}
            label={tContact("email")}
            value="contact@etiennechristna.com"
            href="mailto:contact@etiennechristna.com"
          />
          <ContactCard
            icon={<MapPin className="w-4 h-4" />}
            label={tContact("location")}
            value={tContact("locationValue")}
          />
          <ContactCard
            icon={<GithubIcon className="w-4 h-4" />}
            label="GitHub"
            value="github.com/etiennechristna"
            href={SOCIALS.github}
            external
          />
          <ContactCard
            icon={<LinkedinIcon className="w-4 h-4" />}
            label="LinkedIn"
            value="linkedin.com/in/etiennechristna"
            href={SOCIALS.linkedin}
            external
          />
          <ContactCard
            icon={<Download className="w-4 h-4" />}
            label={tContact("cv")}
            value={tContact("cvValue")}
            href="/assets/Christna-Etienne-CV.pdf"
            external
          />
        </div>
      </section>

      <footer className="border-t border-[var(--line)] py-8 max-w-[1040px] mx-auto px-6 flex justify-between flex-wrap gap-3 text-sm text-[var(--ink-soft)]">
        <span>© {new Date().getFullYear()} Christna Etienne. {tFooter("rights")}</span>
        <div className="flex gap-4">
          <a href={SOCIALS.github} target="_blank" rel="noopener" className="hover:text-[var(--ink)]">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener" className="hover:text-[var(--ink)]">
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </>
  );
}

function SectionHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-9">
      <span className="text-sm font-bold text-[var(--accent)] font-mono">{num}</span>
      <div>
        <h2 className="font-heading text-[1.6rem] font-extrabold tracking-tight">{title}</h2>
        {sub && <p className="text-[var(--ink-soft)] max-w-[600px] mt-2 text-[.98rem]">{sub}</p>}
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <b className="font-heading block text-[1.7rem] font-extrabold text-[var(--ink)]">{value}</b>
      <span className="text-sm text-[var(--ink-soft)]">{label}</span>
    </div>
  );
}

function ExperienceItem({
  date,
  role,
  org,
  bullets,
  last,
}: {
  date: string;
  role: string;
  org: string;
  bullets: string[];
  last?: boolean;
}) {
  return (
    <div className={`grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-6 ${last ? "" : "pb-7 border-b border-[var(--line)]"}`}>
      <div className="text-sm font-bold text-[var(--accent)]">{date}</div>
      <div>
        <div className="font-heading font-bold text-[1.05rem] mb-1">{role}</div>
        <div className="text-[var(--ink-soft)] text-sm mb-2.5">{org}</div>
        <ul className="pl-4 text-[var(--ink-soft)] text-[.94rem] flex flex-col gap-1 list-disc">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EduCard({ title, org, date }: { title: string; org: string; date: string }) {
  return (
    <div className="flex justify-between gap-4 flex-wrap bg-[var(--panel)] border border-[var(--line)] rounded-[14px] px-5 py-5">
      <div>
        <h3 className="font-heading font-bold text-[1rem]">{title}</h3>
        <p className="text-[var(--ink-soft)] text-sm mt-1">{org}</p>
      </div>
      <span className="text-xs font-bold text-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1.5 rounded-full h-fit whitespace-nowrap">
        {date}
      </span>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <div className="w-[38px] h-[38px] rounded-[10px] bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <b className="block text-sm">{label}</b>
        <span className="text-sm text-[var(--ink-soft)] break-words">{value}</span>
      </div>
    </>
  );
  const cls = "bg-[var(--panel)] border border-[var(--line)] rounded-[14px] p-5 flex items-center gap-3.5";
  return href ? (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined} className={cls}>
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  );
}
