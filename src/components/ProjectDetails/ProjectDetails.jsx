import React from 'react';
import { portfolioLinks } from '../portfolioLinks/PortfolioLinks';
import { useParams } from 'react-router-dom';
import './ProjectDetails.scss';

const ProjectDetails = () => {
  const { title } = useParams();

  const project = portfolioLinks.find((project) => project.title === title);

  return (
    <div className="project-details">
      <div className="project-details__content">
        <img src={project.image} alt={project.title} className="project-details__image" />
        <div className="project-details__info">
          <h2 className="project-details__title">{project.title}</h2>
          <p className="project-details__stacks">{project.stacks.join(', ')}</p>
          <p className="project-details__description">{project.description}</p>
          {project.liveDemoUrl && (
            <>
              <h3 className="project-details__subtitle">Visualize o site em tempo real</h3>
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-details__link">{project.liveDemoUrl}</a>
            </>
          )}
          {project.repoUrl && (
            <>
              <h3 className="project-details__subtitle">Visualize o repositório aqui</h3>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-details__link">{project.repoUrl}</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
