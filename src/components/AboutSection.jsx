import HiIcon from "../assets/icons/Hi icon.png";
import LinkedinIcon from "../assets/icons/linkedin icon.png";
import GithubIcon from "../assets/icons/github icon.png";
import MailIcon from "../assets/icons/mail icon.png";

import illustration from "../assets/image/laptop.webp";
import JothiPhotoWhite from "../assets/image/jothi-photo-white.jpg";

import SkillsMarquee from "./SkillsMarquee";

import interests from "../data/interests";

function Tooltip({ text }) {
  return (
    <span
      className="absolute left-1/2 top-full mt-2 -translate-x-1/2
                 whitespace-nowrap text-xs bg-white shadow-md
                 rounded-md px-2 py-1 opacity-0 scale-50
                 transition-all duration-500
                 group-hover:opacity-100 group-hover:scale-100 pointer-events-none"
    >
      {text}
    </span>
  );
}

function MobileIntro() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-40 h-40">
        <img
          src={JothiPhotoWhite}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="flex items-center justify-center">
          <p className="text-sm">Hi...</p>
          <img src={HiIcon} alt="Hi icon" className="w-4 h-3 mb-1" />
        </div>
        <p className="text-2xl text-center">
          I'm <span className="text-(--color1) font-bold">Jeya Jothi</span>
        </p>
        <p className="text-sm text-center">Frontend Developer</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <>
      <div className="p-5 lg:p-10 md:pr-10 lg:pr-20 flex flex-col gap-8 md:gap-12 lg:gap-20 md:mx-5 xl:mx-15">
        <div className="md:hidden">
          <MobileIntro />
        </div>

        {/* Header */}
        <div className="hidden md:flex flex-col items-center">
          <div className="flex items-center gap-1">
            <p className="text-base lg:text-xl">Hi...</p>
            <img src={HiIcon} alt="Hi icon" className="w-4 lg:w-5 h-3 lg:h-4" />
          </div>
          <p className="text-2xl lg:text-4xl mt-2">
            I'm <span className="text-(--color1) font-bold">Jeya Jothi</span>
          </p>
          {/* Social media */}
          <div className="flex gap-5 text-sm lg:text-lg mt-5">
            {/* LinkedIn */}
            <div className="relative flex items-center gap-2 pr-5 border-r border-(--color1) group">
              <img src={LinkedinIcon} alt="" className="w-5 h-5" />
              <a
                href="https://www.linkedin.com/in/jeya-jothi-841277211"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                LinkedIn
                <Tooltip text="Connect with me on LinkedIn" />
              </a>
            </div>

            {/* GitHub */}
            <div className="relative flex items-center gap-2 pr-5 border-r border-(--color1) group">
              <img src={GithubIcon} alt="" className="w-5 h-5" />
              <a
                href="https://github.com/Jeya-Jothi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                GitHub
                <Tooltip text="View my GitHub repositories" />
              </a>
            </div>

            {/* Email */}
            <div className="relative flex items-center gap-2 group">
              <img src={MailIcon} alt="" className="w-5 h-4" />
              <a href="mailto:jeyajothi108@gmail.com" className="relative">
                jeyajothi108@gmail.com
                <Tooltip text="Send me an email" />
              </a>
            </div>
          </div>
        </div>

        {/* About me content */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 lg:gap-5">
            <div className="w-2 h-10 lg:h-15 animate-ink-flow rounded-2xl"></div>
            <h3 className="text-2xl lg:text-4xl font-bold">About Me</h3>
          </div>
          {/* about content + image */}
          <div className="flex flex-col xl:flex-row items-center gap-10 2xl:gap-15">
            <img
              src={illustration}
              alt=""
              className="order-1 xl:order-2 opacity-80 w-60 xl:w-90"
            />
            <div className="order-2 xl:order-1 text-justify">
              <p>
                I'm a passionate{" "}
                <span className="font-bold text-(--color1)">
                  {" "}
                  Frontend Developer{" "}
                </span>{" "}
                who loves turning ideas into clean, responsive, and
                user-friendly web experiences. I come from an Electronics and
                Communication Engineering background, but my curiosity for
                building things on the web led me into frontend development.
                Over time, I’ve gained hands-on experience through an internship
                and{" "}
                <span className="font-bold"> multiple real-world projects</span>
                , where I worked with{" "}
                <span className="font-bold text-(--color1)">
                  HTML, CSS, JavaScript, React.js, Tailwind CSS, APIs,
                </span>{" "}
                and <span className="font-bold text-(--color1)">Git</span>.
              </p>{" "}
              <p className="mt-5">
                {" "}
                I enjoy creating interfaces that are not only visually appealing
                but also functional and accessible. I pay close attention to UI
                details, responsiveness, and performance. I believe good design
                should feel simple, intuitive, and purposeful. Currently, I’m
                focused on strengthening my React skills, improving my
                JavaScript fundamentals, and learning
                <span className="font-bold"> modern frontend </span> best
                practices.{" "}
              </p>
              <p className="mt-5">
                I’m a continuous learner who enjoys solving problems, exploring
                new technologies, and growing as a developer every day. I’m
                actively looking for opportunities as a{" "}
                <span className="font-bold text-(--color1)">
                  {" "}
                  Junior Frontend / Web Developer{" "}
                </span>
                , where I can contribute, learn from experienced teams, and
                build meaningful digital products.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 lg:gap-5">
            <div className="w-2 h-10 lg:h-15 animate-ink-flow rounded-2xl"></div>
            <h3 className="text-2xl lg:text-4xl font-bold">Skills</h3>
          </div>
          <SkillsMarquee />
        </div>

        {/* Interests */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 lg:gap-5">
            <div className="w-2 h-10 lg:h-15 animate-ink-flow rounded-2xl"></div>
            <h3 className="text-2xl lg:text-4xl font-bold">Interests</h3>
          </div>
          {/* interests cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-20">
            {interests.map((item, index) => (
              <div
                key={index}
                className="flex rounded-2xl border border-pink-200
                       hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center rounded-tl-2xl rounded-bl-2xl bg-pink-100 min-w-30">
                  <img src={item.icon} alt="" className="w-8 md:w-10" />
                </div>
                <div className="p-3 lg:p-6 rounded-2xl bg-white">
                  <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
