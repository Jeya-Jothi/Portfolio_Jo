import PixelBloomIcon from "../assets/projects/icons/PixelBloom.webp";
import QRCodeIcon from "../assets/projects/icons/QRCode.webp";
import YouTubeIcon from "../assets/projects/icons/YouTube.webp";
import PokeCArdIcon from "../assets/projects/icons/pokecard.webp";
import HealthCareIcon from "../assets/projects/icons/healthcare.webp";
import TigerChickenIcon from "../assets/projects/icons/tigerchicken.webp";
import NewcastleIcon from "../assets/projects/icons/newcastle.webp";
import GtgIcon from "../assets/projects/icons/gtg.webp";

// Newcastle gallery
import newCastle1 from "../assets/projects/gallery/newcastle/newcastle1.webp";
import newCastle2 from "../assets/projects/gallery/newcastle/newcastle2.webp";
import newCastle3 from "../assets/projects/gallery/newcastle/newcastle3.webp";
import newCastle4 from "../assets/projects/gallery/newcastle/newcastle4.webp";
import newCastle5 from "../assets/projects/gallery/newcastle/newcastle5.webp";
import newCastle6 from "../assets/projects/gallery/newcastle/newcastle6.webp";
import newCastle7 from "../assets/projects/gallery/newcastle/newcastle7.webp";

const projects = [
  {
    id: 1,
    title: "Youtube Clone",
    description: (
      <>
        A responsive UI clone of the YouTube homepage built using{" "}
        <strong>HTML and CSS</strong>. Features video cards, search layout, and
        adaptive design across devices. Demonstrates strong layout,
        responsiveness, and UI fundamentals.
      </>
    ),
    image: YouTubeIcon,
    tech: ["HTML", "CSS"],
    liveLink: "https://jeya-jothi.github.io/YouTube-clone/",
    gitLink: "https://github.com/Jeya-Jothi/YouTube-clone",
  },
  {
    id: 2,
    title: "QR Code Image Generator",
    description: (
      <>
        A lightweight web application that generates downloadable QR code images
        from user-provided URLs. Built with a clean, minimal UI and simple
        backend support using <strong>Express.js</strong>, focusing on fast
        response, usability, and practical real-world functionality.
      </>
    ),
    image: QRCodeIcon,
    tech: ["HTML", "CSS", "Express.js"],
    liveLink: "https://qr-code-generator-64vs.onrender.com/",
    gitLink: "https://github.com/Jeya-Jothi/QR-Code-Generator",
  },
  {
    id: 3,
    title: "PixelBloom - HD Image Search App",
    description: (
      <>
        {" "}
        A responsive image search application built with <strong>
          React
        </strong>{" "}
        and the <strong>Pixabay API</strong>. Users can search, preview, and
        download high-quality images through a clean, mobile-first UI. Focused
        on performance, usability, and real-world API integration.
      </>
    ),
    image: PixelBloomIcon,
    tech: ["React", "JavaScript", "REST API"],
    liveLink: "https://pixelbloom.onrender.com",
    gitLink: "https://github.com/Jeya-Jothi/PixelBloom-React.js",
  },
  {
    id: 4,
    title: "Healthcare Dashboard – Static UI Project",
    description: (
      <>
        Built a responsive healthcare dashboard UI using{" "}
        <strong>React.js</strong>, based on a professional design mockup.
        Implemented sidebar navigation, calendar slots, schedule cards, activity
        charts, and a body map using{" "}
        <strong>CSS Grid, Flexbox, and media queries</strong>, with a strong
        focus on clean layout and mobile responsiveness.
      </>
    ),
    image: HealthCareIcon,
    tech: ["React", "JavaScript"],
    liveLink: "https://healthcare-dashboard-react.onrender.com",
    gitLink: "https://github.com/Jeya-Jothi/Healthcare-dashboard-React",
  },
  {
    id: 5,
    title: "Pokémon Explorer",
    description: (
      <>
        Developed a Pokémon Explorer web app using <strong>React</strong> and{" "}
        <strong>PokéAPI</strong>, enabling search by name and filtering by type.
        Implemented a feature-based component structure, handled async API calls
        with loading and error states, styled the UI using modular CSS.
      </>
    ),
    image: PokeCArdIcon,
    tech: ["React", "JavaScript", "REST API"],
    liveLink: "https://pokemon-explorer-k43t.onrender.com/",
    gitLink: "https://github.com/Jeya-Jothi/Pokemon-Explorer",
  },
  {
    id: 6,
    title: "GTG Perfume – Product Landing Page",
    description: (
      <>
        Built a modern, fully responsive product landing page from a{" "}
        <strong>Figma design</strong> using{" "}
        <strong>HTML, CSS, and Vanilla JavaScript</strong>. Focused on
        pixel-perfect UI implementation, smooth interactions, and clean frontend
        structure without relying on frameworks.
      </>
    ),
    image: GtgIcon,
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://jeya-jothi.github.io/GTG_Perfume_Project",
    gitLink: "https://github.com/Jeya-Jothi/GTG_Perfume_Project",
  },
  {
    id: 7,
    title: "Tiger Chicken & Ribs – Client Website",
    description: (
      <>
        Worked on a live client website as a <strong>Frontend Developer</strong>
        , contributing to UI development and responsive design using{" "}
        <strong>React, HTML, CSS, Tailwind CSS and JavaScript</strong>. Built
        and updated reusable components, implemented mobile-friendly layouts,
        and collaborated with the team to deliver a clean, user-focused
        interface for production use.
      </>
    ),
    image: TigerChickenIcon,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    liveLink: "https://www.tigerchickenandribs.ca/",
  },
  {
    id: 8,
    title: "Newcastle Griddle – Client Website",
    description: (
      <>
        Designed and developed a fully responsive restaurant website using
        <strong> React</strong>, with reusable components and a{" "}
        <strong>mobile-first layout</strong>. Focused on clean UI, smooth
        navigation, and performance optimization. Successfully delivered and
        deployed as a live client project.
      </>
    ),
    image: NewcastleIcon,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    liveLink: "https://zyppyit.com/newcastle/",
    gallery: [
      newCastle1,
      newCastle2,
      newCastle3,
      newCastle4,
      newCastle5,
      newCastle6,
      newCastle7,
    ],
  },
];

export default projects;
