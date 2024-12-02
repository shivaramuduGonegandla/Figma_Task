import React from 'react';
import { MoreVertical, CheckCheck } from 'lucide-react';

interface ChatMessageProps {
  id: string;
  content: string;
  timestamp: string;
  sender: {
    name: string;
    avatar?: string;
    initials?: string;
  };
  isReceived: boolean;
  channel: 'SMS' | 'WhatsApp';
}

export function ChatMessage({ content, timestamp, sender, isReceived, channel }: ChatMessageProps) {
  return (
    <div className={`flex ${isReceived ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className="flex items-start max-w-[70%]">
        {isReceived && (
          <div className="mr-2">
            {sender.avatar ? (
              <img src={sender.avatar} alt={sender.name} className="w-8 h-8 rounded-full" />
            ) : (
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                {sender.initials}
              </div>
            )}
          </div>
        )}
        
        <div>
          {isReceived && (
            <div className="text-sm text-gray-600 mb-1">{sender.name}</div>
          )}
          
          <div className="flex items-start space-x-2">
            <div
              className={`p-3 rounded-lg ${
                isReceived
                  ? 'bg-gray-100'
                  : 'bg-blue-500 text-white'
              }`}
            >
              {content}
            </div>
            
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
            <span>{timestamp}</span>
            <span>·</span>
            <span>{`${isReceived ? 'Received' : 'Sent'} By ${channel}`}</span>
            <CheckCheck className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}