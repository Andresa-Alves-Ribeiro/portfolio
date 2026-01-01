import React from 'react';

const Presentation = () => {
  return (
    <div id='presentation' className="flex justify-center items-center h-screen pt-[100px] md:pt-0 md:h-[calc(100vh-80px)]">
        <div className='title_loop w-full h-auto text-center'>
          <h5 className='text-xl md:text-2xl flex ml-[15vw] pb-[10vh]'>Olá!! Eu sou</h5>
          <div className='title text-5xl md:text-7xl text-white drop-shadow-[0_-50px_100px,0_0_2px,0_0_1em_#ff00c1,0_0_0.5em_#ff5e5e,0_0_0.1em_#ff88e4,0_10px_5px_#000]'><span>Andresa</span> Alves</div>
          <h5 className='subtitle pt-[5vh] text-xl md:text-2xl'>Desenvolvedora Front-End</h5>
        </div>
    </div>
  )
}

export default Presentation
