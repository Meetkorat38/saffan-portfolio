import React from 'react';
import { useProjects } from '../../context/ProjectContext';
import { Link } from 'react-router-dom';
import { Edit2, Trash2, Database } from 'lucide-react';
import { projects as initialProjects } from '../../data/constants';

const ProjectList: React.FC = () => {
  const { projects, deleteProject, loading, addProject } = useProjects();

  const handleSeed = async () => {
     if (window.confirm(`This will add ${initialProjects.length} projects to the database. Continue?`)) {
        for (const p of initialProjects) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...rest } = p;
            await addProject(rest);
        }
     }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-ink"></div>
      </div>
    );
  }


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
          <div className="text-center py-12 text-gray-500 font-bold italic flex flex-col items-center gap-4">
             <p>No projects found in database.</p>
             <button 
                onClick={handleSeed}
                className="bg-ink text-paper px-6 py-3 font-oswald uppercase font-bold hover:bg-paper hover:text-ink border-2 border-transparent hover:border-ink transition-all shadow-hard-sm flex items-center gap-2"
             >
                <Database className="w-5 h-5" /> Seed Initial Data
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
