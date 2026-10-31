import { profile, socials } from "../data";
import { Icon } from "./Icons";
import { external } from "./ui";

export default function Intro() {
  return (
    <section className="mb-18">
      <a
        href="#contact"
        className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-2.5 py-1 text-[11px] font-medium text-emerald-800 transition-colors hover:border-emerald-300 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:border-emerald-800"
      >
        <span className="size-1.5 animate-pulse-ring rounded-full bg-emerald-500" />
        {profile.status}
      </a>

      <h1 className="mb-4 font-serif text-[1.7rem] leading-tight font-medium tracking-tight sm:text-[2rem]">
        {profile.name}
      </h1>
      <p className="text-[15px] leading-[1.75] text-gray-700 dark:text-gray-300">{profile.intro}</p>
      <p className="mt-3.5 text-[14px] leading-[1.75] text-gray-500 dark:text-gray-400">{profile.subIntro}</p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            {...(s.icon === "mail" ? {} : external)}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-[13px] font-medium text-gray-800 transition-shadow hover:border-gray-400 hover:shadow-sm dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500"
          >
            <Icon name={s.icon} />
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
