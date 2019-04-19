import React from 'react';

import ArrowsUpDown from './ArrowsUpDown';

// mapping code names to human readable names
const cols = {
  id: '#ID',
  username: 'User Name',
  postTitle: 'Post Title',
  views: 'Views',
  likes: 'Likes',
  createdAt: 'Created At',
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
