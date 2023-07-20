const scrollToTop = () => {
  const scrollToTop = () => {
    const currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition - currentPosition / 8);
      requestAnimationFrame(scrollToTop);
    }
  };
  requestAnimationFrame(scrollToTop);
}

export default scrollToTop