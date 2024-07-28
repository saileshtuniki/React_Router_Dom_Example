import React from 'react'
import profilepic from '../../assets/profilepic.png'; 
import './About.css';

function About() {
  return (
    <div className='main-container'>
    <div className="about-container">
      <div className="profile-pic-container">
        <img src={profilepic} alt="Profile Picture" className="profile-pic" />
      </div>
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates asperiores quisquam voluptatem! Dicta cum atque dolores laudantium ab commodi expedita magnam nisi laboriosam culpa, sequi, sapiente iure ducimus eveniet quam?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit atque incidunt qui voluptatum molestias cupiditate dolorem mollitia a iure ab ipsa eos quia, officiis corporis maiores, debitis sint blanditiis! Earum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nisi voluptates quis, reprehenderit, perspiciatis dignissimos quaerat laboriosam repellendus assumenda id et a error eos! Dignissimos optio ad animi laborum quos.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates asperiores quisquam voluptatem! Dicta cum atque dolores laudantium ab commodi expedita magnam nisi laboriosam culpa, sequi, sapiente iure ducimus eveniet quam?
        
        </p>
        <a href='path_of_file' download="dummy.txt" className='download-btn'> Download Resume</a>
      </div>
    </div>
    </div>
  )
}

export default About


