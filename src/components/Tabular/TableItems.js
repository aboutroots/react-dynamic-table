// @flow
import React from 'react';
import { connect } from 'react-redux';

import TableItem from './TableItem';
import { selectFiltered, selectPaginated } from '../../selectors/posts';

import type { postType } from '../../flow/exports';

export function TableItems({ posts }: { posts: Array<postType> }) {
  return (
    <div className="TableItems">
      {posts.map((post, idx) => (
        <TableItem {...post} key={idx} />
      ))}
    </div>
  );
}
const mapStateToProps = state => {
  const activeUser = state.auth.activeUser;
  const filtered = selectFiltered(state.posts, activeUser, state.filters);
  const paginated = selectPaginated(filtered, state.filters);
  return {
    posts: paginated,
  };
};

export default connect(mapStateToProps)(TableItems);
