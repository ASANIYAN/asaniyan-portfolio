import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type MarqueeImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type MarqueeProps = {
  texts: string[];
  textClassName?: string;
  images: MarqueeImage[];
  duration?: number; // Animation duration in seconds
  gap?: number; // Gap between images in pixels
};

/**
 * InfiniteMarquee - A component that creates an infinite scrolling effect for images
 *
 * Implementation:
 * 1. Clone the content container
 * 2. Calculate the distance to translate based on content width + gap
 * 3. Animate all children using GSAP
 * 4. Recalculate on window resize with debounce
 */
const InfiniteMarquee: React.FC<MarqueeProps> = ({
  texts,
  images,
  textClassName,
  duration = 20,
  gap = 60,
}) => {
  // Create refs for our elements
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Initialize the marquee animation
  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return;

    // Clone the content
    const contentClone = contentRef.current.cloneNode(true) as HTMLDivElement;
    marqueeRef.current.appendChild(contentClone);

    // Function to play the marquee animation
    const playMarquee = () => {
      if (!marqueeRef.current || !contentRef.current) return;

      // Store the current progress if animation exists
      const progress = tweenRef.current ? tweenRef.current.progress() : 0;

      // Kill the existing tween if it exists
      if (tweenRef.current) {
        tweenRef.current.progress(0).kill();
      }

      // Calculate the content width
      const width = contentRef.current.offsetWidth;

      // Calculate the distance to translate (negative width + gap)
      const distanceToTranslate = -1 * (width + gap);

      // Create the animation
      tweenRef.current = gsap.fromTo(
        marqueeRef.current.children,
        { x: 0 },
        {
          x: distanceToTranslate,
          duration: duration,
          ease: "none",
          repeat: -1,
        }
      );

      // Restore the previous progress
      tweenRef.current.progress(progress);
    };

    // Initial play
    playMarquee();

    // Debounce function for resize
    const debounce = (func: () => void): EventListener => {
      let timer: ReturnType<typeof setTimeout>;
      return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, 500);
      };
    };

    // Add resize listener with debounce
    const handleResize = debounce(playMarquee);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [gap, duration, images, texts]); // Re-run if these props change

  return (
    <div className={`overflow-hidden`}>
      <div
        ref={marqueeRef}
        className="flex items-center"
        style={{ columnGap: `${gap}px` }}
      >
        <div
          ref={contentRef}
          className="flex items-center"
          style={{ columnGap: `${gap}px` }}
        >
          {texts.map((text, index) => (
            <div key={index} className="flex justify-center items-center w-fit">
              <p className={cn("text-xl", textClassName)}>{text}</p>
            </div>
          ))}
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                width={image.width}
                height={image.height}
                className="max-w-none" // Prevent image from shrinking
              />
            </div>
          ))}
        </div>
        {/* Clone will be added by JS */}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
