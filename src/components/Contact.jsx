import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import HoverPopup from "./HoverPopup";

export default function Contact() {
  return (
    <section className="p-5 md:p-10 lg:p-15 2xl:px-25 mb-20 lg:mb-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">
          Get In <span className="text-(--color1)">Touch</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Let’s build something great together
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col gap-10 items-center mt-10 md:mt-20">
        {/* Form */}
        <div className="relative w-full md:w-lg xl:w-2xl">
          {/* shadow layer */}
          <div className="absolute blur-3xl inset-0  rounded-2xl bg-pink-100 shadow-xl shadow-pink-200/50"></div>

          {/* glass card */}
          <form
            className="relative p-8 rounded-3xl
            bg-white/50 backdrop-blur-md
            border-2 border-white  space-y-5"
          >
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full px-4 py-3 rounded-xl
            bg-white/70 border border-pink-100
            focus:outline-none focus:ring-2 focus:ring-(--color1)/40"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1 w-full px-4 py-3 rounded-xl
            bg-white/70 border border-pink-100
            focus:outline-none focus:ring-2 focus:ring-(--color1)/40"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="mt-1 w-full px-4 py-3 rounded-xl
            bg-white/70 border border-pink-100
            focus:outline-none focus:ring-2 focus:ring-(--color1)/40"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl
          bg-(--color1) text-white font-medium
          shadow-lg hover:scale-[1.02] active:scale-[0.98]
          transition"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Info */}
        <div className="space-y-5 mt-10 mx-10 lg:mx-20">
          <h2 className="text-xl font-semibold text-center text-gray-700">
            Open to opportunities
          </h2>

          <p className="text-gray-500 text-sm md:text-base text-justify">
            I enjoy crafting clean, user-friendly interfaces and working with
            teams that value quality and scalability. If you have a role — I'd
            love to hear from you.
          </p>

          <div className="text-sm">
            <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
              {/* Location */}

              <p className="text-gray-500 flex gap-2 items-center">
                <MdLocationOn className="text-2xl text-(--color1)" />
                <span className="xl:text-lg">Tenkasi, Tamil Nadu, India</span>
              </p>

              {/* Resume Download */}
              <a
                href="/Resume - Jeya Jothi.pdf" // file in public folder
                download
                className="inline-flex items-center gap-2 px-4 py-4 rounded-xl
                bg-(--color1) text-white font-medium shadow-md
                hover:scale-105 active:scale-95 transition"
              >
                Download Resume
                <HiDownload className="text-lg" />
              </a>
            </div>

            {/* Social / Contact Icons */}
            <div className="flex items-center justify-center gap-5 lg:gap-10 mt-10">
              <SocialIcon
                icon={FaGithub}
                link="https://github.com/Jeya-Jothi"
                tooltip="Explore my code"
              />

              <SocialIcon
                icon={FaLinkedin}
                link="https://www.linkedin.com/in/jeya-jothi-841277211/"
                tooltip="Connect on Linkedin"
              />

              <SocialIcon
                icon={MdEmail}
                link="mailto:jeyajothi108@gmail.com"
                tooltip="Send an email"
              />

              <SocialIcon
                icon={FaPhoneAlt}
                link="tel:+91 8270907155"
                tooltip="Let’s talk"
              />
            </div>
          </div>
        </div>
      </div>
      <HoverPopup />
    </section>
  );
}

function SocialIcon({ icon: Icon, link, tooltip }) {
  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : undefined}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      className="p-3 rounded-full bg-white/60 backdrop-blur-md
      border border-white shadow-md shadow-pink-400/40 hover:scale-110 transition
      relative group "
    >
      {/* Icon */}
      <Icon
        className="text-xl lg:text-2xl text-(--color1) relative z-10 
      group-hover:text-white transition-all duration-500"
      />

      {/* Fill Animation */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-full w-5 h-5 bg-(--color1)
        opacity-0 group-hover:opacity-100
        group-hover:w-full group-hover:h-full
        transition-all duration-500"
      />

      {/* Tooltip */}
      <p
        className="absolute top-15 left-1/2 -translate-x-1/2 text-nowrap py-2 px-4 shadow rounded-xl text-xs opacity-0 
      pointer-events-none group-hover:opacity-100 transition-all duration-500"
      >
        {tooltip}
      </p>
    </a>
  );
}
