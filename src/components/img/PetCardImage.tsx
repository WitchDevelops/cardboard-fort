import React, { Suspense } from 'react';
import { UnavailableImage } from './UnavailableImage';

interface PetCardImageProps {
  img?: string;
  alt: string;
}

export const PetCardImage: React.FC<PetCardImageProps> = ({ img, alt }) => {
  return (
    <div className="absolute top-0 left-0 rounded-xl w-full h-full shrink-0 overflow-hidden z-0">
      <Suspense fallback={<UnavailableImage />}>
        {img ? (
          <img
            className="aspect-square h-full w-full object-cover"
            src={img}
            alt={alt}
          />
        ) : (
          <UnavailableImage />
        )}
      </Suspense>
    </div>
  );
};
