// @flow
import React from 'react';
import { connect } from 'react-redux';

import { setCurrentPage } from '../../actions/filters';
import { selectFiltered } from '../../selectors/posts';

type Props = {
  setCurrentPage: (page: number) => void,
  currentPage: number,
  pagesCount: number,
};

export class TablePagination extends React.Component<Props> {
  handleOnClick = (page: number) => {
    this.props.setCurrentPage(page);
  };
  render() {
    return (
      <div className="TablePagination">
        {[...Array(this.props.pagesCount).keys()].map(i => {
          let className = 'TablePagination__page';
          if (i === this.props.currentPage) {
            className += ' TablePagination__page--active';
          }
          return (
            <div
              className={className}
              key={i}
              onClick={() => this.handleOnClick(i)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const activeUser = state.auth.activeUser;
  const filteredPosts = selectFiltered(state.posts, activeUser, state.filters);
  const pagesCount = Math.ceil(
    filteredPosts.length / state.filters.itemsOnPage
  );
  return {
    currentPage: state.filters.currentPage,
    pagesCount,
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentPage: page => dispatch(setCurrentPage(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablePagination);
