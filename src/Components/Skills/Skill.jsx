import React from 'react'
import './Skill.css'
import htmllogo from '../../assets/html-logo.png';
import csslogo from '../../assets/css-logo.png';
import javascriptlogo from '../../assets/javascript-logo.png';
import reactjslogo from '../../assets/reactjs-logo.png';
import javalogo from '../../assets/java_logo.png';
import pythonlogo from '../../assets/python_logo.png';


function Skill() {
    const skills =
        [
            {id:1 , name:'HTML', logo: htmllogo , level: "Intermediate"},
            {id:2, name:' CSS',logo: csslogo, level: "Intermediate"},
            {id:3, name:'JavaScript',logo: javascriptlogo, level: "Intermediate"},
            {id:4, name:'ReactJS',logo: reactjslogo, level: "Beginner"},
            {id:5, name:'Java',logo: javalogo, level: "Beginner"},
            {id:6, name:'Python',logo: pythonlogo, level: "Beginner (Basics)"},
            {id:6, name:'Python',logo: pythonlogo, level: "Beginner (Basics)"},
            {id:6, name:'Python',logo: pythonlogo, level: "Beginner (Basics)"},
            {id:6, name:'Python',logo: pythonlogo, level: "Beginner (Basics)"},
        ]
    
  return (
     <div id='skills' className='skill-div'>
    <h2 className='skill-heading'>SKILLS</h2>
    <ul className='skill-grid'>
      
          {skills.map((element)=>(
              <div className='skill-card' key={element.id}> 
                <div className='skill-card-content'>
                  <h3>{element.name}</h3>
                  {element.logo && <img src={element.logo} alt={element.name} /> }
                  <br />
                  <p>{element.level}</p>
                </div>
              </div>
          ))}
    </ul>
  </div>
  )
}

export default Skill
