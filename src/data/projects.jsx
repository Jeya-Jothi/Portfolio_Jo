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

// Tiger chicken & Ribs
import tigerChicken1 from "../assets/projects/gallery/tigerchicken/tigerchicken1.webp";
import tigerChicken2 from "../assets/projects/gallery/tigerchicken/tigerchicken2.webp";
import tigerChicken3 from "../assets/projects/gallery/tigerchicken/tigerchicken3.webp";
import tigerChicken4 from "../assets/projects/gallery/tigerchicken/tigerchicken4.webp";
import tigerChicken5 from "../assets/projects/gallery/tigerchicken/tigerchicken5.webp";
import tigerChicken6 from "../assets/projects/gallery/tigerchicken/tigerchicken6.webp";
import tigerChicken7 from "../assets/projects/gallery/tigerchicken/tigerchicken7.webp";
import tigerChicken8 from "../assets/projects/gallery/tigerchicken/tigerchicken8.webp";

// GTG
import gtg1 from "../assets/projects/gallery/gtg/gtg1.webp";
import gtg2 from "../assets/projects/gallery/gtg/gtg2.webp";
import gtg3 from "../assets/projects/gallery/gtg/gtg3.webp";
import gtg4 from "../assets/projects/gallery/gtg/gtg4.webp";
import gtg5 from "../assets/projects/gallery/gtg/gtg5.webp";
import gtg6 from "../assets/projects/gallery/gtg/gtg6.webp";

// Pokemon
import pokemon1 from "../assets/projects/gallery/pokemon/pokemon1.webp";
import pokemon2 from "../assets/projects/gallery/pokemon/pokemon2.webp";
import pokemon3 from "../assets/projects/gallery/pokemon/pokemon3.webp";
import pokemon4 from "../assets/projects/gallery/pokemon/pokemon4.webp";

// Healthcare
import healthcare1 from "../assets/projects/gallery/healthcare/healthcare1.webp";

// Pixelbloom
import pixelBloom1 from "../assets/projects/gallery/pixelbloom/pixelbloom1.webp";
import pixelBloom2 from "../assets/projects/gallery/pixelbloom/pixelbloom2.webp";
import pixelBloom3 from "../assets/projects/gallery/pixelbloom/pixelbloom3.webp";

// QR Code
import qrcode1 from "../assets/projects/gallery/qrcode/qrcode1.webp";
import qrcode2 from "../assets/projects/gallery/qrcode/qrcode2.webp";
import qrcode3 from "../assets/projects/gallery/qrcode/qrcode3.webp";
import qrcode4 from "../assets/projects/gallery/qrcode/qrcode4.webp";
import qrcode5 from "../assets/projects/gallery/qrcode/qrcode5.webp";
import qrcode6 from "../assets/projects/gallery/qrcode/qrcode6.webp";

// YouTube clone
import youtube1 from "../assets/projects/gallery/youtube/youtube1.webp";
import youtube2 from "../assets/projects/gallery/youtube/youtube2.webp";

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
    gallery: [youtube1, youtube2],
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
    gallery: [qrcode1, qrcode2, qrcode3, qrcode4, qrcode5, qrcode6],
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
    gallery: [pixelBloom1, pixelBloom2, pixelBloom3],
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
        focus on clean layout and mobile responsiveness. Site is not fully
        responsive yet.
      </>
    ),
    image: HealthCareIcon,
    tech: ["React", "JavaScript"],
    liveLink: "https://healthcare-dashboard-react.onrender.com",
    gitLink: "https://github.com/Jeya-Jothi/Healthcare-dashboard-React",
    gallery: [healthcare1],
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
    gallery: [pokemon1, pokemon2, pokemon3, pokemon4],
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
    gallery: [gtg1, gtg2, gtg3, gtg4, gtg5, gtg6],
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
    gallery: [
      tigerChicken1,
      tigerChicken2,
      tigerChicken3,
      tigerChicken4,
      tigerChicken5,
      tigerChicken6,
      tigerChicken7,
      tigerChicken8,
    ],
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
