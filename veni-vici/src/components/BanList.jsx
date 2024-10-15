import React from 'react';

function BanList({ banList }) {
  return (
    <div className="ban-list">
      <h3>Banned Items</h3>
      <ul>
        <li><strong>Titles:</strong> {banList.titles.join(', ')}</li>
        <li><strong>Genres:</strong> {banList.genres.join(', ')}</li>
        <li><strong>Years:</strong> {banList.years.join(', ')}</li>
        <li><strong>Ratings:</strong> {banList.ratings.join(', ')}</li>
      </ul>
    </div>
  );
}

export default BanList;
