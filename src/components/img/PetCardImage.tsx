import React, { Suspense } from 'react';
import { UnavailableImage } from './UnavailableImage';
import Image from 'next/image';

interface PetCardImageProps {
  img?: string;
  alt: string;
}

export const PetCardImage: React.FC<PetCardImageProps> = ({ img, alt }) => {
  return (
    <div className="absolute top-0 left-0 rounded-xl w-full h-full shrink-0 overflow-hidden z-0">
      <Suspense fallback={<UnavailableImage />}>
        {img ? (
          <Image
            className="aspect-square h-full w-full object-cover"
            fill
            src={img}
            alt={alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <UnavailableImage />
        )}
      </Suspense>
    </div>
  );
};
