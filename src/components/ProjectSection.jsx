import projects from "../data/projects.jsx";
import GalleryModal from "./GalleryModal.jsx";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

import { HiOutlinePhotograph } from "react-icons/hi";

export default function ProjectSection({ gitLink, liveLink, onGallery }) {
  const reverseProjects = [...projects].reverse();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="p-5 md:p-10 lg:p-15 2xl:px-25">
      {/* Page Title */}
      <div className="mb-10 lg:mb-20 flex justify-center flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          My <span className="text-(--color1)">Projects</span>
        </h2>
        <p className="text-gray-600 mt-4 text-sm text-center xl:text-lg">
          A collection of projects that showcase my skills in frontend
          development, UI design, and problem-solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 xl:gap-12 2xl:gap-20 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-5 lg:px-0">
        {reverseProjects.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col justify-between bg-white rounded-2xl border border-pink-100
             shadow-pink-100 shadow-md  hover:shadow-lg transition-all duration-300 p-6"
          >
            {/* Project Image */}
            <div className="absolute -top-6 -right-6 bg-white flex items-center justify-center w-20 h-20 rounded-full border border-pink-50 shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-contain p-3"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-(--color1) mb-2 pr-8">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex justify-between gap-3 border-t pt-5 border-t-pink-100">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-pink-50 text-(--color1) font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xl text-gray-700">
                {/* GitHub */}
                {project.gitLink && (
                  <ActionIcon
                    icon={FaGithub}
                    tooltip="View code"
                    link={project.gitLink}
                  />
                )}

                {/* Live Site */}
                {project.liveLink && (
                  <ActionIcon
                    icon={HiOutlineExternalLink}
                    tooltip="View live site"
                    link={project.liveLink}
                  />
                )}

                {/* Gallery */}
                <ActionIcon
                  icon={HiOutlinePhotograph}
                  tooltip="View gallery"
                  onClick={() => setSelectedProject(project)}
                />
              </div>
              <GalleryModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ActionIcon({ icon: Icon, tooltip, link, onClick }) {
  const isDisabled = !link && !onClick;
  const Wrapper = link ? "a" : "button";

  return (
    <Wrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      className={`relative group cursor-pointer transition
        ${
          isDisabled
            ? "text-gray-300 cursor-not-allowed"
            : "hover:text-(--color1) transition duration-300"
        }
      `}
    >
      <Icon />

      {!isDisabled && (
        <span className="absolute opacity-0 group-hover:opacity-100 pointer-events-none text-black bg-white text-xs text-nowrap -left-6 top-8 p-2 shadow-lg rounded-2xl transition">
          {tooltip}
        </span>
      )}
    </Wrapper>
  );
}
