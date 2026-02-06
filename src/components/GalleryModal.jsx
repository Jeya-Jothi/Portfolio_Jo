import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoClose } from "react-icons/io5";

import "swiper/css";
import "swiper/css/pagination";

export default function GalleryModal({ project, onClose }) {
  const swiperRef = useRef(null);
  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // BODY SCROLL LOCK
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // STOP SWIPER AUTOPLAY WHEN CLOSED
  useEffect(() => {
    return () => {
      swiperRef.current?.autoplay?.stop();
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-white/1 backdrop-blur-xs">
      {/* Glass Modal */}
      <div className="relative w-full max-w-7xl rounded-2xl bg-white border border-gray-200 shadow-lg p-6 ">
        {/* Desktop Close */}
        <button
          onClick={onClose}
          className="hidden md:flex absolute top-4 right-4 text-black text-3xl hover:scale-110 transition"
        >
          <IoClose />
        </button>

        {/* Title */}
        <h3 className="text-(--color1) text-xl font-semibold mb-4">
          {project.title}
        </h3>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="gallery-swiper rounded-xl overflow-hidden"
        >
          {project.gallery.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt=""
                className="w-full h-[30vh] md:h-[50vh] lg:h-[70vh] object-contain mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Close */}
        <button
          onClick={onClose}
          className="md:hidden mt-6 w-full py-3 rounded-xl bg-white text-gray-900 font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}
