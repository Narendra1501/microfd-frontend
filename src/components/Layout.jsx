/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col font-sans relative overflow-hidden">
            {/* Animated Background blobs for extra depth */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-float" />
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-pink-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '4s' }} />

            <Navbar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="h-full"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: 'rgba(255, 255, 255, 0.9)',
                        color: '#1e293b',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.5)',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        fontWeight: '500',
                        padding: '16px',
                        borderRadius: '12px'
                    },
                    success: {
                        iconTheme: {
                            primary: '#8b5cf6',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#fff',
                        },
                    },
                }}
            />
        </div>
    );
};

export default Layout;
