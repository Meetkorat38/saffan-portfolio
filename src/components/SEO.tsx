import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title,
  description = "Graphic Designer based in Ahmedabad. Specialized in brand identity, print design, and digital art.",
  name = "Memon Saffan",
  type = "website",
  image = "https://res.cloudinary.com/daz2n7hec/image/upload/v1714555891/portfolio/og-image.jpg", // Replace with a real default image
  url = "https://memon-saffan.vercel.app/"
}: SEOProps) {
  const fullTitle = `${title} | ${name}`;
  
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@memonsaffan" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
