import React, { useEffect } from "react";
import { DarkModeProvider, useDarkMode } from "../Components/DarkModeContext";
import Area1 from "../assets/images/area1.jpg";
import Area2 from "../assets/images/area2.jpg";
import Area3 from "../assets/images/area3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggkeDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        {/* For Top Section */}
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1 data-aos="zoom-in" className={`text-red-800 ${darkMode ? 'text-white' : 'text-red-800'}`}>
              POPULAR AREAS
            </h1>

            <h1
              data-aos="zoom-in"
              className={`text-[40px] font-semibold leading-10 mt-4 ${darkMode ? 'text-white' : 'text-black'}`}
            >
              Explore most <br /> Popular areas{" "}
            </h1>
          </div>

          {/* areas Images */}
          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6 ">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${Area1})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${Area2})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${Area3})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
          </div>
        </div>

        {/* For Bottom one */}
        <div
          id="bottom"
          className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6"
        >
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className={`font-semibold text-7xl ${darkMode ? 'text-white' : 'text-black'}`}>
              5K
            </h1>
            <h1 className={`font-semibold text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
              ACTIVE <br /> LISTINGS
            </h1>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className={`font-semibold text-7xl ${darkMode ? 'text-white' : 'text-black'}`}>
              9K
            </h1>
            <h1 className={`font-semibold text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
              SOLID <br /> LISTINGS
            </h1>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className={`font-semibold text-7xl ${darkMode ? 'text-white' : 'text-black'}`}>
              6K
            </h1>
            <h1 className={`font-semibold text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
              CLIENTS <br /> WE'VE SERVED
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
