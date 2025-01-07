export default function getScrollAnimation() {
  return ({ duration = 2 } = {}) => {
    const isDesktop = window.innerWidth >= 1024; 
    return {
      offscreen: {
        y: 150,
        opacity: 0,
      },
      onscreen: isDesktop
        ? {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration,
            },
          }
        : {}, 
    };
  };
}
