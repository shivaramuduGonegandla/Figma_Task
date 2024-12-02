import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ConversationCard from "./components/ConversationCard";
import AskCatura from "./components/messaging/AskCatura";
import CaseFavorite from "./components/cases/CaseFavorite";
import ActionLauncher from "./components/actions/ActionLauncher";
import Header from "./components/chat/Header";
import { ChatHeader } from "./components/chat/ChatHeader";
import { ChatMessage } from "./components/chat/ChatMessage";
import { ChatInput } from "./components/chat/ChatInput";  // ChatInput for typing messages
import BtnCardConservation from "./components/BtnCardConservation";

const contacts = [
  { id: '1', name: 'Cheyenne Bergson', initials: 'CB' },
  { id: '2', name: 'Jonathan Higgins', initials: 'CB' },
  { id: '3', name: 'Capt. Trunk', initials: 'CB' },
  { id: '4', name: 'Hannibal Smith', initials: 'CB', unreadCount: 2 },
];

const mockMessages = [
  {
    id: '1',
    content: 'Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam.',
    timestamp: '9:08 PM',
    sender: { name: 'CB', initials: 'CB' },
    isReceived: true,
    channel: 'SMS',
  },
  {
    id: '2',
    content: 'Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.',
    timestamp: '9:08 PM',
    sender: { name: 'Rachel Adams', initials: 'RA' },
    isReceived: true,
    channel: 'WhatsApp',
  },
  {
    id: '3',
    content: 'Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum.',
    timestamp: '9:08 PM',
    sender: { name: 'You', initials: 'HK' },
    isReceived: false,
    channel: 'WhatsApp',
  },
];

const App = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <ChatHeader
          contacts={contacts}
          activeContactId={4} // Hannibal is the active contact
          onContactSelect={() => {}}
        />
        <Header />

        {/* Layout for three sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {/* Left Column - Card and BtnCardConservation */}
          <div className="col-span-1">
            <Card />
            <BtnCardConservation />
          </div>

          {/* Middle Column - Chat Messages and SMS */}
          <div className="col-span-1 lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
              {/* Chat Messages */}
              <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                {mockMessages.map((message) => (
                  <ChatMessage key={message.id} {...message} />
                ))}
              </div>

              {/* Chat Input (for typing messages) */}
              <ChatInput />
            </div>
          </div>

          {/* Right Column - AskCatura, ActionLauncher, and CaseFavorite */}
          <div className="col-span-1 lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
              <AskCatura />
              <ActionLauncher />
              <CaseFavorite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
