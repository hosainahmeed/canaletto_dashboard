import React from "react";

interface ImageGalleryProps {
  topImage: string;
  bottomImages: string[]; 
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ topImage, bottomImages }) => {
  if (bottomImages.length !== 4) {
    console.warn("bottomImages array should contain exactly 4 images");
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Top Image */}
      <img
        src={topImage}
        alt="Top"
        className="w-[300px] h-[200px] object-cover rounded-lg"
      />

      {/* Bottom Row of 4 Images */}
      <div className="flex space-x-2">
        {bottomImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Bottom ${index + 1}`}
            className="w-17 h-17 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
