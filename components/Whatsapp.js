"use client"

import React from 'react';
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./ui/WhatsappAnimationSvg"), { ssr: false });

export const WhatsAppButton = ()=> {

  const whatsappNumber = "+916282551125";

  const message = "Hello! I'm interested in your services.";
  
  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-12 z-50"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
         <AnimationSvg />

    </a>
  );
}