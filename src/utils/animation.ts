export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_UP_ANIMATION_VARIANTS = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1 },
  },
};

export const FADE_LEFT_ANIMATION_VARIANTS = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1 },
  },
};

export const FADE_RIGHT_ANIMATION_VARIANTS = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1 },
  },
};

export const STACK_ANIMATION = {
  initial: "offscreen",
  whileInView: "onscreen",
  viewport: { once: true },
  variants: {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
};
