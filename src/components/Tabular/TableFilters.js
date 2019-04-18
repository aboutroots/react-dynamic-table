/* eslint-disable react-native/no-raw-text */
import React from "react";

export class TableFilters extends React.Component {
  render() {
    return (
      <div className="TableFilters">
        <div className="TableFilters__user">
          <p>Filter by user</p>
        </div>
        <div className="TableFilters__pagination">
          <p>Number of visible rows</p>
        </div>
      </div>
    );
  }
}

export default TableFilters;
