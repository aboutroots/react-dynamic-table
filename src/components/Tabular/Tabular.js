import React, { Component } from 'react';

import TableFilters from './TableFilters';
import TableHeader from './TableHeader';
import TableItems from './TableItems';
import TablePagination from './TablePagination';

export class Tabular extends Component {
  render() {
    return (
      <div className="Tabular">
        <TableFilters />
        <TableHeader />
        <TableItems />
        <TablePagination />
      </div>
    );
  }
}

export default Tabular;
