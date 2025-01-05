import heroVideo from "../assets/video/pinkbg.mp4";
import overlayImage from "../assets/images/varahi.png";

export default function Hero() {
  return (
    <section className="relative h-screen" id="hero">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src={heroVideo}
        ></video>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col md:flex-row items-center p-2">
        <div className="text-center text-white w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-xl mt-16 md:text-4xl font-bold">
            ஸ்ரீ மஹா வாராஹி பஞ்சமி பீடம்
          </h1>
          <p className="mt-4 text-xl">இராயமங்கலம்</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={overlayImage}
            alt="Overlay"
            className=" max-h-80 md:max-h-full"
          />
        </div>
      </div>
    </section>
  );
}
