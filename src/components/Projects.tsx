import { projects, smallProjects, type Project } from "../data";
import { CompactRow, Label, RichText, SubLabel, Tags, external } from "./ui";

function ProjectEntry({ project }: { project: Project }) {
  return (
    <li>
      <div className="mb-1.5 flex items-baseline justify-between gap-4">
        <h3 className="text-[15px] leading-snug font-medium">
          <a href={project.href} {...external} className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
            {project.name}
          </a>
        </h3>
        <span className="shrink-0 text-xs text-gray-500">{project.meta}</span>
      </div>

      <p className="mb-2.5 text-[13.5px] leading-[1.7] text-gray-700 dark:text-gray-300">
        <RichText text={project.summary} />
      </p>

      <ul className="mb-3 space-y-1.5">
        {project.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
            <span className="mt-[9px] size-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
            <span>
              <RichText text={point} />
            </span>
          </li>
        ))}
      </ul>

      <Tags items={project.tags} />

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...external}
            className="text-xs text-gray-500 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </li>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <div className="mb-6">
        <Label>Selected projects</Label>
      </div>
      <ul className="space-y-9">
        {projects.map((p) => (
          <ProjectEntry key={p.name} project={p} />
        ))}
      </ul>

      <SubLabel>Smaller things</SubLabel>
      <ul className="space-y-3">
        {smallProjects.map((p) => (
          <CompactRow key={p.name} name={p.name} href={p.href}>
            {p.summary}
          </CompactRow>
        ))}
      </ul>
    </section>
  );
}
