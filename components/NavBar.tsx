'use client';

import React from 'react';
import { Search, Apple } from 'lucide-react';

const NavBar = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-20 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Navigation */}
                <div className="flex items-center gap-10">
                    <button className="text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base">
                        Mission
                    </button>
                    <button className="text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base">
                        Jobs
                    </button>
                    <button className="text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base">
                        Ambassadors
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    {/* Search Icon */}
                    <button className="text-white hover:text-gray-200 transition-colors">
                        <Search className="w-6 h-6" />
                    </button>

                    {/* Download Button */}
                    <div className="bg-white rounded-full px-6 py-2.5 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow">
                        <span className="text-gray-800 font-medium text-sm font-title font-semibold">Download</span>
                        <div className="flex items-center gap-2">
                            <Apple className="w-5 h-5 text-gray-800" />
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-green-400 rounded-md flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;