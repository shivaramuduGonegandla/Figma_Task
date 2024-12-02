import React from 'react';
import { ChevronRight } from 'lucide-react';

const SidebarLink = ({ icon, label, hasSubmenu, isActive }) => {
  return (
    <a
      href="#"
      className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'hover:bg-gray-800 text-gray-300'
      }`}
    >
      <div className="flex items-center space-x-3">
        <span className="w-5 h-5">{icon}</span>
        <span>{label}</span>
      </div>
      {hasSubmenu && <ChevronRight className="w-4 h-4" />}
    </a>
  );
};

export default SidebarLink;
