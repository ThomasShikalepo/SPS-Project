import { useState, useEffect } from "react";
//interface for props that we need to pass
interface UseCarouselProps {
  totalImages: number;
  interval?: number;
}

//grab an image to cycle through each time period
export const useCarousel = ({
  totalImages,
  //5 seconds
  interval = 5000,
}: UseCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, interval);

    return () => clearInterval(timer);
  }, [totalImages, interval]);

  return currentImage;
};
