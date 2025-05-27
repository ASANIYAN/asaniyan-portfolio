import { useRef, type ReactNode } from "react";
import gsap from "gsap";

// Define types for the component props
interface AnimationTiming {
  enter: number;
  leave: number;
}

interface AnimationEase {
  enter: string;
  leave: string;
}

interface UnderlineAnimationProps {
  children: ReactNode;
  className?: string;
  duration?: AnimationTiming;
  ease?: AnimationEase;
  underlineClassName?: string;
  [key: string]: unknown; // For additional props
}

const UnderlineAnimation: React.FC<UnderlineAnimationProps> = ({
  children,
  className = "",
  duration = { enter: 0.4, leave: 0.3 },
  ease = { enter: "power2.out", leave: "power2.in" },
  underlineClassName = "w-[0%] h-[1px] bg-black absolute bottom-0 left-0",
  ...props
}) => {
  const underlineRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = (): void => {
    if (underlineRef.current) {
      gsap.to(underlineRef.current, {
        width: "100%",
        duration: duration.enter,
        ease: ease.enter,
      });
    }
  };

  const handleMouseLeave = (): void => {
    if (underlineRef.current) {
      gsap.to(underlineRef.current, {
        width: "0%",
        duration: duration.leave,
        ease: ease.leave,
      });
    }
  };

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      <span ref={underlineRef} className={underlineClassName}></span>
    </div>
  );
};

export default UnderlineAnimation;
