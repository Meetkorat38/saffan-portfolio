import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { cld } from '../../lib/cloudinary';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({ src, alt, className, width, height }) => {
  // Check if src is a full URL (http/https) or a base64 data URI
  const isUrl = src.startsWith('http') || src.startsWith('data:');

  if (isUrl) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className} 
        loading="lazy"
      />
    );
  }

  // Treat as Cloudinary Public ID
  const myImage = cld.image(src);

  // Apply default optimizations
  myImage.format('auto').quality('auto');

  // Apply resize if dimensions provided
  if (width || height) {
      // If we want specific crop, we can add it here. For now, letting CSS handle layout often works, 
      // but serving right size is better. 
      // Using 'auto' resizing might require more specific request, here we just set attributes or transformation.
      // Let's use transformation for delivery size if provided.
      // Note: This is basic. For advanced usages, we might want to expose the image object builder.
      /* 
      // Example resize logic if strictly needed
      const resizeAction = auto(); 
      if (width) resizeAction.width(width);
      if (height) resizeAction.height(height);
      myImage.resize(resizeAction);
      */
  }

  return (
    <AdvancedImage 
      cldImg={myImage} 
      className={className} 
      alt={alt}
    />
  );
};

export default CloudinaryImage;
