/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User as UserIcon, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="glass-nav sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center group">
                            <motion.div
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Hexagon className="h-8 w-8 text-brand-600 mr-3" />
                            </motion.div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-brand-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-brand-600 transition-all duration-500">
                                MicroFeedback
                            </span>
                        </Link>
                    </div>

                    {user && (
                        <div className="flex items-center space-x-6">
                            <div className="hidden sm:flex items-center px-4 py-2 rounded-full bg-slate-100/50 border border-slate-200/50">
                                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-brand-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-inner overflow-hidden mr-3">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-slate-800 leading-tight">{user.name}</span>
                                    <span className="text-xs font-medium text-brand-600 uppercase tracking-widest leading-tight">{user.role}</span>
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleLogout}
                                className="group relative inline-flex items-center justify-center p-2 sm:px-4 sm:py-2.5 overflow-hidden font-medium text-brand-600 rounded-xl shadow-sm border border-brand-200/50 bg-white/50 hover:bg-brand-50 hover:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all duration-300"
                            >
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-brand-100"></span>
                                <LogOut className="h-5 w-5 sm:mr-2 relative z-10 group-hover:text-brand-700 transition-colors" />
                                <span className="relative z-10 hidden sm:block font-semibold">Sign out</span>
                            </motion.button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
