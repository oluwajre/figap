import { useEffect } from "react";

const CarouselClick = () => {
  const checkAndClickElements = () => {
    const targetElements = document.querySelectorAll(".next-carousel-click");
    
    if (targetElements.length > 0) {
      targetElements.forEach((element) => {
        setTimeout(() => {
          element.click();
        }, 6000);
      });
    }
  };

  useEffect(() => {
    checkAndClickElements();
  }, []);

  return null;
};

export default CarouselClick;
