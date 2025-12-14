import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProjects } from '../../context/ProjectContext';
import ImageUploader from './ImageUploader';
import { Project } from '../../types';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';

const ProjectForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, addProject, updateProject } = useProjects();
  
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    category: '',
    description: '',
    image: '',
    client: '',
    year: '',
    services: '',
    gallery: [],
  });

  useEffect(() => {
    if (id) {
      const project = projects.find(p => p.id === id);
      if (project) {
        setFormData({
            ...project,
            gallery: project.gallery || [] // Type safety fallback
        });
      }
    }
  }, [id, projects]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.image) {
      alert('Please fill in all required fields (Cover Image, Title, Category)');
      return;
    }

    if (id) {
      updateProject({ ...formData, id } as Project);
    } else {
      addProject(formData as Omit<Project, 'id'>);
    }
    navigate('/admin/dashboard');
  };

  const handleAddGalleryImage = (url: string) => {
      setFormData(prev => ({
          ...prev,
          gallery: [...(prev.gallery || []), url]
      }));
  };

  const handleRemoveGalleryImage = (indexToRemove: number) => {
      setFormData(prev => ({
          ...prev,
          gallery: (prev.gallery || []).filter((_, idx) => idx !== indexToRemove)
      }));
  };

  const handleMoveImage = (index: number, direction: 'left' | 'right') => {
      if (!formData.gallery) return;
      const newGallery = [...formData.gallery];
      const targetIndex = direction === 'left' ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex >= newGallery.length) return;

      [newGallery[index], newGallery[targetIndex]] = [newGallery[targetIndex], newGallery[index]];
      
      setFormData(prev => ({ ...prev, gallery: newGallery }));
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <button onClick={() => navigate('/admin/dashboard')} className="flex items-center gap-2 font-bold uppercase mb-6 hover:underline">
        <ArrowLeft className="w-5 h-5" /> Back to Dashboard
      </button>

      <h1 className="font-oswald font-black text-4xl uppercase mb-8 border-b-4 border-ink pb-4">
        {id ? 'Edit Project' : 'New Project'}
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
         {/* LEFT COLUMN: Main Info */}
         <div className="md:col-span-2 space-y-6 bg-white border-2 border-ink p-6 shadow-hard-sm h-fit">
            <h2 className="font-oswald font-bold text-2xl uppercase mb-4">Project Details</h2>
            
            {/* Title */}
            <div>
                <label className="block font-bold uppercase text-sm mb-2">Project Title *</label>
                <input 
                    type="text"
                    value={formData.title}
                    onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full border-2 border-ink p-2 font-oswald text-xl font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                    placeholder="e.g. NEON BRANDING"
                />
            </div>

            {/* Description */}
            <div>
                <label className="block font-bold uppercase text-sm mb-2">Description</label>
                <textarea 
                    value={formData.description}
                    onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full border-2 border-ink p-2 font-archivo min-h-[150px] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                    placeholder="Describe the project..."
                />
            </div>

            {/* Gallery Section */}
            <div className="pt-6 border-t-2 border-gray-200">
                <label className="block font-bold uppercase text-sm mb-4">Project Gallery</label>
                
                {/* Gallery Grid */}
                {formData.gallery && formData.gallery.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                        {formData.gallery.map((imgUrl, idx) => (
                            <div key={idx} className="relative group aspect-square border-2 border-ink bg-gray-100 flex flex-col">
                                <img src={imgUrl} alt={`Gallery ${idx}`} className="w-full flex-1 object-cover" />
                                
                                {/* Controls Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                    <button 
                                        type="button"
                                        onClick={() => handleRemoveGalleryImage(idx)}
                                        className="bg-red-500 text-white px-3 py-1 text-xs font-bold uppercase hover:scale-105 transition-transform border border-ink"
                                    >
                                        Remove
                                    </button>
                                    <div className="flex gap-2">
                                        <button 
                                            type="button" 
                                            onClick={() => handleMoveImage(idx, 'left')}
                                            disabled={idx === 0}
                                            className="bg-paper text-ink p-1 border border-ink hover:bg-ink hover:text-paper disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            &lt;
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={() => handleMoveImage(idx, 'right')}
                                            disabled={idx === (formData.gallery?.length || 0) - 1}
                                            className="bg-paper text-ink p-1 border border-ink hover:bg-ink hover:text-paper disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            &gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Add New Gallery Image */}
                <div className="border-2 border-dashed border-gray-300 p-4 bg-gray-50">
                    <p className="text-xs font-bold uppercase mb-2 text-center text-gray-500">Add to Gallery (Multi-select supported)</p>
                    <ImageUploader 
                        onImageUploaded={handleAddGalleryImage}
                        multiple={true} 
                    />
                </div>
            </div>
         </div>

         {/* RIGHT COLUMN: Meta Data & Cover */}
         <div className="space-y-6">
            
            <div className="bg-white border-2 border-ink p-6 shadow-hard-sm">
                <h2 className="font-oswald font-bold text-xl uppercase mb-4">Cover Image</h2>
                <ImageUploader 
                    currentImage={formData.image} 
                    onImageUploaded={(url) => setFormData(prev => ({ ...prev, image: url }))} 
                />
            </div>

            <div className="bg-white border-2 border-ink p-6 shadow-hard-sm space-y-4">
                <h2 className="font-oswald font-bold text-xl uppercase mb-4">Meta Data</h2>
                
                {/* Category */}
                <div>
                    <label className="block font-bold uppercase text-xs mb-1">Category *</label>
                    <input 
                        type="text"
                        value={formData.category}
                        onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full border-2 border-ink p-2 font-bold focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow text-sm"
                        placeholder="e.g. Packaging"
                    />
                </div>

                {/* Client */}
                <div>
                    <label className="block font-bold uppercase text-xs mb-1">Client</label>
                    <input 
                        type="text"
                        value={formData.client}
                        onChange={e => setFormData(prev => ({ ...prev, client: e.target.value }))}
                        className="w-full border-2 border-ink p-2 font-bold focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow text-sm"
                        placeholder="e.g. Nike"
                    />
                </div>

                {/* Year */}
                <div>
                    <label className="block font-bold uppercase text-xs mb-1">Year</label>
                    <input 
                        type="text"
                        value={formData.year}
                        onChange={e => setFormData(prev => ({ ...prev, year: e.target.value }))}
                        className="w-full border-2 border-ink p-2 font-bold focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow text-sm"
                        placeholder="e.g. 2025"
                    />
                </div>

                {/* Services */}
                <div>
                    <label className="block font-bold uppercase text-xs mb-1">Services</label>
                    <input 
                        type="text"
                        value={formData.services}
                        onChange={e => setFormData(prev => ({ ...prev, services: e.target.value }))}
                        className="w-full border-2 border-ink p-2 font-bold focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow text-sm"
                        placeholder="e.g. Art Direction, 3D"
                    />
                </div>
            </div>

            <button 
                type="submit"
                className="w-full bg-ink text-paper py-4 font-bold font-oswald text-xl uppercase tracking-wider hover:bg-paper hover:text-ink border-2 border-transparent hover:border-ink transition-all shadow-md active:translate-y-1 flex justify-center items-center gap-2"
            >
                <Save className="w-5 h-5" /> Save Project
            </button>
         </div>

      </form>
    </div>
  );
};

export default ProjectForm;
