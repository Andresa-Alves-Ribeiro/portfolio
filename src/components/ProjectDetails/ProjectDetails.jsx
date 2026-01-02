import React, { useEffect, useState } from 'react';
import { portfolioLinks } from '../../constants/portfolioLinks';
import { useParams, useNavigate } from 'react-router-dom';
import Github from '../../assets/github.svg';
import Vercel from '../../assets/vercel.svg';
import Loading from '../loading';

/**
 * Componente que exibe os detalhes de um projeto específico
 * @returns {JSX.Element} Página de detalhes do projeto
 */
const ProjectDetails = () => {
  const { title } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      setIsLoading(true);
      setNotFound(false);
      
      const decodedTitle = decodeURIComponent(title);
      const fetchedProject = portfolioLinks.find(
        (project) => project.title.toLowerCase() === decodedTitle.toLowerCase()
      );
      
      if (fetchedProject) {
        setProject(fetchedProject);
        setNotFound(false);
      } else {
        setProject(null);
        setNotFound(true);
      }
      
      setIsLoading(false);
    };

    fetchProjectDetails();
  }, [title]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  if (isLoading) {
    return <Loading fullScreen text="Carregando projeto..." />;
  }

  if (notFound || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-dark text-white px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-6xl mb-4">🔍</h1>
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Projeto não encontrado
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Desculpe, o projeto que você está procurando não foi encontrado.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleGoBack}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-variant transition-colors duration-300"
            >
              Voltar
            </button>
            <a
              href="/"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300 no-underline"
            >
              Ir para início
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen -mb-[15vh] flex justify-center items-center text-primary bg-gradient-to-r from-[#ff77c2] via-[#ff69b4] via-[#ff3ad2] via-[#ff88e4] via-[#ff00c1] to-[#b12a84] border-b-2 border-[#ff88e4] md:mt-[20vh] md:pb-[20vh] md:pt-[24vh]">
      <div className="flex justify-center items-center max-w-[1200px] h-3/4 mt-[10vh] bg-[#fcdcf9] rounded-[20px] shadow-[0px_8px_40px_rgba(0,0,0,0.9)] flex-col md:flex-row md:h-auto md:p-5">
        <div className="relative w-full md:w-[30%] mb-5 md:mb-0">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none">
              <Loading size="sm" text="" />
            </div>
          )}
          {imageError ? (
            <div className="w-full h-64 bg-gray-300 rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none flex items-center justify-center text-gray-500">
              <span>Imagem não disponível</span>
            </div>
          ) : (
            <img 
              src={project.image} 
              alt={`Imagem do projeto ${project.title}`}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={handleImageError}
              className={`w-full h-auto object-cover rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100 animate-[imageFade_1s_ease-in-out]' : 'opacity-0'
              }`}
            />
          )}
        </div>

        <div className="w-full md:w-[70%] h-full p-5 md:p-12 flex flex-col justify-center animate-[infoFade_1s_ease-in-out] [animation-delay:0.8s] [animation-fill-mode:backwards]">
          <button 
            onClick={handleGoBack}
            aria-label="Voltar para a página anterior"
            className="bg-primary text-white text-xs md:text-sm no-underline flex py-2 px-4 transition-all duration-300 cursor-pointer uppercase tracking-[2px] font-extrabold text-center mb-4 relative overflow-hidden hover:no-underline hover:-translate-y-0.5 hover:rotate-x-[2deg] hover:rotate-y-[2deg] before:content-[''] before:block before:absolute before:-top-[10%] before:-left-[10%] before:-right-[10%] before:-bottom-[10%] before:bg-gradient-to-b before:from-[#ff3ad2] before:via-[#ff88e4] before:to-[#ff00c1] before:rotate-x-[60deg] before:rotate-y-[60deg] before:scale-0 before:transition-all before:duration-500 before:-z-10 before:opacity-50 hover:before:rotate-x-0 hover:before:rotate-y-0 hover:before:scale-100 hover:before:opacity-100"
          >
            Voltar
          </button>

          <div className='flex flex-col justify-center h-full'>
            <h2 className="text-2xl md:text-4xl mb-5 text-black uppercase tracking-[2px] text-center md:text-left">{project.title}</h2>

            <p className="text-lg mb-5 text-[#777] uppercase tracking-[2px] font-bold text-center md:text-left">{project.stacks.join(', ')}</p>

            <p className="text-base mb-10 leading-relaxed text-[#333] p-5 md:p-0 text-justify">{project.description}</p>

            <div className="flex justify-around items-center">
              <a 
                href={project.liveDemoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Ver demonstração ao vivo do projeto ${project.title}`}
                className="w-1/4 md:w-[25%] hover:animate-[pulseProject_0.5s_infinite_alternate]"
              >
                <img src={Vercel} alt="Logo Vercel - Ver demonstração ao vivo" className="w-full" />
              </a>

              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Ver código fonte do projeto ${project.title} no GitHub`}
                className="w-[13%] md:w-[13%] hover:animate-[pulseProject_0.5s_infinite_alternate]"
              >
                <img src={Github} alt="Logo GitHub - Ver código fonte" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
