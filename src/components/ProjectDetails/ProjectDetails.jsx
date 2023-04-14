import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.scss';

const ProjectDetails = () => {

    const { title, image, stacks, description, liveDemoUrl, repoUrl } = useParams(); 
    
    return (
        <div>
            <h1 className='title-white'>Projeto</h1>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{stacks}</p>
            <p>{description}</p>

            <h3>Visualize o site em tempo real</h3>
            <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
                Visualize o site em tempo real
            </a>

            <h3>Visualize o repositório aqui</h3>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                Visualize o repositório aqui
            </a>
        </div>
    );
};

export default ProjectDetails;
