import { profile, socials } from "../data";
import { Label, external } from "./ui";

const linkClass =
  "text-blue-600 underline decoration-gray-300 underline-offset-[3px] transition-colors hover:decoration-blue-600 dark:text-blue-400 dark:decoration-gray-600 dark:hover:decoration-blue-400";

export default function Contact() {
  const linkedin = socials.find((s) => s.icon === "linkedin");
  const x = socials.find((s) => s.icon === "x");

  return (
    <section id="contact" className="mb-16">
      <div className="mb-6">
        <Label>Contact</Label>
      </div>
      <p className="text-[15px] leading-[1.75] text-gray-700 dark:text-gray-300">
        The quickest way to reach me is by email at{" "}
        <a href={`mailto:${profile.email}`} className={linkClass}>
          {profile.email}
        </a>
        {linkedin && x && (
          <>
            , or on{" "}
            <a href={linkedin.href} {...external} className={linkClass}>
              LinkedIn
            </a>{" "}
            and{" "}
            <a href={x.href} {...external} className={linkClass}>
              X
            </a>
          </>
        )}
        . I'm happy to talk about internships, full-time roles, or anything involving games, payments or the web.
      </p>
    </section>
  );
}
