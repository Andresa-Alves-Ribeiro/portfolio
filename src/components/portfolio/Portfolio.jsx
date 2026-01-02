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
    <div className='mb-[10vh]' id='projects'>
      <div id="wrapper" className="text-center mb-[10vh]">
        <h1 className="glitch-portfolio text-center md:text-left md:ml-8 text-2xl md:text-5xl" data-text="Projetos">Projetos</h1>
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
            <div key={index} className="mt-[10vh] scale-90 transition-all duration-300 rounded-[40px] overflow-hidden mb-10 hover:outline hover:outline-2 hover:outline-[#ff3ad2] hover:shadow-[0_0_10px_rgba(255,0,193,0.3),0_0_20px_rgba(255,58,210,0.5),0_0_30px_rgba(255,136,228,1)] hover:scale-[0.93]">
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

                  <div className="project-links absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 bg-[rgba(0,0,0,0.7)] hover:opacity-100">
                    <h2 className='text-white text-2xl md:text-3xl font-bold mb-2'>{item.title}</h2>

                    <ul className='stacks-list flex justify-center items-center mt-1.5 cursor-default flex-wrap gap-2'>
                      {item.stacks.map((stack, index) => (
                        <li key={index} className="mr-2.5 md:mr-0 md:mb-1 py-1 px-2.5 md:px-2 md:py-0.5 bg-[#ff3ad2] border-2 border-[#ff3ad2] text-white text-xs md:text-sm font-bold rounded-[20px] uppercase tracking-wide transition-colors duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.2)]">{stack}</li>
                      ))}
                    </ul>

                    <Link 
                      to={`/project/${item.title}`}
                      aria-label={`Ver detalhes do projeto ${item.title}`}
                      className="details-link bg-[#ff00c1] text-white text-base md:text-lg no-underline mt-[30vh] md:mt-[2.8vh] inline-block py-2.5 px-5 md:py-1.5 md:px-4 rounded-[25px] transition-all duration-300 border-none cursor-pointer outline-none relative overflow-hidden z-[1] uppercase tracking-[2px] font-semibold text-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:bg-[#ff3ad2] hover:no-underline hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1"
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
