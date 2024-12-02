import React from 'react';
import { Image } from 'lucide-react';

const CaseFavorite = () => {
  return (
    <div className="case-favorite-card">
      <h2 className="case-favorite-header">Case Favorite</h2>
      <div className="case-favorite-content">
        <div className="case-favorite-item">
          Lorem ipsum dolor sit amet consectetur. Et tincidunt
        </div>
        <button className="case-favorite-button">
          <Image className="case-favorite-icon" />
          <span>Photo</span>
        </button>
        <div className="case-favorite-item">
          Lorem ipsum dolor sit amet consectetur. Et tincidunt
        </div>
      </div>
    </div>
  );
};

export default CaseFavorite;
