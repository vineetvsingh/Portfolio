import { useEffect, useState } from "react";
import { profile } from "../data";
import { CompactRow, Label, external } from "./ui";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

type State = { status: "loading" } | { status: "error" } | { status: "ok"; repos: Repo[] };

const SHOW = 5;

function timeAgo(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return months === 1 ? "1 month ago" : `${months} months ago`;
  const years = Math.floor(months / 12);
  return years === 1 ? "1 year ago" : `${years} years ago`;
}

export default function Activity() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=30`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json() as Promise<Repo[]>;
      })
      .then((repos) => {
        const own = repos.filter((r) => !r.fork).slice(0, SHOW);
        setState(own.length ? { status: "ok", repos: own } : { status: "error" });
      })
      .catch(() => {
        if (!controller.signal.aborted) setState({ status: "error" });
      });
    return () => controller.abort();
  }, []);

  return (
    <section id="activity" className="mb-16">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <Label>Recently pushed</Label>
        <a
          href={`https://github.com/${profile.githubUser}?tab=repositories`}
          {...external}
          className="text-xs text-gray-500 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          All repositories ↗
        </a>
      </div>

      {state.status === "loading" && <p className="text-[13px] text-gray-500">Loading from GitHub…</p>}
      {state.status === "error" && (
        <p className="text-[13px] text-gray-500">Couldn't reach GitHub just now. See all repositories on GitHub.</p>
      )}
      {state.status === "ok" && (
        <ul className="space-y-3">
          {state.repos.map((repo) => {
            const details = [repo.language, repo.description].filter(Boolean).join(" · ");
            return (
              <CompactRow key={repo.name} name={repo.name} href={repo.html_url}>
                {details}
                <span className="whitespace-nowrap text-gray-400 dark:text-gray-500">
                  {details ? " · " : ""}
                  {timeAgo(repo.pushed_at)}
                </span>
              </CompactRow>
            );
          })}
        </ul>
      )}
    </section>
  );
}
