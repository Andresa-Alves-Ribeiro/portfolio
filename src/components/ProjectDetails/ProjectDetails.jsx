import React, { useEffect, useState } from 'react';
import { portfolioLinks } from '../portfolioLinks/PortfolioLinks';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.scss';
import Github from '../../assets/github.svg'
import Vercel from '../../assets/vercel.svg'

const ProjectDetails = () => {
  const { title } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const fetchedProject = portfolioLinks.find((project) => project.title === title);
      setProject(fetchedProject);
    };

    fetchProjectDetails();
  }, [title]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!project) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="project-details">
      <div className="project-details__content">
        <img src={project.image} alt={project.title} className="project-details__image" />

        <div className="project-details__info">
          <button onClick={handleGoBack} className="go-back-button">Voltar</button>

          <div className='project-details__card'>
            <h2 className="project-details__title">{project.title}</h2>

            <p className="project-details__stacks">{project.stacks.join(', ')}</p>

            <p className="project-details__description">{project.description}</p>

            <div className="project-details__link">
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="logo-project-vercel">
                <img src={Vercel} alt="vercel logo"></img>
              </a>

              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="logo-project-github">
                <img src={Github} alt="github logo"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
