// utils/helpers.js
// Pure utility functions with single responsibilities

/**
 * Scroll to top smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
