import React from 'react'

const BtnCardConservation = () => {
  return (
    <div className="card-body">
    <div className="conversation-section">
      {/* Conversation Text */}
      <p><strong>Conversation:</strong> 1 Market Street, San Francisco, CA 94105</p>

      {/* Buttons */}
      <div className="buttons-container">
        <h2>Conversation</h2>
        <h2>Address Update</h2>
        <h2>Free Reversal</h2>
        <button className="btn-escalate">Escalate</button>
      </div>
    </div>
    </div>
  )
}

export default BtnCardConservation