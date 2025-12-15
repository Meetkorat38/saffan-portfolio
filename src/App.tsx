import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Project } from './types';
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider, useProjects } from './context/ProjectContext';

// Public Components
import ProjectDetailView from './components/ProjectDetailView';
import ContactDrawer from './components/ContactDrawer';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InfoGrid } from './components/InfoGrid';
import { AchievementsBanner } from './components/AchievementsBanner';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';

// Admin Components
import AdminRoute from './components/admin/AdminRoute';
import LoginPage from './components/admin/LoginPage';
import DashboardLayout from './components/admin/DashboardLayout';
import ProjectList from './components/admin/ProjectList';
import ProjectForm from './components/admin/ProjectForm';

import LoadingScreen from './components/LoadingScreen';
import CloudinaryImage from './components/ui/CloudinaryImage';
import SEO from './components/SEO';

// Wrapper for Public Portfolio to consume Project Context
const PublicPortfolio: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    // We can use the project context here if we want dynamic project loading in the future
    // But for now, PortfolioSection uses its own logic (we will update it to use context)
    
    if (isLoading) {
        return <LoadingScreen onComplete={() => setIsLoading(false)} />;
    }

    if (selectedProject) {
        return (
          <div className="min-h-screen bg-[#e8e8e3] text-ink font-archivo relative overflow-hidden selection:bg-black selection:text-white">
            <div className="fixed inset-0 pointer-events-none z-0 bg-noise mix-blend-multiply opacity-40"></div>
            <ProjectDetailView project={selectedProject} onClose={() => setSelectedProject(null)} />
          </div>
        );
      }
    
      return (
        <div className="min-h-screen bg-[#e8e8e3] text-ink font-archivo relative overflow-hidden selection:bg-black selection:text-white">
          <SEO title="Home" />
          <div className="fixed inset-0 pointer-events-none z-50 bg-noise mix-blend-multiply opacity-40"></div>
          <ContactDrawer isOpen={isContactDrawerOpen} onClose={() => setIsContactDrawerOpen(false)} />
          
          <div className="max-w-6xl mx-auto min-h-screen bg-paper relative shadow-2xl border-x-0 md:border-x-4 border-ink my-0 md:my-8 box-border">
            <HeroSection onOpenContact={() => setIsContactDrawerOpen(true)} />
            {/* Pass the project setter to PortfolioSection. Note: PortfolioSection needs refactoring to consume Context if we want dynamic data there too. */}
            <PortfolioSectionWrapper onSelectProject={setSelectedProject} />
            <InfoGrid />
            <AchievementsBanner />
            <ServicesSection />
            <Footer />
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-white paper-edge-bottom z-10"></div>
          </div>
        </div>
      );
}

// Wrapper to inject projects from context into PortfolioSection
const PortfolioSectionWrapper: React.FC<{ onSelectProject: (p: Project) => void }> = ({ onSelectProject }) => {
    const { projects } = useProjects();
    // Re-using the same UI structure but mapping over dynamic projects
    return (
        <section className="p-4 md:p-8 border-b-4 border-ink">
        <div className="flex justify-center mb-8">
          <h2 className="font-oswald font-black text-6xl md:text-8xl uppercase tracking-tight text-center relative inline-block">
            Portfolio
            <div className="absolute -left-12 -top-8 w-16 h-16 bg-ink rounded-full opacity-10 blur-sm pointer-events-none"></div>
            <div className="absolute -right-8 bottom-0 w-8 h-8 bg-black rounded-full pointer-events-none" style={{clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'}}></div>
          </h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={project.id} className="group relative cursor-pointer" onClick={() => onSelectProject(project)}>
              <div className="h-full border-4 border-ink p-2 bg-white shadow-hard transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] duration-200 flex flex-col">
                <div className="p-2 bg-checkerboard border-2 border-ink mb-3">
                  <div className="bg-white border-2 border-ink aspect-[4/3] overflow-hidden relative">
                    <CloudinaryImage 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                    />
                    <div className="absolute top-2 right-2 bg-ink text-paper px-2 py-0.5 text-xs font-bold font-oswald uppercase">Vol. {idx + 1}</div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300">
                       <div className="bg-paper border-2 border-ink px-3 py-1 font-bold font-oswald uppercase transform scale-0 group-hover:scale-100 transition-transform duration-200 rotate-3">View Project</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-oswald font-bold text-2xl uppercase mb-1 leading-none group-hover:underline decoration-2">{project.title}</h3>
                <div className="mt-auto">
                  <p className="font-archivo text-xs font-bold uppercase text-gray-400 mb-2">{project.category}</p>
                  <p className="font-archivo text-sm text-gray-600 leading-tight border-t-2 border-dotted border-gray-400 pt-2 line-clamp-3">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}

const App: React.FC = () => {
  return (
    <RouterWrapper />
  );
}

const RouterWrapper = () => (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <ProjectProvider>
              <Routes>
                  {/* Public Route */}
                  <Route path="/" element={<PublicPortfolio />} />
  
                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<LoginPage />} />
                  
                  <Route path="/admin" element={
                      <AdminRoute>
                          <DashboardLayout />
                      </AdminRoute>
                  }>
                      <Route path="dashboard" element={<ProjectList />} />
                      <Route path="projects/new" element={<ProjectForm />} />
                      <Route path="projects/edit/:id" element={<ProjectForm />} />
                      {/* Default redirect to dashboard */}
                      <Route index element={<Navigate to="dashboard" replace />} />
                  </Route>
              </Routes>
          </ProjectProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
)

export default App;
