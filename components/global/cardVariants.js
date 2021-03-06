const cardVariants = {
  // hidden : {

  // },

  //initial
  initial: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  initialUp: {
    opacity: 0.3,
    y: -20,
  },
  //animate
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  //exit
  exitLeft: {
    x: -10,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  //whileHover
  hover: {
    boxShadow: "2px 2px 8px 10px rgba(0,0,0,0.2)",
  },
  // whileTap
  hop: {
    y: [0, -8, 0],
    transition: {
      type: "spring",
      stiffnes: 100,
      duration: 0.3,
    },
  },
}

export { cardVariants }
