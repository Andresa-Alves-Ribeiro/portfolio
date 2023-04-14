import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './portfolio.scss';

const Portfolio = () => {
  const portfolioLinks = [
    {
      title: 'Conversor de Moedas',
      image: 'https://user-images.githubusercontent.com/94997593/229310261-6d710a62-2e61-4a37-850f-7082d5ede2e8.png',
      stacks: ['REACTJS', 'SASS', 'AXIOS'],
    },
    {
      title: 'Recriando ChatGPT',
      image: 'https://user-images.githubusercontent.com/94997593/227315882-be76973e-0e0f-48d0-9a4d-382bd8cf133c.png',
      stacks: ['REACTJS', 'CSS', 'AXIOS'],
    },
    {
      title: 'Recriando ChatGPT',
      image: 'https://user-images.githubusercontent.com/94997593/227315882-be76973e-0e0f-48d0-9a4d-382bd8cf133c.png',
      stacks: ['REACTJS', 'CSS', 'AXIOS'],
    },
    {
      title: 'Recriando ChatGPT',
      image: 'https://user-images.githubusercontent.com/94997593/227315882-be76973e-0e0f-48d0-9a4d-382bd8cf133c.png',
      stacks: ['REACTJS', 'CSS', 'AXIOS'],
    },
    {
      title: 'Flex Turismo',
      image: 'https://user-images.githubusercontent.com/94997593/231608000-c6aa2406-8fad-4a3c-9a5a-aa776eeff32a.png',
      stacks: ['HTML', 'CSS'],
    }
  ];

  const handleVerDetalhesClick = (project) => {
    window.open(`/project/${project.title}`, '_blank');
  };

  return (
    <div>
      <div id="wrapper">
        <h1 className="glitch-portfolio" data-text="Portfolio">Portfolio</h1>
      </div>

      <div>
        <div>
          <h2></h2>
        </div>
        <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={true}
        emulateTouch={true}
        centerMode={true}
        >
          {portfolioLinks.map((item, index) => (
            <div key={index} className="carousel-item">
              <Link to={`/project/${item.title}`}>
                <div className="project-item">
                  {item.image && <img src={item.image} alt={item.title} />}

                  <div className="project-links">
                    <h2 className='title-card'>{item.title}</h2>

                    <ul className='stacks-list'>
                      {item.stacks.map((stack, index) => (
                        <li key={index}>{stack}</li>
                      ))}
                    </ul>

                    <Link to={`/project/${item.title}`} className="details-link" target="_blank" rel="noopener noreferrer">
                      Ver detalhes do projeto
                    </Link>
                  </div>
                  
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Portfolio;
