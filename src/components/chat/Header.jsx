import React from 'react';
import UserAvatar from './UserAvatar';
import { MessageSquare } from 'lucide-react';

const Header = () => {
  const users = [
    { initials: 'CB', name: 'Cheyenne Bergson' },
    { initials: 'CB', name: 'Jonathan Higgins' },
    { initials: 'CB', name: 'Capt. Trunk' },
    { initials: 'CB', name: 'Hannibal Smith', isActive: true },
    { initials: 'CB', name: 'Capt. Trunk' },
    { initials: 'CB', name: 'Hannibal Smith', hasNotification: true },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <div className="flex items-center space-x-2">
        {users.map((user, index) => (
          <UserAvatar key={index} {...user} />
        ))}
      </div>
      <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
        <MessageSquare className="w-5 h-5" />
        <span>Messaging</span>
      </button>
    </div>
  );
};

export default Header;