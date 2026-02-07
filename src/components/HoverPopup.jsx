const Circle = () => (
  <div
    className="
      rounded-full shadow-xl hover:shadow-2xl transition-all duration-300
      w-16 h-16
      sm:w-20 sm:h-20
      md:w-24 md:h-24
      lg:w-30 lg:h-30
    "
  />
);

export default function HoverPopup() {
  return (
    <div className="mt-20 flex justify-center px-4">
      <div className="relative group opacity-80">
        {/* Desktop */}
        <div className="hidden lg:block">{renderGrid(4, 10, "-mt-10")}</div>

        {/* Tablet */}
        <div className="hidden sm:block lg:hidden">
          {renderGrid(4, 6, "-mt-8")}
        </div>

        {/* Mobile (320px safe) */}
        <div className="block sm:hidden">{renderGrid(5, 4, "-mt-6")}</div>

        {/* Center text */}
        <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p
            className="
              text-gray-400/60 font-bold text-center
              text-xl sm:text-2xl md:text-3xl
              group-hover:text-gray-500
              transition-all duration-700 italic
            "
          >
            Hover Popup
          </p>
        </div>
      </div>
    </div>
  );
}

/* helper */
function renderGrid(rows, cols, overlap) {
  return Array.from({ length: rows }).map((_, row) => (
    <div
      key={row}
      className={`flex justify-center ${row !== 0 ? overlap : ""}`}
    >
      {Array.from({ length: cols }).map((_, col) => (
        <Circle key={col} />
      ))}
    </div>
  ));
}
