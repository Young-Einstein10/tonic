import React from "react";
// React Server Components
import * as motion from "framer-motion/client";

interface MotionBoxProps {
  children: React.ReactNode;
  [key: string]: string | number | boolean | React.ReactNode;
}

const MotionBox = ({ children, ...rest }: MotionBoxProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
        offscreen: { opacity: 0 },
        onscreen: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
          },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionBox;
