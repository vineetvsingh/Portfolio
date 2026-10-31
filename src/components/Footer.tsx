import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-2xl justify-between gap-4 border-t border-gray-200 px-4 pt-6 pb-12 text-xs text-gray-500 sm:px-6 dark:border-gray-700/70">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <a href="#top" className="transition-colors hover:text-gray-900 dark:hover:text-gray-200">
        Back to top ↑
      </a>
    </footer>
  );
}
