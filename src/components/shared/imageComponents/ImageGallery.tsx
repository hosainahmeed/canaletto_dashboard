import React from "react";
import { cn } from '../../../lib/utils';

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  if (images.length !== 5) {
    console.warn("bottomImages array should contain exactly 4 images");
  }

  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      {/* Top Image */}
      <img
        src={images[0]}
        alt="Top"
        className="w-full h-50 object-cover rounded-lg"
      />

      {/* Bottom Row of 4 Images */}
      <div className="flex space-x-2">
        {images.slice(1).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Bottom ${index + 1}`}
            className="w-full h-17 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
