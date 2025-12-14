import React, { useState } from 'react';
import axios from 'axios';
import { Upload, X, Loader2 } from 'lucide-react';

interface ImageUploaderProps {
  currentImage?: string;
  onImageUploaded: (url: string) => void;
  multiple?: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ currentImage, onImageUploaded, multiple = false }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError('');
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
        setError('Cloudinary credentials missing in .env');
        setUploading(false);
        return;
    }

    try {
      // Track progress for each file
      const totalSize = Array.from<File>(files).reduce((acc, file) => acc + file.size, 0);
      const loadedBytes = new Array(files.length).fill(0);

      const uploadPromises = Array.from<File>(files).map(async (file, idx) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset); 
        
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            formData,
            {
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.total) {
                        loadedBytes[idx] = progressEvent.loaded;
                        const totalLoaded = loadedBytes.reduce((acc, curr) => acc + curr, 0);
                        const percent = Math.round((totalLoaded / totalSize) * 100);
                        setUploadProgress(multiple ? `Uploading ${files.length} images... ${percent}%` : `Uploading... ${percent}%`);
                    }
                }
            }
        );
        return response.data.secure_url;
      });

      // setUploadProgress(`Uploading ${files.length} images...`); // Removed to allow individual progress updates
      const urls = await Promise.all(uploadPromises);
      
      urls.forEach(url => onImageUploaded(url));
      setUploadProgress('');

    } catch (err) {
      console.error(err);
      setError('Failed to upload one or more images.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="border-2 border-dashed border-ink p-6 bg-gray-50 text-center relative group">
       {!multiple && currentImage ? (
         <div className="relative aspect-video max-h-64 mx-auto overflow-hidden border-2 border-ink shadow-hard-sm">
            <img src={currentImage} alt="Preview" className="w-full h-full object-cover" />
            <button 
              type="button"
              onClick={() => onImageUploaded('')}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full border border-ink hover:scale-110 transition-transform"
            >
              <X className="w-4 h-4" />
            </button>
         </div>
       ) : (
         <div className="flex flex-col items-center justify-center gap-4 py-8">
            {uploading ? (
              <div className="flex flex-col items-center">
                  <Loader2 className="w-10 h-10 animate-spin text-ink mb-2" />
                  <span className="text-sm font-bold uppercase">{uploadProgress || 'Uploading...'}</span>
              </div>
            ) : (
              <Upload className="w-10 h-10 text-gray-400 group-hover:text-ink transition-colors" />
            )}
            
            <label className={`cursor-pointer bg-ink text-paper px-4 py-2 font-bold uppercase hover:bg-paper hover:text-ink border-2 border-transparent hover:border-ink transition-all shadow-md ${uploading ? 'pointer-events-none opacity-50' : ''}`}>
              <span className="text-sm">{uploading ? 'Please wait...' : (multiple ? 'Upload Images' : 'Upload Cover Image')}</span>
              <input 
                type="file" 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange} 
                disabled={uploading}
                multiple={multiple} 
              />
            </label>
            <p className="text-xs font-bold text-gray-400 uppercase">
                {multiple ? 'Supports Batch Upload (JPG, PNG)' : 'Supports JPG, PNG, WEBP'}
            </p>
         </div>
       )}
       
       {error && <p className="text-red-500 text-xs font-bold mt-2">{error}</p>}
    </div>
  );
};

export default ImageUploader;
