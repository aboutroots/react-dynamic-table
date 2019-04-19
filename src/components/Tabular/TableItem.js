import * as React from 'react';
import moment from 'moment';

export default function TableItem(props) {
  const { id, username, postTitle, views, likes, createdAt, active } = props;
  const createdAtFormatted = moment(createdAt).format(moment.HTML5_FMT.DATE);
  return (
    <div className={'TableItem' + (active ? ' TableItem--active' : '')}>
      {[id, username, postTitle, views, likes, createdAtFormatted].map(
        (c, idx) => (
          <p className="TableItem__col" key={idx}>
            {c}
          </p>
        )
      )}
    </div>
  );
}
