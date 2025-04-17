import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollAnimation = ({ id }) => {
  if (!id) {
    id = 'solar_installation'
  };
  
  const location = useLocation(); // Get current route

  useEffect(() => {
    const elements = document.querySelectorAll(".appear");
    // console.log("Observer mounted on:", location.pathname);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log("Element in view:", entry.target);
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after first appearance
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname, id]); // Re-run on route change

  return null;
};

export default ScrollAnimation;
