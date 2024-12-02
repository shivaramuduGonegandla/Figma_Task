import React, { useState } from 'react';
const Card = () => {
  const [isOpen, setIsOpen] = useState(null); // Track which dropdown is open

  const toggleDropdown = (index) => {
    setIsOpen(isOpen === index ? null : index); // Toggle dropdown open/close
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <div className="header-left">
            <img 
              src="src/assets/images/profile-pic.png" 
              alt="Profile" text="CB" 
              className="profile-image" 
            />
            <h2>Hannibal Smith</h2>
          </div>
          <div className="header-right">
           
            <p><i class="fa-sharp-duotone fa-solid fa-location-dot"></i>1 Market Street, San Francisco, CA 94105</p>
            <p>12345</p>
          </div>
        </div>

        <div className="card-body">
          {/* Info Rows with Dropdowns and Add Buttons */}
          <div className="info-row">
            <p><strong>Move to Archive:</strong> X</p>
            <span className="three-dots" onClick={() => toggleDropdown(0)}>...</span>
            {isOpen === 0 && <div className="dropdown"></div>}
          </div>

          <div className="info-row">
            <p><strong>Customer ID:</strong> ☆ Π CB</p>
            <span className="three-dots" onClick={() => toggleDropdown(1)}>...</span>
            {isOpen === 1 && (
              <div className="dropdown">
                <button>Edit</button>
                <button>Delete</button>
                <button>More Options</button>
              </div>
            )}
          </div>

          <div className="info-row">
            <p><strong>Email Address:</strong> rachel@sample.com</p>
            <span className="three-dots" onClick={() => toggleDropdown(2)}>...</span>
            {isOpen === 2 && (
              <div className="dropdown">
                <button>Edit</button>
                <button>Delete</button>
                <button>More Options</button>
              </div>
            )}
          </div>

          <div className="info-row">
            <p><strong>Phone Number:</strong> 8051298905</p>
            <span className="three-dots" onClick={() => toggleDropdown(3)}>...</span>
            {isOpen === 3 && (
              <div className="dropdown">
                <button>Edit</button>
                <button>Delete</button>
                <button>More Options</button>
              </div>
            )}
          </div>
          <button className="full-width-btn">
              <p>+   Add</p>
            </button>
          <br /><br /><br />
          <div className="info-row">
            <p><strong>Loyalty Tier:</strong> Silver</p>
            <span className="three-dots" onClick={() => toggleDropdown(4)}>...</span>
            {isOpen === 4 && (
              <div className="dropdown">
                <button>Edit</button>
                <button>Delete</button>
                <button>More Options</button>
              </div>
            )}
          </div>

          <div className="info-row">
            <p><strong>Segment:</strong> Sleepy Customer</p>
            <span className="three-dots" onClick={() => toggleDropdown(5)}>...</span>
            {isOpen === 5 && (
              <div className="dropdown">
                <button>Edit</button>
                <button>Delete</button>
                <button>More Options</button>
              </div>
            )}
          </div>
          <button className="full-width-btn">
              <p> + Add</p>
            </button>
          <br /><br /><br />
          <div className="info-row">
            <p><strong>Lifetime Value:</strong> S1M</p>
            <span className="three-dots" onClick={() => toggleDropdown(6)}>...</span>
            {isOpen === 6 && (
              <div className="dropdown">
                <button>Edit</button>
                <button>Delete</button>
                <button>More Options</button>
              </div>
            )}
          </div>

          <div className="info-row">
            <p><strong>Propensity to Purchase:</strong> 75%</p>
            <span className="three-dots" onClick={() => toggleDropdown(7)}>...</span>
            {isOpen === 7 && <div className="dropdown"></div>}
          </div>
          <button className="full-width-btn">
              <p>+ Add</p>
            </button>
<br /><br /><br />
          <div className="info-row">
            <p><strong>Engagement Score:</strong> 80%</p>
            <span className="three-dots" onClick={() => toggleDropdown(8)}>...</span>
            {isOpen === 8 && <div className="dropdown"></div>}
            
          </div>
          <button className="full-width-btn">
              <p>+ Add</p>
            </button>

          <div className="actions">
            <button>Assign other Agent</button><br />
            <button>Add New Widget</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
