import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LogOut, LayoutGrid, Plus } from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#e8e8e3] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-ink text-paper flex flex-col border-r-4 border-ink">
        <div className="p-6 border-b-2 border-gray-700">
           <h1 className="font-oswald font-bold text-2xl uppercase tracking-wider">Admin Panel</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
           <Link to="/admin/dashboard" className="flex items-center gap-3 p-3 hover:bg-paper hover:text-ink font-bold uppercase transition-colors group">
              <LayoutGrid className="w-5 h-5" /> Dashboard
           </Link>
           <Link to="/admin/projects/new" className="flex items-center gap-3 p-3 hover:bg-paper hover:text-ink font-bold uppercase transition-colors">
              <Plus className="w-5 h-5" /> New Project
           </Link>
        </nav>

        <div className="p-4 border-t-2 border-gray-700">
           <button onClick={handleLogout} className="w-full flex items-center gap-2 text-red-400 hover:text-red-300 font-bold uppercase p-2">
             <LogOut className="w-5 h-5" /> Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
           <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
