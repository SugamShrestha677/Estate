import React, { useEffect } from "react";
import aboutimg from "../assets/images/about.jpg";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutimg}
          alt="about image"
          className="rounded-2xl lg:w-[500px] lg-h-[600px]"
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className={`text-red-500 ${darkMode ? 'text-white' : 'text-red-500'}`}>
          WHO WE ARE
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className={`text-[40px] font-semibold leading-10 ${darkMode ? 'text-white' : 'text-black'}`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>

        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className={`text-xl text-justify ${darkMode ? 'text-white' : 'text-gray-600'}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex, illum
          est culpa suscipit repellat praesentium, non, sint quidem harum
          facilis animi nesciunt eaque veritatis.
        </p>
        <button type="submit" className={`${darkMode ? 'bg-red-700 hover:bg-white hover:text-black' : 'bg-red-600 hover:bg-black'} text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300`}>Read More</button>
      </div>
    </section>
  );
};

export default About;
