import { Cloudinary } from '@cloudinary/url-gen';

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
  console.error("VITE_CLOUDINARY_CLOUD_NAME is not set environment variables");
}

export const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName || 'demo', // Fallback to demo to prevent crash, but log error
  },
});
