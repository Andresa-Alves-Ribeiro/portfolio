import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #050510 0%, #0a0a20 50%, #1a1a3a 100%);
`;

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const dataStreamRef = useRef([]);
  const circuitRef = useRef([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const getParticleCount = () => {
      const width = window.innerWidth;
      if (width < 576) return 60;
      if (width < 768) return 80;
      if (width < 1024) return 100;
      return 120;
    };

    const getDataStreamCount = () => {
      const width = window.innerWidth;
      if (width < 576) return 15;
      if (width < 768) return 20;
      if (width < 1024) return 25;
      return 30;
    };

    const getCircuitCount = () => {
      const width = window.innerWidth;
      if (width < 576) return 2;
      if (width < 768) return 3;
      if (width < 1024) return 4;
      return 5;
    };

    const createParticles = () => {
      const particleCount = getParticleCount();
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        const colorType = Math.random();
        let color;
        if (colorType < 0.33) {
          color = `rgba(255, 105, 180, ${Math.random() * 0.4 + 0.2})`;
        } else if (colorType < 0.66) {
          color = `rgba(135, 206, 235, ${Math.random() * 0.4 + 0.2})`;
        } else {
          color = `rgba(147, 112, 219, ${Math.random() * 0.4 + 0.2})`;
        }

        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          pulseSpeed: Math.random() * 0.05 + 0.02,
          pulseSize: Math.random() * 0.5 + 0.5,
          trail: [],
          maxTrailLength: window.innerWidth < 576 ? 3 : 5,
          type: Math.random() > 0.7 ? 'data' : 'particle',
          energy: Math.random() * 100,
          energyDecay: Math.random() * 0.1 + 0.05
        });
      }
    };

    const createDataStream = () => {
      const streamCount = getDataStreamCount();
      dataStreamRef.current = [];
      for (let i = 0; i < streamCount; i++) {
        const colorType = Math.random();
        let color;
        if (colorType < 0.33) {
          color = `rgba(255, 105, 180, ${Math.random() * 0.3 + 0.1})`;
        } else if (colorType < 0.66) {
          color = `rgba(135, 206, 235, ${Math.random() * 0.3 + 0.1})`;
        } else {
          color = `rgba(147, 112, 219, ${Math.random() * 0.3 + 0.1})`;
        }

        dataStreamRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          size: Math.random() * 2 + 1,
          color,
          angle: Math.random() * Math.PI * 2,
          trail: [],
          maxTrailLength: window.innerWidth < 576 ? 5 : 10
        });
      }
    };

    const createCircuit = () => {
      const circuitCount = getCircuitCount();
      circuitRef.current = [];
      for (let i = 0; i < circuitCount; i++) {
        circuitRef.current.push({
          points: [],
          color: `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`,
          speed: Math.random() * 0.5 + 0.2,
          offset: Math.random() * Math.PI * 2
        });

        const pointCount = window.innerWidth < 576 ? 10 : 20;
        for (let j = 0; j < pointCount; j++) {
          circuitRef.current[i].points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
          });
        }
      }
    };

    createParticles();
    createDataStream();
    createCircuit();

    const updateParticles = () => {
      timeRef.current += 0.01;
      particlesRef.current.forEach(particle => {
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > particle.maxTrailLength) {
          particle.trail.shift();
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        particle.energy = Math.max(0, particle.energy - particle.energyDecay);

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -0.8;
          particle.x = particle.x < 0 ? 0 : canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -0.8;
          particle.y = particle.y < 0 ? 0 : canvas.height;
        }

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - distance/200) * 0.5;
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
          particle.speedX *= 0.95;
          particle.speedY *= 0.95;
          particle.energy = Math.min(100, particle.energy + 10);
        }
      });

      dataStreamRef.current.forEach(stream => {
        stream.trail.push({ x: stream.x, y: stream.y });
        if (stream.trail.length > stream.maxTrailLength) {
          stream.trail.shift();
        }

        stream.x += Math.cos(stream.angle) * stream.speed;
        stream.y += Math.sin(stream.angle) * stream.speed;
        
        if (stream.x < 0) stream.x = canvas.width;
        if (stream.x > canvas.width) stream.x = 0;
        if (stream.y < 0) stream.y = canvas.height;
        if (stream.y > canvas.height) stream.y = 0;
      });

      circuitRef.current.forEach(circuit => {
        circuit.offset += circuit.speed;
      });
    };

    const drawCircuit = () => {
      circuitRef.current.forEach(circuit => {
        ctx.beginPath();
        ctx.strokeStyle = circuit.color;
        ctx.lineWidth = 1;

        circuit.points.forEach((point, index) => {
          const nextPoint = circuit.points[(index + 1) % circuit.points.length];
          const pulse = Math.sin(timeRef.current * 2 + circuit.offset) * 0.5 + 0.5;
          
          ctx.beginPath();
          ctx.strokeStyle = circuit.color.replace('0.1', (0.1 * pulse).toString());
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();
        });
      });
    };

    const drawDataStreams = () => {
      dataStreamRef.current.forEach(stream => {
        stream.trail.forEach((pos, index) => {
          const alpha = (index / stream.trail.length) * 0.2;
          ctx.beginPath();
          ctx.fillStyle = stream.color.replace('0.1', alpha.toString());
          ctx.arc(pos.x, pos.y, stream.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.beginPath();
        ctx.fillStyle = stream.color;
        ctx.arc(stream.x, stream.y, stream.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawCircuit();
      drawDataStreams();

      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const pulse = Math.sin(timeRef.current * 2) * 0.5 + 0.5;
            const energy = (particle.energy + otherParticle.energy) / 200;
            ctx.beginPath();
            ctx.strokeStyle = particle.color.replace('0.2', (0.2 * pulse * energy).toString());
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      particlesRef.current.forEach(particle => {
        const pulse = Math.sin(timeRef.current * particle.pulseSpeed) * particle.pulseSize;
        const size = particle.size + pulse;
        const energy = particle.energy / 100;

        particle.trail.forEach((pos, index) => {
          const alpha = (index / particle.trail.length) * 0.3 * energy;
          ctx.beginPath();
          ctx.fillStyle = particle.color.replace('0.2', alpha.toString());
          ctx.arc(pos.x, pos.y, size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.beginPath();
        ctx.fillStyle = particle.color.replace('0.2', (0.1 * energy).toString());
        ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = particle.color.replace('0.2', (0.2 * energy).toString());
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = particle.color.replace('0.2', (0.4 * energy).toString());
        ctx.lineWidth = 1;
        ctx.arc(particle.x, particle.y, size * 1.5, particle.rotation, particle.rotation + Math.PI * 1.5);
        ctx.stroke();

        if (particle.type === 'data') {
          const digitalEffect = Math.sin(timeRef.current * 5) > 0 ? '1' : '0';
          ctx.font = '8px monospace';
          ctx.fillStyle = particle.color.replace('0.2', (0.3 * energy).toString());
          ctx.fillText(digitalEffect, particle.x - 4, particle.y + 4);
        }
      });
    };

    const animate = () => {
      updateParticles();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return <Canvas ref={canvasRef} />;
};

export default AnimatedBackground; 