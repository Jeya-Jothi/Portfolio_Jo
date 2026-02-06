import { lazy, useState, Suspense, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AboutSection = lazy(() => import("../components/AboutSection.jsx"));
const ProjectSection = lazy(() => import("../components/ProjectSection.jsx"));
const Experience = lazy(() => import("../components/Experience.jsx"));
const Contact = lazy(() => import("../components/Contact.jsx"));
const SideNavBox = lazy(() => import("../components/SideNavBox.jsx"));
const CommonLoader = lazy(() => import("../components/CommonLoader.jsx"));

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[25%_75%] xl:grid-cols-[18%_85%] 2xl:grid-cols-[15%_85%] justify-between h-screen">
      <SideNavBox
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Suspense fallback={<CommonLoader />}>
        <AnimatePresence mode="wait">
          {showLoader ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <CommonLoader />
            </motion.div>
          ) : (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full overflow-y-scroll"
            >
              {activeSection === "about" && <AboutSection />}
              {activeSection === "projects" && <ProjectSection />}
              {activeSection === "experience" && <Experience />}
              {activeSection === "contact" && <Contact />}
            </motion.div>
          )}
        </AnimatePresence>
      </Suspense>
    </div>
  );
}
