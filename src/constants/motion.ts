import { Variants } from "framer-motion";

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerOne: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const defaultFadeInLeftVariants = {
  initial: {
    x: -90,
    opacity: 0,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
  },
};

export const defaultFadeInUpVariants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    y: 130,
    opacity: 0,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};
