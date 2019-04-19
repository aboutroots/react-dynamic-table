// @flow
import * as React from 'react';
import moment from 'moment';

import type { postType } from '../../flow/exports';

export default function TableItem({
  id,
  username,
  postTitle,
  views,
  likes,
  createdAt,
  active,
}: postType) {
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
