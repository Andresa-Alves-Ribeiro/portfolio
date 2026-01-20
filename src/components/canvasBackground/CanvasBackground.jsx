import React, { useEffect } from 'react';


const CanvasBackground = () => {
  useEffect(() => {
    const noiseScript = document.createElement('script');
    noiseScript.src = '/js/noise.min.js';
    noiseScript.async = true;

    const utilScript = document.createElement('script');
    utilScript.src = '/js/util.js';
    utilScript.async = true;

    const pipelineScript = document.createElement('script');
    pipelineScript.src = '/js/pipeline.js';
    pipelineScript.async = true;

    document.body.appendChild(noiseScript);
    document.body.appendChild(utilScript);
    document.body.appendChild(pipelineScript);

    return () => {
      
      if (document.body.contains(noiseScript)) {
        document.body.removeChild(noiseScript);
      }
      if (document.body.contains(utilScript)) {
        document.body.removeChild(utilScript);
      }
      if (document.body.contains(pipelineScript)) {
        document.body.removeChild(pipelineScript);
      }
    };
  }, []);

  return (
    <div className="content content--canvas">
      <h2 className="content__title">Pipeline</h2>
    </div>
  );
};

export default CanvasBackground;
