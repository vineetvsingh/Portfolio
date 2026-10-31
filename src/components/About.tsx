import { education, tools } from "../data";
import { Label, SubLabel, Tags } from "./ui";

export default function About() {
  return (
    <section id="about" className="mb-16">
      <div className="mb-6">
        <Label>Education</Label>
      </div>
      <ul className="space-y-5 border-l border-gray-200 pl-4 dark:border-gray-700">
        {education.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute top-[0.55em] -left-[calc(1rem+3.5px)] size-1.5 rounded-full border border-gray-400 bg-[#fafafa] dark:border-gray-500 dark:bg-[#1a1a1a]" />
            <div className="mb-1 flex items-baseline justify-between gap-4">
              <h3 className="text-[15px] leading-snug font-medium">{item.title}</h3>
              {item.years && <span className="shrink-0 text-xs text-gray-500">{item.years}</span>}
            </div>
            <p className="text-[13px] text-gray-500 dark:text-gray-400">{item.place}</p>
          </li>
        ))}
      </ul>

      <SubLabel>Tools I reach for</SubLabel>
      <Tags items={tools} large />
    </section>
  );
}
