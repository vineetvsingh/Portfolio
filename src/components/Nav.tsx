import { profile } from "../data";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { label: "Projects", href: "#projects" },
  { label: "Activity", href: "#activity", hideOnMobile: true },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-4 py-6 sm:px-6 sm:py-10">
      <a href="#top" className="font-serif text-[1.35rem] text-gray-900 dark:text-gray-100">
        {profile.shortName}
      </a>
      <nav aria-label="Sections" className="flex items-center gap-3 font-serif text-base sm:gap-4 sm:text-lg">
        {sections.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className={`text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white ${
              s.hideOnMobile ? "hidden sm:inline" : ""
            }`}
          >
            {s.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
