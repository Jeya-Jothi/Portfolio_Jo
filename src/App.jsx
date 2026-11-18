import { lazy, Suspense, useEffect, useState } from "react";

const Preloader = lazy(() => import("./components/Preloader.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={null}>{showLoader ? <Preloader /> : <Home />}</Suspense>
  );
}

export default App;
