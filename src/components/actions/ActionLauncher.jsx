import React from 'react';
import { Plus, Search } from 'lucide-react';
const ActionLauncher = () => {
  return (
    <div className="action-launcher-card">
      <h2 className="action-launcher-header">Action Launcher</h2>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search actions..."
          className="action-launcher-input"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="action-launcher-btn-primary">
          <Plus className="w-5 h-5" />
          <span>Add Action</span>
        </button>
        <button className="action-launcher-btn-secondary">
          Fee Reversal
        </button>
        <button className="action-launcher-btn-secondary">
          Retail Onboarding
        </button>
        <button className="action-launcher-btn-secondary">
          Address Update
        </button>
      </div>
    </div>
  );
};

export default ActionLauncher;
