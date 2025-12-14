import React from 'react';
import { useProjects } from '../../context/ProjectContext';
import { Link } from 'react-router-dom';
import { Edit2, Trash2 } from 'lucide-react';

const ProjectList: React.FC = () => {
  const { projects, deleteProject } = useProjects();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-oswald font-black text-4xl uppercase">Projects</h2>
        <Link to="/admin/projects/new" className="bg-ink text-paper px-4 py-2 font-bold uppercase hover:bg-paper hover:text-ink border-2 border-transparent hover:border-ink transition-all shadow-hard-sm">
           + Add New
        </Link>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border-2 border-ink p-4 flex flex-col md:flex-row justify-between items-center shadow-hard-sm gap-4">
             <div className="flex items-center gap-4 w-full">
                <div className="w-16 h-16 bg-gray-200 border border-ink shrink-0">
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                   <h3 className="font-oswald font-bold text-xl uppercase">{project.title}</h3>
                   <span className="text-xs font-bold bg-gray-200 px-2 py-0.5 uppercase">{project.category}</span>
                </div>
             </div>

             <div className="flex gap-2 shrink-0">
               <Link to={`/admin/projects/edit/${project.id}`} className="p-2 border-2 border-ink hover:bg-yellow-300 transition-colors">
                  <Edit2 className="w-5 h-5" />
               </Link>
               <button 
                 onClick={() => {
                   if(window.confirm('Are you sure you want to delete this project?')) {
                     deleteProject(project.id);
                   }
                 }}
                 className="p-2 border-2 border-ink hover:bg-red-400 transition-colors"
               >
                  <Trash2 className="w-5 h-5" />
               </button>
             </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="text-center py-12 text-gray-500 font-bold italic">
             No projects found. Create one to get started.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
