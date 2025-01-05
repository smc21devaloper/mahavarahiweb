import { useState } from "react";
import varahi1 from "../assets/images/Varahi/1.jpg";
import varahi2 from "../assets/images/Varahi/2.jpg";
import varahi3 from "../assets/images/Varahi/3.jpg";
import varahi4 from "../assets/images/Varahi/4.jpg";
import varahi5 from "../assets/images/Varahi/5.jpg";
import varahi6 from "../assets/images/Varahi/6.jpg";
import varahi7 from "../assets/images/Varahi/7.jpg";
import varahi8 from "../assets/images/Varahi/8.jpg";
import varahi9 from "../assets/images/Varahi/9.jpg";
import varahi10 from "../assets/images/Varahi/10.jpg";
import varahi11 from "../assets/images/Varahi/11.jpg";
import varahi12 from "../assets/images/Varahi/12.jpg";
import varahi13 from "../assets/images/Varahi/13.jpg";
import varahi14 from "../assets/images/Varahi/14.jpg";
import varahi15 from "../assets/images/Varahi/15.jpg";
import varahi16 from "../assets/images/Varahi/16.jpg";
import varahi17 from "../assets/images/Varahi/17.jpg";
import varahi18 from "../assets/images/Varahi/18.jpg";
import varahi19 from "../assets/images/Varahi/19.jpg";
import varahi20 from "../assets/images/Varahi/20.jpg";
import varahi21 from "../assets/images/Varahi/21.jpg";
import varahi22 from "../assets/images/Varahi/22.jpg";

import angalamman1 from "../assets/images/Angalamman/1.jpg";
import angalamman2 from "../assets/images/Angalamman/2.jpg";
import angalamman3 from "../assets/images/Angalamman/3.jpg";
import angalamman4 from "../assets/images/Angalamman/4.jpg";
import angalamman5 from "../assets/images/Angalamman/5.jpg";
import angalamman6 from "../assets/images/Angalamman/6.jpg";
import angalamman7 from "../assets/images/Angalamman/7.jpg";
import angalamman8 from "../assets/images/Angalamman/8.jpg";
import angalamman9 from "../assets/images/Angalamman/9.jpg";
import angalamman10 from "../assets/images/Angalamman/10.jpg";
import angalamman11 from "../assets/images/Angalamman/11.jpg";
import angalamman12 from "../assets/images/Angalamman/12.jpg";
import angalamman13 from "../assets/images/Angalamman/13.jpg";
import angalamman14 from "../assets/images/Angalamman/14.jpg";
import angalamman15 from "../assets/images/Angalamman/15.jpg";
import angalamman16 from "../assets/images/Angalamman/16.jpg";
import angalamman17 from "../assets/images/Angalamman/17.jpg";
import angalamman18 from "../assets/images/Angalamman/18.jpg";
import angalamman19 from "../assets/images/Angalamman/19.jpg";

import vinayagar1 from "../assets/images/Vinayagar/1.jpg";
import vinayagar2 from "../assets/images/Vinayagar/2.jpg";
import vinayagar3 from "../assets/images/Vinayagar/3.jpg";
import vinayagar4 from "../assets/images/Vinayagar/4.jpg";
import vinayagar5 from "../assets/images/Vinayagar/5.jpg";
import vinayagar6 from "../assets/images/Vinayagar/6.jpg";
import vinayagar7 from "../assets/images/Vinayagar/7.jpg";
import vinayagar8 from "../assets/images/Vinayagar/8.jpg";
import vinayagar9 from "../assets/images/Vinayagar/9.jpg";
import vinayagar10 from "../assets/images/Vinayagar/10.jpg";
import vinayagar11 from "../assets/images/Vinayagar/11.jpg";

import karumari1 from "../assets/images/Karumariyamman/1.jpg";
import karumari2 from "../assets/images/Karumariyamman/2.jpg";
import karumari3 from "../assets/images/Karumariyamman/3.jpg";
import karumari4 from "../assets/images/Karumariyamman/4.jpg";
import karumari5 from "../assets/images/Karumariyamman/5.jpg";
import karumari6 from "../assets/images/Karumariyamman/6.jpg";
import karumari7 from "../assets/images/Karumariyamman/7.jpg";
import karumari8 from "../assets/images/Karumariyamman/8.jpg";

