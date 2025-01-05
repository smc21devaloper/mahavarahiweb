import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logoimg from "../assets/images/logo.png";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-orange-500 shadow-xl p-1">
        <div className="flex items-center ml-4 cursor-pointer">
          <img
            className="h-16 w-16 shadow-xl rounded-full"
            src={logoimg}
            alt="logoimg"
          />
          <span className="text-white font-bold text-xl ml-4">
            OM SRI MAHA VARAHI
          </span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-white font-bold mr-4">
            <li className="relative group">
              <a href="#hero">Home</a>
              <span className="absolute left-0 right-0 top-6 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-all"></span>
            </li>
            <li className="relative group">
              <a href="#about">About Temple</a>
              <span className="absolute left-0 right-0 top-6 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-all"></span>
            </li>
            <li className="relative group">
              <a href="#photogallery">Photo Gallery</a>
              <span className="absolute left-0 right-0 top-6 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-all"></span>
            </li>
            <li className="relative group">
              <a href="#video">Video Gallery</a>
              <span className="absolute left-0 right-0 top-6 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-all"></span>
            </li>
            <li className="relative group">
              <a href="#puja">Puja Events</a>
              <span className="absolute left-0 right-0 top-6 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-all"></span>
            </li>
            <li className="relative group">
              <a href="#contact">Contact Us</a>
              <span className="absolute left-0 right-0 top-6 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-all"></span>
            </li>
          </ul>
        </div>

        {/*Hamburger Icon*/}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? (
              <RxCross2 style={{ width: "26px", height: "26px" }} />
            ) : (
              <GiHamburgerMenu style={{ width: "24px", height: "24px" }} />
            )}
          </button>
        </div>
      </nav>
      {/*Sidebar for Mobile*/}
      {isSidebarOpen && (
        <div
          className="fixed top-17 right-0 w-1/2 h-full z-50"
          onClick={toggleSidebar}
        >
          <div className="md:hidden bg-emerald-800 bg-opacity-30 h-full p-4 text-white font-bold text-lg">
            <ul className="space-y-6">
              <li className="text-center py-2 hover:bg-orange-500 w-full">
                <a href="#hero">Home</a>
              </li>
              <li className="text-center py-2 hover:bg-orange-500 w-full">
                <a href="#about">About Temple</a>
              </li>
              <li className="text-center py-2 hover:bg-orange-500 w-full">
                <a href="#photogallery">Photo Gallery</a>
              </li>
              <li className="text-center py-2 hover:bg-orange-500 w-full">
                <a href="#video">Video Gallery</a>
              </li>
              <li className="text-center py-2 hover:bg-orange-500 w-full">
                <a href="#puja">Puja Events</a>
              </li>
              <li className="text-center py-2 hover:bg-orange-500 w-full">
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/*<section className="bg-orange-500 shadow-xl">
        <div>
          <span className="text-white">OM SRI MAHA VARAHI</span>
        </div>
        <div>
          <ul className="">
            <li>Home</li>
            <li>About Temple</li>
            <li>Photo Gallery</li>
            <li>Video Gallery</li>
            <li>Puja Events</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>*/}
    </>
  );
}
