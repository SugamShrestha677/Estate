import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../Components/DarkModeContext";
import { service } from "../Components/export";

const Services = () => {
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
    <div
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } pb-20 `}
    >
      <section
        id="services"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1
            data-aos="zoom-in"
            className={`text-red-500 capitalize ${darkMode ? 'text-white' : 'text-red-500'}`}
          >
            Our Services
          </h1>
          <h1
            data-aos="zoom-in"
            className={`text-[40px] font-semibold leading-10 ${darkMode ? 'text-white' : 'text-black'}`}
          >
           Top real estate <br />services available
          </h1>
        </div>

        <div className="max-w-screen-xl mx-auto px-0">

        <div id="service-box" className="grid lg:grid-cols-3 grid-cols-1 gap-12 place-items-center">
          {
            service.map((item,index)=>(
              
              <div data-aos="zoom-in" data-aos-delay="200" key={index} className={`w-full max-w-sm ${darkMode ? 'bg-black' : 'bg-white'} h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer`}>
                <div className="p-6 rounded-full bg-red-200">
                  <item.icon className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer"/>
                </div>


                <h1 className={`text-[22px] font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{item.title}</h1>
                <p className={`text-lg ${darkMode ? 'text-white' : 'text-slate-700'}`}>{item.desc}</p>
                <button className={`border-b-2 border-red-600 text-red-600 font-semibold p-0 ${darkMode ? 'text-white' : 'text-red-600'}`}>READ MORE</button>
              </div>
            ))
          }

        </div>
        </div>

      </section>
    </div>
  );
};

export default Services;
