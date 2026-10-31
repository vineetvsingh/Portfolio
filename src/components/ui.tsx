import type { ReactNode } from "react";

/** Small uppercase section heading, e.g. "SELECTED PROJECTS". */
export function Label({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">{children}</h2>
  );
}

/** Serif sub-heading inside a section. */
export function SubLabel({ children }: { children: ReactNode }) {
  return <h3 className="mb-4 mt-11 font-serif text-lg font-medium">{children}</h3>;
}

export function Tags({ items, large = false }: { items: string[]; large?: boolean }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((tag) => (
        <span
          key={tag}
          className={`rounded bg-gray-100 text-gray-600 dark:bg-[#252525] dark:text-blue-200/90 ${
            large ? "px-2.5 py-0.5 text-xs" : "px-2 py-0.5 text-[11px]"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/** Renders text, showing `backticked` words as inline code. */
export function RichText({ text }: { text: string }) {
  const parts = text.split("`");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code key={i} className="rounded-[3px] bg-gray-100 px-1 text-[0.95em] dark:bg-[#252525]">
            {part}
          </code>
        ) : (
          part
        ),
      )}
    </>
  );
}

export const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Two-column row: bold link on the left, muted description on the right. */
export function CompactRow({ name, href, children }: { name: string; href: string; children: ReactNode }) {
  return (
    <li className="grid grid-cols-1 gap-x-5 text-[13px] leading-relaxed sm:grid-cols-[13rem_1fr]">
      <a
        href={href}
        {...external}
        className="font-medium break-words text-gray-900 transition-colors hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
      >
        {name}
      </a>
      <span className="text-gray-500 dark:text-gray-400">{children}</span>
    </li>
  );
}
