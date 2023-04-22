import React from 'react';
import { portfolioLinks } from '../portfolioLinks/PortfolioLinks';
import { useParams } from 'react-router-dom';
import './ProjectDetails.scss';
import Github from '../../assets/github.svg'
import Vercel from '../../assets/vercel.svg'

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
          <>
            <div className="project-details__link">
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-details__logo">
                <img src={Vercel} alt="vercel logo" className='logo-project-vercel'></img>
              </a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-details__logo">
                <img src={Github} alt="github logo" className='logo-project-github'></img>
              </a>
            </div>

          </>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
