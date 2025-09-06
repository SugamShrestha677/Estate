import heroimg from "./assets/images/hero1.webp";
import { DarkModeProvider } from "./Components/DarkModeContext";
import Hero from "./sections/Hero";
import './App.css'
import About from "./sections/About";
import PopularAreas from './sections/PopularAreas'
import Properties from "./sections/Properties";
const App = () => {
  return (
<DarkModeProvider>
<Hero/> 
<About/>
<PopularAreas/>
<Properties/>
</DarkModeProvider>

  );
};

export default App; 


// import heroimg from "./assets/images/hero1.webp";

// const App = () => {
//   return (
//     <>
//       <div
//         className="w-full h-screen bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${heroimg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           width: '100%',
//           minHeight: '100vh'
//         }}
//       />
//       {/* <img src={heroimg} alt="" /> */}
//     </>
//   );
// };

// export default App; 