import murugar1 from "../assets/images/Murugar/1.jpg";
import murugar2 from "../assets/images/Murugar/2.jpg";
import murugar3 from "../assets/images/Murugar/3.jpg";
import murugar4 from "../assets/images/Murugar/4.jpg";
import murugar5 from "../assets/images/Murugar/5.jpg";
import murugar6 from "../assets/images/Murugar/6.jpg";
import murugar7 from "../assets/images/Murugar/7.jpg";
import murugar8 from "../assets/images/Murugar/8.jpg";
import murugar9 from "../assets/images/Murugar/9.jpg";

import { RxCross2 } from "react-icons/rx";
const varahiimages = [
  varahi1,
  varahi2,
  varahi3,
  varahi4,
  varahi5,
  varahi6,
  varahi7,
  varahi8,
  varahi9,
  varahi10,
  varahi11,
  varahi12,
  varahi13,
  varahi14,
  varahi15,
  varahi16,
  varahi17,
  varahi18,
  varahi19,
  varahi20,
  varahi21,
  varahi22,
];
const angalammanimages = [
  angalamman1,
  angalamman2,
  angalamman3,
  angalamman4,
  angalamman5,
  angalamman6,
  angalamman7,
  angalamman8,
  angalamman9,
  angalamman10,
  angalamman11,
  angalamman12,
  angalamman13,
  angalamman14,
  angalamman15,
  angalamman16,
  angalamman19,
];

const vinayarimage = [
  vinayagar1,
  vinayagar2,
  vinayagar3,
  vinayagar4,
  vinayagar5,
  vinayagar6,
  vinayagar7,
  vinayagar8,
  vinayagar9,
  vinayagar10,
  vinayagar11,
];
const thandayuthanimage = [
  murugar1,
  murugar2,
  murugar3,
  murugar4,
  murugar5,
  murugar6,
  murugar7,
  murugar8,
  murugar9,
];

const karumariyammanimage = [
  karumari1,
  karumari2,
  karumari3,
  karumari4,
  karumari5,
  karumari6,
  karumari7,
  karumari8,
];
export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <section className="p-16" id="photogallery">
        <div>
          <div className="text-3xl text-orange-500 font-bold">
            Photo Gallery
          </div>
          <div className="text-3xl text-green-700 font-bold underline">
            ஸ்ரீ மஹா வாராஹி அம்மன்
          </div>
          <div className="p-5 mb-16">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
              {varahiimages.map((image, index) => (
                <div key={index} className="mb-5">
                  <div className="relative group">
                    <img
                      src={image}
                      alt={`varahipic${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="bg-orange-500 text-white px-2 py-2 rounded-xl font-semibold"
                        onClick={() => setSelectedImage(image)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-3xl text-green-700 font-bold underline">
            ஸ்ரீ அங்காள பரமேஸ்வரி அம்மன்
          </div>
          <div className="p-5 mb-16">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
              {angalammanimages.map((image, index) => (
                <div key={index} className="mb-5">
                  <div className="relative group">
                    <img
                      src={image}
                      alt={`angalammanpic${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="bg-orange-500 text-white px-2 py-2 rounded-xl font-semibold"
                        onClick={() => setSelectedImage(image)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-3xl text-green-700 font-bold underline">
            ஸ்ரீ பால விநாயகர்
          </div>
          <div className="p-5">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
              {vinayarimage.map((image, index) => (
                <div key={index} className="mb-5">
                  <div className="relative group">
                    <img
                      src={image}
                      alt={`angalammanpic${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="bg-orange-500 text-white px-2 py-2 rounded-xl font-semibold"
                        onClick={() => setSelectedImage(image)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-3xl text-green-700 font-bold underline">
            ஸ்ரீ தண்டாயுதபானி
          </div>
          <div className="p-5">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
              {thandayuthanimage.map((image, index) => (
                <div key={index} className="mb-5">
                  <div className="relative group">
                    <img
                      src={image}
                      alt={`angalammanpic${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="bg-orange-500 text-white px-2 py-2 rounded-xl font-semibold"
                        onClick={() => setSelectedImage(image)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-3xl text-green-700 font-bold underline">
            ஸ்ரீ கருமாரியம்மன்
          </div>
          <div className="p-5">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
              {karumariyammanimage.map((image, index) => (
                <div key={index} className="mb-5">
                  <div className="relative group">
                    <img
                      src={image}
                      alt={`angalammanpic${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="bg-orange-500 text-white px-2 py-2 rounded-xl font-semibold"
                        onClick={() => setSelectedImage(image)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*Popup Modal*/}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-xl w-full p-4">
            <img
              src={selectedImage}
              alt="selected"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <RxCross2 style={{ width: "24px", height: "24px" }} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
