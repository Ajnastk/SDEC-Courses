"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const FadeInOnScroll = ({ children, delay = 0.1, direction = "up" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 20 };
      case "down":
        return { y: -20 };
      case "left":
        return { x: 20 };
      case "right":
        return { x: -20 };
      default:
        return {};
    }
  };

  const initial = {
    opacity: 0,
    ...getOffset(),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      className="will-change-transform motion-reduce:transform-none"
    >
      {children}
    </motion.div>
  );
};