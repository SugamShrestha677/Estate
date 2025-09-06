import heroimg from "./assets/images/hero1.webp";
import { DarkModeProvider } from "./Components/DarkModeContext";
import Hero from "./sections/Hero";
import './App.css'
import Header from "./Components/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import PopularAreas from './sections/PopularAreas'
import Properties from "./sections/Properties";
import Contact from "./sections/Contact";
import Footer from "./Components/Footer";
const App = () => {
  return (
<DarkModeProvider>
  <Header/>
<Hero/> 
<About/>
<PopularAreas/>
<Properties/>
<Services/>
<Clients/>
<Contact/>
<Footer/>

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


