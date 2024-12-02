import React, { useState } from 'react';


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
    content: 'Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam.',
    timestamp: '9:08 PM',
    sender: { name: 'Rachel Adams', initials: 'RA' },
    isReceived: true,
    channel: 'WhatsApp',
  },
  {
    id: '3',
    content: 'Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam.',
    timestamp: '9:08 PM',
    sender: { name: 'You', initials: 'HK' },
    isReceived: false,
    channel: 'WhatsApp',
  },
];

const NextPage = () => {
  const [activeContactId, setActiveContactId] = useState(null);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <div className="page-container">
      {/* Conversation Card */}
      <div className="conversation-card">
        <div className="conversation-section">
          <p>
            <strong>Conversation:</strong> 1 Market Street, San Francisco, CA 94105
          </p>

          {/* Attachment Style */}
          <div className="attachment">
            <p>Attachment</p>
          </div>

          {/* Buttons */}
          <div className="buttons-container">
            <h2>Conversation</h2>
            <h2>Address Update</h2>
            <h2>Free Reversal</h2>
            <button className="btn-escalate">Escalate</button>
          </div>
        </div>

        {/* Gap of 30px */}
        <div style={{ marginBottom: '30px' }}></div>

        {/* User Info Section */}
        <div className="user-info">
          <div className="profile-info">
            <img src="src/assets/images/profile-pic.png" alt="Profile" className="profile-image" />
            <div className="user-details">
              <p><strong>Rachel Adams</strong></p>
              <p>9:08 PM, Received By WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Checkbox Section */}
        <div className="checkbox-section">
          <label>
            <input type="checkbox" name="sms" />
            SMS
          </label>
          <label>
            <input type="checkbox" name="whatsapp" />
            WhatsApp
          </label>
          <label>
            <input type="checkbox" name="email" />
            Email
          </label>
        </div>

        {/* Message Section */}
        <div className="message-section">
          <input
            type="text"
            placeholder="Type message..."
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="file-btn-container">
            <button className="file">File Taken</button>
            <button onClick={handleSendMessage} className="send-btn">
              <i className="fa fa-paper-plane"></i> Send
            </button>
          </div>
        </div>
      </div>

      {/* Chat Header */}
      <div className="chat-header">
        <select
          value={activeContactId || ''}
          onChange={(e) => setActiveContactId(e.target.value)}
          className="contact-select"
        >
          <option value="">Select Contact</option>
          {contacts.map((contact) => (
            <option key={contact.id} value={contact.id}>
              {contact.name}
            </option>
          ))}
        </select>
      </div>

      {/* Message Display Section */}
      <div className="messages-container">
        {mockMessages.map((message) => (
          <div key={message.id} className={`message ${message.isReceived ? 'received' : 'sent'}`}>
            <div className="message-header">
              <span className="sender">{message.sender.name}</span>
              <span className="timestamp">{message.timestamp}</span>
            </div>
            <div className="message-body">{message.content}</div>
            <div className="message-footer">{message.channel}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextPage;
