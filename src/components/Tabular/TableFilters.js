import React from 'react';

import { connect } from 'react-redux';
import { setItemsOnPageFilter, setUserNameFilter } from '../../actions/filters';

export class TableFilters extends React.Component {
  handleItemsOnPageChange = e => {
    const itemsOnPage = parseInt(e.target.value);
    this.props.setItemsOnPageFilter(itemsOnPage);
  };

  handleUserNameChange = e => {
    // TODO: handle autosugestions using props.users
    const userNameFilter = e.target.value;
    this.props.setUserNameFilter(userNameFilter);
  };

  render() {
    return (
      <div className="TableFilters">
        <div className="TableFilters__user">
          <p>Filter by user</p>
          <input
            type="text"
            value={this.props.userNameFilter}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div className="TableFilters__pagination">
          <p>Number of visible rows</p>
          <select
            value={this.props.itemsOnPage}
            onChange={this.handleItemsOnPageChange}
          >
            {[5, 10, 15, 20].map(o => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ filters, posts }) => ({
  itemsOnPage: filters.itemsOnPage,
  userNameFilter: filters.userNameFilter,
  // users: posts.map(post => post.userName),
});

const mapDispatchToProps = dispatch => ({
  setUserNameFilter: value => dispatch(setUserNameFilter(value)),
  setItemsOnPageFilter: value => dispatch(setItemsOnPageFilter(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableFilters);
