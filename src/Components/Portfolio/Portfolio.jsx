import React from 'react';

import './Portfolio.css'; 
import Project from '../Projects/Project';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <h2 className="portfolio-heading">Projects</h2>
            <div className="projects-list">
            <Project 
                title="Expense Tracker"
                // description="web application designed to help users manage and track their expenses effectively through an intuitive and interactive interface."
                // imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FihbJbox_ecommerce-websites-ecommerce-icon-hd-png-download%2F&psig=AOvVaw2-XyONjYv8aX6hnlZcIi9W&ust=1719764342180000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDmssubgYcDFQAAAAAdAAAAABAE"
                technologies="React"
                // githubLink="https://github.com/username/project-repo"
                // liveDemoLink="https://example.com"            
            />
            <Project
                title="Ecommerce Front end React Application"
                technologies="React" 
            />
            <Project
                title="Spotify Clone"
                technologies="HTML, CSS, JavaScript" 
            />
            </div>
        </div>
    );
}

export default Portfolio;
