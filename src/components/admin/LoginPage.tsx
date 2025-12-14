import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-[#e8e8e3] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-paper border-4 border-ink shadow-hard p-8 relative">
          <div className="absolute -top-4 -left-4 bg-ink text-paper px-2 py-1 font-bold font-oswald uppercase text-sm -rotate-2">
             Admin Access
          </div>

          <h1 className="font-oswald font-black text-4xl uppercase mb-6 text-center">Restricted Area</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-bold text-sm uppercase mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border-2 border-ink p-3 font-mono focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                placeholder="Enter access code..."
              />
            </div>

            {error && (
              <div className="bg-red-100 border-2 border-red-500 text-red-700 p-2 text-sm font-bold text-center">
                {error}
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-ink text-paper py-3 font-oswald font-bold uppercase text-xl hover:bg-paper hover:text-ink border-2 border-transparent hover:border-ink transition-all shadow-md active:translate-y-1 flex items-center justify-center gap-2"
            >
              Enter System <ArrowUpRight className="w-5 h-5" />
            </button>
          </form>
      </div>
    </div>
  );
};

export default LoginPage;
