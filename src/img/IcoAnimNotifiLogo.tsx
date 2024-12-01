import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";

interface WalletIconProps {
  isHovered: boolean;
}

const bellVariants: Variants = {
  normal: { rotate: 0 },
  animate: { rotate: [0, -30, 10, -10, 0] },
};

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

export function IcoAnimNotifyLogo({ isHovered }: WalletIconProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start("animate");
    } else {
      controls.start("normal");
    }
  }, [isHovered, controls]);

  return (
    <div onMouseEnter={() => controls.start("animate")} onMouseLeave={() => controls.start("normal")}>
      <motion.svg
        width="14"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="NotifyButton-icon"
        initial="normal"
        animate={controls}
        variants={bellVariants}
        transition={transition}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.963 5.364a4.037 4.037 0 1 1 8.075 0V7.307l.003.034c.052.506.194 1 .42 1.458l1.14 2.299a.534.534 0 0 1-.48.771H1.879a.534.534 0 0 1-.478-.771l1.12-2.261a4.27 4.27 0 0 0 .443-1.895V5.364ZM7-.006A5.37 5.37 0 0 0 1.63 5.27v1.671c0 .452-.105.898-.306 1.303l-1.12 2.261a1.867 1.867 0 0 0 1.674 2.697h10.244a1.867 1.867 0 0 0 1.673-2.697l-1.138-2.299a2.936 2.936 0 0 1-.286-.97V5.364A5.37 5.37 0 0 0 7-.006ZM6.998 16c-1.221 0-2.232-.775-2.4-1.783h4.801C9.231 15.225 8.22 16 7 16Zm0-4.16h-.014.029-.015Zm-2.425 2.08v-.013.026-.013Z"
          fill="#fff"
        />
      </motion.svg>
    </div>
  );
}
