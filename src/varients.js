export const fadeIn = (direction, delay, type = 'tween') => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: type,
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
        staggerChildren: 0.25,
      },
    },
  }
}
