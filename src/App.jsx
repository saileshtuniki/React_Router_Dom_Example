import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skill from './Components/Skills/Skill';
// import Project from './Components/Projects/Project';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
 
  return (
      <BrowserRouter>
        <Navbar/>

        {/* <div className='container'> */}
          {/* <About id="about" />
          <Skill id="skills" />
          <Portfolio id="portfolio" />
          <Contact id="contact" /> */}
        {/* </div> */}

        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/skills" element={<Skill />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App;



    
      
