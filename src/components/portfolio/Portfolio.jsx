import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { portfolioLinks } from '../../constants/portfolioLinks';

/**
 * Componente que exibe o portfólio de projetos em um carrossel
 * @returns {JSX.Element} Seção de portfólio
 */
const Portfolio = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    if (aboutRef.current) {
      scrollReveal.reveal(aboutRef.current, {
        duration: 1000,
        delay: 500,
        easing: 'ease-in-out',
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
      });
    }

    return () => {
      if (scrollReveal && aboutRef.current) {
        scrollReveal.clean(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className='mb-[10vh] py-16' id='projects'>
      <div id="wrapper" className="text-center mb-[10vh]">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl animate-wiggle">🐱</span>
          <h1 className="diary-title text-4xl md:text-6xl font-handwriting">
            Projetos
          </h1>
          <span className="text-4xl animate-wiggle">🐱</span>
        </div>
        <p className="diary-text text-lg md:text-xl">Meus trabalhos favoritos 💕</p>
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
            <div key={index} className="mt-[10vh] scale-90 transition-all duration-300 rounded-[40px] overflow-hidden mb-10 diary-section hover:scale-[0.93]">
              <Link to={`/project/${item.title}`}>
                <div className="project-item relative">
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={`Imagem do projeto ${item.title}`}
                    loading="lazy"
                    className="mobile-image w-full h-auto" 
                  />
                )}

                  <div className="project-links absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 bg-[rgba(255,182,217,0.9)] hover:opacity-100">
                    <h2 className='text-primary-dark text-2xl md:text-3xl font-handwriting font-bold mb-2'>{item.title}</h2>

                    <ul className='stacks-list flex justify-center items-center mt-1.5 cursor-default flex-wrap gap-2'>
                      {item.stacks.map((stack, index) => (
                        <li key={index} className="mr-2.5 md:mr-0 md:mb-1 py-1 px-2.5 md:px-2 md:py-0.5 bg-primary border-2 border-primary-dark text-white text-xs md:text-sm font-handwriting font-bold rounded-[20px] transition-colors duration-300 shadow-lg">{stack}</li>
                      ))}
                    </ul>

                    <Link 
                      to={`/project/${item.title}`}
                      aria-label={`Ver detalhes do projeto ${item.title}`}
                      className="pink-button text-base md:text-lg no-underline mt-[30vh] md:mt-[2.8vh] inline-block py-2.5 px-5 md:py-1.5 md:px-4"
                    >
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
