import React from 'react';

const ConversationCard = () => {
  return (
    <div className="card-body">
     

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
          />
          <div className="file-btn-container">
            <button className="file-btn">File Taken</button>
            <button className="send-btn">
              <i className="fa fa-paper-plane"></i> Send
            </button>
          </div>
        </div>
    </div>
  );
};

export default ConversationCard;
