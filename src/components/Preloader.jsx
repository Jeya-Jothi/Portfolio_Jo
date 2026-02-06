import HalfMoon from "../assets/gif/Half moon.gif";

export default function Preloader() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <img src={HalfMoon} alt="Loading..." />
      </div>
    </>
  );
}
