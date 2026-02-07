import experience from "../data/experience";

export default function Experience() {
  return (
    <section className="p-5 md:p-10 lg:p-15 2xl:px-25 mb-20">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Professional <span className="text-(--color1)">Experience</span>
      </h1>
      <p className="text-gray-600 mt-4 mb-10 text-sm text-center xl:text-lg">
        Working with teams to ship quality
      </p>

      <div className="space-y-12">
        {experience.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ company, role, duration, highlights, tech }) {
  return (
    <div className="relative">
      {/* Company Glass Tag */}
      <div className="mb-5 flex justify-center">
        <div className="relative inline-block">
          {/* shadow */}
          <div className="absolute inset-0 translate-x-0 translate-y-2 shadow-md shadow-pink-100 bg-pink-200/50 rounded-3xl"></div>

          {/* glass */}
          <div
            className="relative px-5 py-2 rounded-3xl
      bg-white/50 backdrop-blur-md border border-white shadow-sm shadow-white"
          >
            <p className="text-(--color1) font-semibold text-center">
              {company}
            </p>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div
        className="bg-pink-50/60 rounded-4xl border border-pink-100
        shadow-lg p-5 md:p-8 mx-5 lg:mx-20 xl:mx-30 2xl:mx-50"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-xl md:text-2xl font-bold text-(--color1)">
            {role}
          </h2>

          <span className="text-xs lg:text-sm w-fit font-medium px-4 py-1 rounded-full bg-white shadow-sm">
            {duration}
          </span>
        </div>

        {/* Divider */}
        <div className="w-20 h-1 bg-(--color1)/30 rounded-full my-5"></div>

        {/* Highlights */}
        <ul className="space-y-4 text-gray-700 leading-relaxed">
          {highlights.map((point, i) => (
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-(--color1) rounded-full flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-6">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white shadow-sm text-(--color1) font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
