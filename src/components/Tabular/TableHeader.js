import React from 'react';

import ArrowsUpDown from './ArrowsUpDown';

// mapping code names to human readable names
const cols = {
  id: '#ID',
  username: 'USERNAME',
  postTitle: 'POST TITLE',
  views: 'VIEWS',
  likes: 'LIKES',
  createdAt: 'CREATED AT',
};

export default function TableHeader() {
  return (
    <div className="TableHeader">
      {Object.entries(cols).map(([k, v]) => (
        <div className="TableHeader__col" key={k}>
          <p>{v}</p>
          <ArrowsUpDown columnName={k} />
        </div>
      ))}
    </div>
  );
}
