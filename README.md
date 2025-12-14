# Saffan Portfolio Website

A brutalist-style portfolio website for a Graphic Designer, built with React, Vite, and Cloudinary.

## Tech Stack
- **React**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling
- **Cloudinary**: Image management and optimization

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` (or `.env.local`) file:
   ```env
   VITE_ADMIN_PASSWORD=your_password
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_preset
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

## Admin Access
- Access the admin dashboard at `/admin`.
- Default password is configured in your `.env`.
