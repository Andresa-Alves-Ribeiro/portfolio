import React, { useEffect, useState } from 'react';
import { portfolioLinks } from '../portfolioLinks/PortfolioLinks';
import { useParams, useNavigate } from 'react-router-dom';
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
    return <div className="flex justify-center items-center h-screen text-white">Carregando...</div>;
  }

  return (
    <div className="h-screen -mb-[15vh] flex justify-center items-center text-primary bg-gradient-to-r from-[#ff77c2] via-[#ff69b4] via-[#ff3ad2] via-[#ff88e4] via-[#ff00c1] to-[#b12a84] border-b-2 border-[#ff88e4] md:mt-[20vh] md:pb-[20vh] md:pt-[24vh]">
      <div className="flex justify-center items-center max-w-[1200px] h-3/4 mt-[10vh] bg-[#fcdcf9] rounded-[20px] shadow-[0px_8px_40px_rgba(0,0,0,0.9)] flex-col md:flex-row md:h-auto md:p-5">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full md:w-[30%] h-auto object-cover rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none mb-5 md:mb-0 animate-[imageFade_1s_ease-in-out] [animation-delay:0.5s] [animation-fill-mode:backwards]" 
        />

        <div className="w-full md:w-[70%] h-full p-5 md:p-12 flex flex-col justify-center animate-[infoFade_1s_ease-in-out] [animation-delay:0.8s] [animation-fill-mode:backwards]">
          <button 
            onClick={handleGoBack} 
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
                className="w-1/4 md:w-[25%] hover:animate-[pulseProject_0.5s_infinite_alternate]"
              >
                <img src={Vercel} alt="vercel logo" className="w-full"></img>
              </a>

              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-[13%] md:w-[13%] hover:animate-[pulseProject_0.5s_infinite_alternate]"
              >
                <img src={Github} alt="github logo" className="w-full"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
