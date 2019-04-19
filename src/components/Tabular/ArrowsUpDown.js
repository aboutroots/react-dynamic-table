import React from 'react';

import { connect } from 'react-redux';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { setSortByFilter, setSortDirectionFilter } from '../../actions/filters';

export class ArrowsUpDown extends React.Component {
  handleUp = () => {
    this.props.setSortByFilter(this.props.columnName);
    this.props.setSortDirectionFilter('asc');
  };

  handleDown = () => {
    this.props.setSortByFilter(this.props.columnName);
    this.props.setSortDirectionFilter('desc');
  };

  render() {
    return (
      <div className="ArrowsUpDown">
        <FaAngleUp onClick={this.handleUp} />
        <FaAngleDown onClick={this.handleDown} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSortByFilter: value => dispatch(setSortByFilter(value)),
  setSortDirectionFilter: value => dispatch(setSortDirectionFilter(value)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(ArrowsUpDown);
