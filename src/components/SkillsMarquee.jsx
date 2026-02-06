import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman, SiJquery } from "react-icons/si";

const skills = [
  { icon: FaReact, label: "React.js" },
  { icon: FaJs, label: "JavaScript (ES6)" },
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: FaBootstrap, label: "Bootstrap" },
  { icon: SiJquery, label: "jQuery" },
  { icon: FaGitAlt, label: "Git" },
  { icon: FaGithub, label: "GitHub" },
  { icon: SiPostman, label: "Postman" },
  { icon: FaFigma, label: "Figma (Basics)" },
];

export default function SkillsMarquee() {
  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 xl:w-20 bg-linear-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 xl:w-20 bg-linear-to-l from-white to-transparent z-10" />

      {/* OUTER TRACK */}
      <div className="marquee">
        {/* INNER MOVING STRIP */}
        <div className="marquee-inner">
          <MarqueeRow skills={skills} />
          <MarqueeRow skills={skills} />
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ skills }) {
  return (
    <div className="flex gap-5 xl:gap-10 pr-5 xl:pr-10 py-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md shadow-sm whitespace-nowrap"
        >
          <skill.icon className="text-2xl text-(--color1)" />
          <span className="text-sm lg:text-base font-medium text-gray-700">
            {skill.label}
          </span>
        </div>
      ))}
    </div>
  );
}
