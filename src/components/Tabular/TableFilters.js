// @flow
import React from 'react';

import { connect } from 'react-redux';
import { setItemsOnPageFilter, setUserNameFilter } from '../../actions/filters';

type Props = {
  setItemsOnPageFilter: (itemsOnPage: number) => void,
  setUserNameFilter: (userNameFilter: string) => void,
  userNameFilter: string,
  itemsOnPage: number,
  users: Array<string>,
};

export class TableFilters extends React.Component<Props> {
  handleItemsOnPageChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    const itemsOnPage = parseInt(e.currentTarget.value);
    this.props.setItemsOnPageFilter(itemsOnPage);
  };

  handleUserNameChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    // TODO: handle autosugestions using props.users
    const userNameFilter = e.currentTarget.value;
    this.props.setUserNameFilter(userNameFilter);
  };

  render() {
    return (
      <div className="TableFilters">
        <div className="TableFilters__filter">
          <p className="TableFilters__title">Filter by user</p>
          <input
            type="text"
            placeholder="Start writing..."
            value={this.props.userNameFilter}
            onChange={this.handleUserNameChange}
            className="inpt"
          />
        </div>
        <div className="TableFilters__filter">
          <p className="TableFilters__title">Number of visible rows</p>
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
  users: posts.map(post => post.userName),
});

const mapDispatchToProps = dispatch => ({
  setUserNameFilter: value => dispatch(setUserNameFilter(value)),
  setItemsOnPageFilter: value => dispatch(setItemsOnPageFilter(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableFilters);
