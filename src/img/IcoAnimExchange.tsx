import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const svgVariant = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: 180,
  },
};

const svgTransition = {
  duration: 0.2,
  ease: "easeInOut",
};

export function IcoAnimExchange({ isHovered }: { isHovered: boolean }) {
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start("animate");
    } else {
      controls.start("normal");
    }
  }, [isHovered, controls]);

  return (
    <motion.svg
      stroke="currentColor"
      variants={svgVariant}
      initial="normal"
      animate={controls}
      transition={svgTransition}
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M131.3 231.1L32 330.6l99.3 99.4v-74.6h174.5v-49.7H131.3v-74.6zM480 181.4L380.7 82v74.6H206.2v49.7h174.5v74.6l99.3-99.5z"></path>
    </motion.svg>
  );
}
