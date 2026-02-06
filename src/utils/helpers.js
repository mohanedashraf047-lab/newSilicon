// utils/helpers.js
// Pure utility functions with single responsibilities

/**
 * Scroll to element smoothly
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 80; // Header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Scroll to top
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Debounce function calls
 */
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function calls
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Format phone number for display
 */
export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\+\d{2})(\d{3})(\d{4})(\d{4})/, "$1 $2 $3 $4");
};

/**
 * Validate email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate required field
 */
export const isRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Generate unique ID
 */
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength).trim()}...`;
};

/**
 * Class name merger utility
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Format number with commas
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Get WhatsApp link
 */
export const getWhatsAppLink = (phone, message = "") => {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}${message ? `?text=${encodedMessage}` : ""}`;
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get current scroll position
 */
export const getScrollPosition = () => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * Check if scrolled past certain point
 */
export const isScrolledPast = (offset = 100) => {
  return getScrollPosition() > offset;
};
