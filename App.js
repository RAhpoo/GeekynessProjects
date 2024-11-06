import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Solution from './Component/Solution';
import Contact from './Component/Contact';
import Home1 from './Component/Home1';
import AISolution from './Component/AISolution';
import MobileApp from './Component/MobileApp';
import Desktop from './Component/Desktop';
import DigitalMarketting from './Component/DigitalMarketting'
import Footer from './Component/Footer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
  
  <Router>
    <Navbar />
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/solution" element={<Solution/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/home1" element={<Home1/>} />
    <Route path="/desktop" element={<Desktop/>} />
    <Route path="/aisolution" element={<AISolution/>} />
    <Route path="/mobileapp" element={<MobileApp/>} />
    <Route path="/digitalmarketting" element={<DigitalMarketting/>} />
    </Routes>
 
    {/* <MobileApp/> */}
    {/* <Desktop/> */}
    {/* <DigitalMarketting/> */}
    <Footer/>
  </Router>
  );
}
export default App;
