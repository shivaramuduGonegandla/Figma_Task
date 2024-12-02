import React from 'react';

const UserAvatar = ({ initials, name, isActive, hasNotification }) => {
  return (
    <div className="relative">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        }`}
        title={name}
      >
        {initials}
      </div>
      {hasNotification && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
          2
        </span>
      )}
    </div>
  );
};

export default UserAvatar;
