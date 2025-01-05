import Muruga from "../assets/images/contactus.jpg";
export default function Contact() {
  return (
    <>
      <section className="p-16 bg-orange-200" id="contact">
        <div className="text-3xl text-orange-500 font-bold text-center mb-4">
          Contact Us
        </div>
        <div className="flex py-8 md:flex-row md:py-0 flex-col justify-center items-center bg-orange-500 rounded-3xl text-white font-bold text-xl">
          <div className="w-full md:w-1/2 ">
            <ul className="p-4">
              <li className="mb-4 text-xl md:text-3xl">
                Sri Arulmigu Kanniyamman Alayam
              </li>
              <li className="md:mb-4 md:text-xl text-base">
                Rayamangalam Village
              </li>
              <li className="md:mb-4 md:text-xl text-base">
                Thiruporur Taluka
              </li>
              <li className="md:mb-4 md:text-xl text-base">
                Chengalpattu District - 603105.
              </li>
            </ul>
          </div>
          <div>
            <img className="w-64 rounded-3xl" src={Muruga} alt="muruga" />
          </div>
        </div>
      </section>
    </>
  );
}
