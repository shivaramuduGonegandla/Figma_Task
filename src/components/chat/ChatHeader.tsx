import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ChatHeaderProps {
  contacts: Array<{
    id: string;
    name: string;
    initials: string;
    unreadCount?: number;
  }>;
  activeContactId: string;
  onContactSelect: (id: string) => void;
}

export function ChatHeader({ contacts, activeContactId, onContactSelect }: ChatHeaderProps) {
  return (
    <div className="flex items-center p-2 bg-white border-b overflow-x-auto">
      {contacts.map((contact) => (
        <button
          key={contact.id}
          onClick={() => onContactSelect(contact.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full mr-2 min-w-max ${
            activeContactId === contact.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-sm">
            {contact.initials}
          </div>
          <span className="text-sm font-medium">{contact.name}</span>
          {contact.unreadCount && (
            <span className="w-5 h-5 flex items-center justify-center bg-blue-600 text-white text-xs rounded-full">
              {contact.unreadCount}
            </span>
          )}
        </button>
      ))}
      
      <button className="ml-auto px-4 py-2 text-blue-500 hover:bg-blue-50 rounded-full flex items-center">
        <MessageSquare className="w-5 h-5 mr-2" />
        <span>Messaging</span>
      </button>
    </div>
  );
}