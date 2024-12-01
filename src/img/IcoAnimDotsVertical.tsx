import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const dotVariant = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0],
  },
};

export function IcoAnimDotsVertical({ isHovered }: { isHovered: boolean }) {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const createTransition = (isAnimating: boolean, delay: number) => ({
    delay,
    duration: isAnimating ? 0.5 : 0,
    ease: "easeInOut",
    repeat: isAnimating ? Infinity : 0,
    repeatType: "mirror" as const,
  });

  useEffect(() => {
    if (!isAnimating) {
      controls.stop();
      controls.start("normal");
    } else {
      controls.start("animate");
    }
  }, [isAnimating, controls]);

  useEffect(() => {
    setIsAnimating(isHovered);
  }, [isHovered]);

  return (
    <div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18C10.5304 18 11.0391 17.7893 11.4142 17.4142C11.7893 17.0391 12 16.5304 12 16C12 15.4696 11.7893 14.9609 11.4142 14.5858C11.0391 14.2107 10.5304 14 10 14C9.46957 14 8.96086 14.2107 8.58579 14.5858C8.21071 14.9609 8 15.4696 8 16C8 16.5304 8.21071 17.0391 8.58579 17.4142Z"
          fill="white"
          initial="normal"
          animate={controls}
          variants={dotVariant}
          transition={createTransition(isAnimating, 0.4)}
        />
        <motion.path
          d="M8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0391 8.21071 10.5304 8 10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142Z"
          fill="white"
          initial="normal"
          animate={controls}
          variants={dotVariant}
          transition={createTransition(isAnimating, 0.2)}
        />
        <motion.path
          d="M8.58579 5.41421C8.96086 5.78929 9.46957 6 10 6C10.5304 6 11.0391 5.78929 11.4142 5.41421C11.7893 5.03914 12 4.53043 12 4C12 3.46957 11.7893 2.96086 11.4142 2.58579C11.0391 2.21071 10.5304 2 10 2C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4C8 4.53043 8.21071 5.03914 8.58579 5.41421Z"
          fill="white"
          initial="normal"
          animate={controls}
          variants={dotVariant}
          transition={createTransition(isAnimating, 0)}
        />
      </svg>
    </div>
  );
}
