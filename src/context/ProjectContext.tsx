import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project } from '../types';
import { projects as initialProjects } from '../data/constants';

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Load projects from local storage or fallback to constants
    const storedProjects = localStorage.getItem('portfolio_projects');
    if (storedProjects) {
      try {
        setProjects(JSON.parse(storedProjects));
      } catch (e) {
        console.error("Failed to parse projects from local storage", e);
        setProjects(initialProjects);
      }
    } else {
      setProjects(initialProjects);
    }
  }, []);

  useEffect(() => {
    // Sync projects to local storage whenever they change
    if (projects.length > 0) {
      localStorage.setItem('portfolio_projects', JSON.stringify(projects));
    }
  }, [projects]);

  const addProject = (newProjectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...newProjectData,
      id: Date.now().toString(), // Simple ID generation
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const updateProject = (updatedProject: Project) => {
    setProjects(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within an ProjectProvider');
  }
  return context;
};
