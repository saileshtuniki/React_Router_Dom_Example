import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import underline from '../../assets/underline.png'

function Navbar() {

  // const [menu, setmenu] = useState('about');

  return (
    <div className='navbar'>
        <h1 className='logo'>ST <span><i className="fa-solid fa-code"></i></span></h1>
      <ul className='nav-menu'>
        
        <li className="nav-item"><Link to="/">About</Link></li>
        <li className="nav-item"><Link to="/skills">Skills</Link></li>
        <li className="nav-item"><Link to="/portfolio">Projects</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
        

      </ul>
    </div>
  )
}

export default Navbar

{/* <li className="nav-item"><p onClick={()=>setmenu('about')}>About</p>{menu === 'about' ? <img src={underline} alt=''/>:<></>}</li>
        <li className="nav-item"><p onClick={()=>setmenu('skills')}>Skills</p>{menu === 'skills' ? <img src={underline} alt=''/>:<></>}</li>
        <li className="nav-item"><p onClick={()=>setmenu('portfolio')}>Projects</p>{menu === 'portfolio' ? <img src={underline} alt=''/>:<></>}</li>
        <li className="nav-item"><p onClick={()=>setmenu('contact')}>Contact</p>{menu === 'contact' ? <img src={underline} alt=''/>:<></>}</li> */}




{/* <li className='nav-item'>
          <a href="#about">About</a>
        </li>
        <li className='nav-item'>
          <a href="#skills">Skill</a>
        </li>
        <li className='nav-item'>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className='nav-item'>
          <a href="#contact">Contact</a>
        </li> */}
        
         {/* <li className="nav-item">
          <Link to={{ pathname: "/", hash: "#about" }}>About</Link>
        </li>
        <li className="nav-item">
          <Link to={{ pathname: "/", hash: "#skills" }}>Skills</Link>
        </li>
        <li className="nav-item">
          <Link to={{ pathname: "/", hash: "#portfolio" }}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to={{ pathname: "/", hash: "#contact" }}>Contact</Link>
        </li> */}