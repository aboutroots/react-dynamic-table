import React from 'react';
import { shallow } from 'enzyme';
import Tabular from '../Tabular';

it('renders without crashing', () => {
  shallow(<Tabular />);
});
