import aboutimg from "../assets/images/about.jpg";
export default function About() {
  return (
    <>
      <section
        className="flex flex-col md:flex-row p-16 items-center"
        id="about"
      >
        <div className="w-full md:w-1/2">
          <img className="rounded-xl" src={aboutimg} alt="aboutimg" />
        </div>
        <div className="w-full pl-0 mt-8 md:w-1/2 md:pl-8">
          <div className="text-3xl text-orange-500 font-bold">
            About Varahi Amman Temple
          </div>
          <div className="text-xl pt-4 leading-8 text-justify">
            Welcome to the official website of Sri Varahi Amman Temple, a sacred
            sanctuary located in the serene village of Rayamangalam, within
            Thiruporur Taluka, Chengalpattu District. The temple is dedicated to
            Sri Varahi Amman, one of the Sapta Matrikas, who embodies courage,
            wisdom, and divine protection. Devotees from near and far visit the
            temple to seek her blessings for prosperity, good health, and
            spiritual upliftment.
          </div>
        </div>
      </section>
    </>
  );
}
