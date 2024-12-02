import React, { useState } from 'react';
import { Send, Copy, Eye, Mail, MessageSquare, ChevronDown } from 'lucide-react';

const AskCatura = () => {
  const [showGreetingTemplate, setShowGreetingTemplate] = useState(false);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Ask Catura</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <button className="flex items-center space-x-1 text-gray-600">
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-md hidden group-hover:block">
              
          
          <div className="relative">
            <button className="flex items-center space-x-1 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>Greetings</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-md hidden group-hover:block">
              {/* Dropdown options */}
              <ul>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div></div>
      <div className="bg-gray-100 rounded-lg p-6 mb-4">
        {!showGreetingTemplate ? (
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio viverra in
            suspendisse lacinia. Amet sit in ut gravida greater text of
            possibilities.
          </p>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-4">Greeting Template</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg text-blue-500">
                <Copy className="w-5 h-5" />
                <span>Copy to Send</span>
              </button>
              <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg text-blue-500">
                <Eye className="w-5 h-5" />
                <span>Preview</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AskCatura;
