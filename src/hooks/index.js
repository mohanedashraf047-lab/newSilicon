// hooks/index.js
// Custom React hooks with single responsibilities

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook to detect scroll position
 */
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, scrollDirection };
};

/**
 * Hook for intersection observer animations
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        ...options,
      },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

/**
 * Hook for carousel/slider functionality
 */
export const useSlider = (totalSlides, autoPlayDelay = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (!isPaused && autoPlayDelay) {
      const interval = setInterval(nextSlide, autoPlayDelay);
      return () => clearInterval(interval);
    }
  }, [isPaused, autoPlayDelay, nextSlide]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    pause,
    resume,
  };
};

/**
 * Hook for form validation
 */
export const useForm = (initialValues, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback(
    (name, value) => {
      const rules = validationRules[name];
      if (!rules) return "";

      if (rules.required && !value.trim()) {
        return rules.message || "This field is required";
      }

      if (rules.email && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email";
        }
      }

      if (rules.minLength && value.length < rules.minLength) {
        return `Minimum ${rules.minLength} characters required`;
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        return rules.message || "Invalid format";
      }

      return "";
    },
    [validationRules],
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));

      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched, validateField],
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField],
  );

  const validate = useCallback(() => {
    const newErrors = {};
    Object.keys(validationRules).forEach((field) => {
      const error = validateField(field, values[field] || "");
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validationRules, validateField]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    validate,
    reset,
    setIsSubmitting,
    setErrors,
  };
};

/**
 * Hook for window resize detection
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

/**
 * Hook for media query matching
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

/**
 * Hook for click outside detection
 */
export const useClickOutside = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [callback]);

  return ref;
};

/**
 * Hook for local storage state
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
