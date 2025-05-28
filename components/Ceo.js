"use client"
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const Ceo = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a23);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // SEO elements removed for cleaner confetti-only experience

    // Create particle system for confetti
    const confettiParticles = [];
    const confettiGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
    const confettiColors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf9ca24, 0xf0932b, 0xeb4d4b, 0xe056fd, 0x7bed9f, 0xff7675, 0x74b9ff];
    
    for (let i = 0; i < 500; i++) {
      const material = new THREE.MeshPhongMaterial({ 
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)]
      });
      const particle = new THREE.Mesh(confettiGeometry, material);
      
      particle.position.set(
        (Math.random() - 0.5) * 30,
        Math.random() * 20 + 10,
        (Math.random() - 0.5) * 30
      );
      
      particle.userData = {
        velocity: {
          x: (Math.random() - 0.5) * 0.15,
          y: -Math.random() * 0.08 - 0.03,
          z: (Math.random() - 0.5) * 0.15
        },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.15,
          y: (Math.random() - 0.5) * 0.15,
          z: (Math.random() - 0.5) * 0.15
        }
      };
      
      confettiParticles.push(particle);
      particle.visible = true;
      scene.add(particle);
    }

    camera.position.z = 15;
    camera.position.y = 5;

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.016;
      
      // Enhanced SEO elements animation - removed

      // Animate confetti - INFINITE CELEBRATION!
      confettiParticles.forEach((particle) => {
        particle.position.add(new THREE.Vector3(
          particle.userData.velocity.x,
          particle.userData.velocity.y,
          particle.userData.velocity.z
        ));
        
        particle.rotation.x += particle.userData.rotationSpeed.x;
        particle.rotation.y += particle.userData.rotationSpeed.y;
        particle.rotation.z += particle.userData.rotationSpeed.z;
        
        // Continuous rainbow color cycling
        particle.material.color.setHSL((time * 0.5 + particle.position.x * 0.1) % 1, 1, 0.6);
        
        if (particle.position.y < -10) {
          particle.position.y = Math.random() * 10 + 15;
          particle.position.x = (Math.random() - 0.5) * 40;
          particle.position.z = (Math.random() - 0.5) * 40;
        }
      });

      // Dynamic lighting effects
      directionalLight.color.setHSL((time * 0.5) % 1, 0.8, 1);
      directionalLight.position.x = Math.sin(time * 0.4) * 15;
      directionalLight.position.z = Math.cos(time * 0.4) * 15;

      // Camera orbit with variation
      camera.position.x = Math.sin(time * 0.3) * 25 + Math.cos(time * 0.7) * 5;
      camera.position.z = Math.cos(time * 0.3) * 25 + Math.sin(time * 0.5) * 5;
      camera.position.y = 5 + Math.sin(time * 0.2) * 8;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Show message immediately - it's party time!
    setTimeout(() => setShowMessage(true), 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [confettiActive]);

  const triggerConfetti = () => {
    // Already infinite celebration! But let's add more intensity
    const intensity = Math.random() * 0.5 + 0.5;
    if (sceneRef.current) {
      sceneRef.current.traverse((child) => {
        if (child.material && child.material.color) {
          child.material.emissive.setRGB(intensity * 0.3, intensity * 0.2, intensity * 0.4);
        }
      });
    }
    
    setTimeout(() => {
      if (sceneRef.current) {
        sceneRef.current.traverse((child) => {
          if (child.material && child.material.emissive) {
            child.material.emissive.setRGB(0, 0, 0);
          }
        });
      }
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 "
 
    >
      <div ref={mountRef} className="absolute inset-0" />
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {showMessage && (
          <div className="text-center z-10 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4 animate-pulse">
              🎉 HAPPY BIRTHDAY! 🎉
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 animate-bounce">
              CEO ADHARSHA!
            </h2>
            <p className="text-xl md:text-2xl  text-gray-200 mb-8 ">
              Celebrating our amazing CEO who leads with vision and<br></br> drives our success!
            </p>
            <button
              onClick={triggerConfetti}
              className="pointer-events-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse"
            >
              🎊 CELEBRATE! 🎊
            </button>
          </div>
        )}
      </div>

      {/* Floating birthday messages */}
      <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
        <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg animate-bounce">
          👑 Visionary Leader!
        </div>
        <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg animate-bounce delay-500">
          📈 Growth Driver!
        </div>
        <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg animate-bounce delay-1000">
          🌟 CEO Legend!
        </div>
      </div>

      {/* Bottom message */}
      {showMessage && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
          <p className="text-lg text-gray-300 animate-fade-in delay-2000">
            Thank you for leading us to success! 🚀
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default Ceo;