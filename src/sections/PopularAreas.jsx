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
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1
              data-aos="zoom-in"
              className="text-red-800 dark:text-white "
            >
              POPULAR AREAS
            </h1>

            <h1 data-aos="zoom-in">Explore most <br /> Popular areas  </h1>
          </div>
        </div>

        <div></div>
      </section>
    </div>
  );
};

export default PopularAreas;
