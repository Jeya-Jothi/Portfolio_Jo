import loaderGif from "../assets/gif/common loader.gif";

export default function CommonLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={loaderGif} alt="Loading..." />
    </div>
  );
}
