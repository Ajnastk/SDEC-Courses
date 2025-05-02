"use client";

import { useEffect, useMemo } from 'react';

export const HeroBackground = () => {
  // Move colorOrbs into useMemo to prevent recreation on each render
  const colorOrbs = useMemo(() => [
    { color: "rgb(254,91,155)", size: "15vw" }, 
    { color: "rgb(254,91,155)", size: "12vw" },
    { color: "rgba(0,0,255,0.6)", size: "11vw" }, 
    { color: "rgb(254,91,155)", size: "12vw" },
    { color: "rgb(254,91,155)", size: "15vw" },
    { color: "rgb(254,91,155)", size: "14vw" },
    { color: "rgb(254,91,155)", size: "13vw" },
    { color: "rgb(254,91,155)", size: "16vw" },
    { color: "rgba(0,0,255,0.6)", size: "11vw" }, 
  ], []);

  useEffect(() => {
    const orbs = document.querySelectorAll('.color-orb');
    orbs.forEach((orb, index) => {
      // Only proceed if we have a valid orb at this index
      if (index < colorOrbs.length) {
        // Set initial random positions
        orb.style.left = `${Math.random() * 80 + 10}%`;
        orb.style.top = `${Math.random() * 80 + 10}%`;
        
        // Add random animation duration and delay for more natural movement
        const duration = 20 + Math.random() * 20; // 20-40s
        const delay = Math.random() * -20; // Random negative delay for offset
        
        orb.style.animationDuration = `${duration}s`;
        orb.style.animationDelay = `${delay}s`;
        
        // Properly apply box shadow with the orb's color
        orb.style.boxShadow = `0 0 100px 100px ${colorOrbs[index].color}`;
      }
    });
  }, [colorOrbs]); // Add colorOrbs to the dependency array

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {colorOrbs.map((orb, index) => (
        <div
          key={index}
          className="color-orb absolute rounded-full animate-float-around opacity-100 blur-3xl"
          style={{
            backgroundColor: orb.color,
            width: orb.size,
            height: orb.size,
          }}
        ></div>
      ))}
    </div>
  );
};