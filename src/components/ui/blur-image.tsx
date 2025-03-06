
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function BlurImage({ src, alt, className, ...props }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        isLoaded ? "img-loaded" : "img-loading",
        className
      )}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
}
