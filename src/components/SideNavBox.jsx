import JothiPhoto from "../assets/image/jothi-photo.jpg";
import JothiPhotoWhite from "../assets/image/jothi-photo-white.jpg";
import JothiLogo from "../assets/icons/jothi logo.png";

import HomeIcon from "../assets/icons/home icon.png";
import ExperienceIcon from "../assets/icons/experience icon.png";
import ProjectIcon from "../assets/icons/project icon.png";
import ContactIcon from "../assets/icons/contact icon.png";

export default function SideNavBox({ activeSection, setActiveSection }) {
  const navItemClass = (section) =>
    `py-4 w-full text-center rounded-xl cursor-pointer transition
     ${activeSection === section ? "bg-(--color1)/20" : "hover:bg-red-50"}`;

  return (
    <>
      <aside className="hidden md:flex h-screen md:flex-col md:justify-between sticky top-0 p-3 lg:p-5 rounded-xl shadow-2xl selection:bg-(--color1) selection:text-white">
        <div>
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative h-40 lg:h-50 xl:h-55 2xl:h-65 w-full group">
              {/* Normal Image */}
              <img
                src={JothiPhoto}
                alt="Profile"
                className="absolute inset-0 h-full w-full object-cover rounded-2xl border-3 border-gray-200
                       transition-opacity duration-900 group-hover:opacity-0"
              />

              {/* Hover Image */}
              <img
                src={JothiPhotoWhite}
                alt="Profile Hover"
                className="absolute inset-0 h-full w-full object-cover rounded-2xl border-3 border-gray-200
                       opacity-0 transition-opacity duration-900 group-hover:opacity-100"
              />
            </div>
          </div>
          {/* Name */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-(--color1) font-bold text-lg">Jeya Jothi</p>
            <p className="text-sm lg:text-base text-center">
              Frontend Developer
            </p>
          </div>

          {/* Nav icons */}
          <div className="mt-10">
            <ul className="flex flex-col items-center gap-2">
              <button
                className={navItemClass("about")}
                onClick={() => setActiveSection("about")}
              >
                About Me
              </button>

              <button
                className={navItemClass("projects")}
                onClick={() => setActiveSection("projects")}
              >
                Projects
              </button>

              <button
                className={navItemClass("experience")}
                onClick={() => setActiveSection("experience")}
              >
                Experience
              </button>
              <button
                className={navItemClass("contact")}
                onClick={() => setActiveSection("contact")}
              >
                Contact
              </button>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <img src={JothiLogo} alt="Logo" className="w-10 h-10" />
          <p className="text-xs xl:text-sm text-gray-500 text-right">
            &copy; {new Date().getFullYear()} | All rights reserved
          </p>
        </div>
      </aside>

      {/* Mobile nav bottom */}
      <aside className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-pink-200 shadow-lg z-50 selection:bg-(--color1) selection:text-white">
        <ul className="flex justify-between">
          <button
            className={`p-3 w-full flex flex-col items-center justify-center gap-1 border-t-2 border-transparent ${
              activeSection === "about"
                ? "bg-(--color1)/10  border-t-(--color1)"
                : ""
            }`}
            onClick={() => setActiveSection("about")}
          >
            <img src={HomeIcon} alt="" className="w-5" />{" "}
            <span className="text-sm">Home</span>
          </button>
          <button
            className={`p-3 w-full flex flex-col items-center justify-center gap-1  border-t-2 border-transparent ${
              activeSection === "projects"
                ? "bg-(--color1)/10 border-t-(--color1)"
                : ""
            }`}
            onClick={() => setActiveSection("projects")}
          >
            <img src={ProjectIcon} alt="" className="w-5" />
            <span className="text-sm">Projects</span>
          </button>
          <button
            className={`p-3 w-full flex flex-col items-center justify-center gap-1 border-t-2 border-transparent ${
              activeSection === "experience"
                ? "bg-(--color1)/10 border-t-(--color1)"
                : ""
            }`}
            onClick={() => setActiveSection("experience")}
          >
            <img src={ExperienceIcon} alt="" className="w-5" />
            <span className="text-sm">Experience</span>
          </button>

          <button
            className={`p-3 w-full flex flex-col items-center justify-center gap-1 border-t-2 border-transparent ${
              activeSection === "contact"
                ? "bg-(--color1)/10 border-t-(--color1)"
                : ""
            }`}
            onClick={() => setActiveSection("contact")}
          >
            <img src={ContactIcon} alt="" className="w-5" />
            <span className="text-sm">Contact</span>
          </button>
        </ul>
      </aside>
    </>
  );
}
