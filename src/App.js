import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Sections/Navbar/Navbar";
import Footer from "./components/Sections/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import SocialIcons from "./components/Buttons/SocialIcons";
import Flotante from "./components/Buttons/Flotante";
//import Scrolltop from './components/Buttons/Scrolltop';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <SocialIcons />
      {/* <Scrolltop /> */}
      <Flotante/>
      <Footer />
    </Router>
  );
}

export default App;
