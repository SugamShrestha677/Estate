import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from './DarkModeContext';
const Header = () => {
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
    <div>

    </div>
  )
}

export default Header