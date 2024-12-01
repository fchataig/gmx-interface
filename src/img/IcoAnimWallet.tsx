import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface WalletIconProps {
  isHovered: boolean;
}

const walletVariants = {
  normal: {
    strokeDasharray: "1000 1000",
    strokeDashoffset: 0,
  },
  animate: {
    strokeDasharray: "1000 1000",
    strokeDashoffset: [1000, 0],
  },
};
const walletTransition = {
  duration: 2,
  ease: "easeInOut",
};

const pointVariants = {
  normal: { scale: 1 },
  animate: { scale: [0, 1.2, 1] },
};

const pointTransition = {
  duration: 0.5,
  ease: "easeInOut",
};
export function IcoAnimWalletIcon({ isHovered }: WalletIconProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start("animate");
    } else {
      controls.start("normal");
    }
  }, [isHovered, controls]);

  return (
    <div>
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M13.9528 8.88044C14.1603 9.08891 14.2769 9.37168 14.2769 9.66652H14.2728C14.2714 9.96047 14.1542 10.2419 13.9469 10.4493C13.7395 10.6567 13.4588 10.773 13.1662 10.773C12.8744 10.772 12.5947 10.655 12.3882 10.4478C12.1817 10.2406 12.0651 9.95975 12.0637 9.66652C12.0637 9.37168 12.1804 9.08891 12.3878 8.88044C12.5953 8.67195 12.8768 8.55482 13.1703 8.55482C13.4638 8.55482 13.7453 8.67195 13.9528 8.88044Z"
          fill="white"
          variants={pointVariants}
          initial="normal"
          animate={controls}
          transition={pointTransition}
        />

        <motion.path
          d="M15.9677 1H3.06452C2.37634 1 1 1.51852 1 3.59259C1 5.66667 1 11.0247 1 13.4444C1 14.4815 1.82581 15 3.06452 15H14.9355C15.9677 15 17 14.6889 17 13.4444V6.18519C17 5.14815 16.5871 4.62963 14.9355 4.62963H4.09677"
          stroke="white"
          stroke-linecap="round"
          variants={walletVariants}
          initial="normal"
          animate={controls}
          transition={walletTransition}
        />
      </svg>
    </div>
  );
}
