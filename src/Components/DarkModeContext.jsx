// // DarkModeContext.js
// import React, { createContext, useContext, useState } from "react";

// const DarkModeContext = createContext();

// const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (!darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// const useDarkMode = () => {
//   const context = useContext(DarkModeContext);
//   if (!context) {
//     throw new Error("useDarkMode must be used within a DarkModeProvider");
//   }
//   return context;
// };

// export { DarkModeProvider, useDarkMode };


import React, { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Sync <html> class on initial load
  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeProvider, useDarkMode };