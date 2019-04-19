import React from 'react';
import { connect } from 'react-redux';

import { setCurrentPage } from '../../actions/filters';
import { selectFiltered } from '../../selectors/posts';

export class TablePagination extends React.Component {
  handleOnClick = page => {
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
            <p
              className={className}
              key={i}
              onClick={() => this.handleOnClick(i)}
            >
              {i + 1}
            </p>
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
