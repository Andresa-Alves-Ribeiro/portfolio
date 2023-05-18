import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { portfolioLinks } from '../portfolioLinks/PortfolioLinks'
import './portfolio.scss';

const Portfolio = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    scrollReveal.reveal(aboutRef.current, {
      duration: 1000,
      delay: 500,
      easing: 'ease-in-out',
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
    });
  }, []);

  return (
    <div className='portfolio' id='projects'>
      <div id="wrapper">
        <h1 className="glitch-portfolio" data-text="Projetos">Projetos</h1>
      </div>

      <div ref={aboutRef}>
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
                {item.image && <img src={item.image} alt={item.title} className="mobile-image" />}


                  <div className="project-links">
                    <h2 className='title-card'>{item.title}</h2>

                    <ul className='stacks-list'>
                      {item.stacks.map((stack, index) => (
                        <li key={index}>{stack}</li>
                      ))}
                    </ul>

                    <Link to={`/project/${item.title}`} className="details-link">
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
