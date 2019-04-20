import React from 'react';
import { shallow } from 'enzyme';
import Tabular from '../../components/Tabular/Tabular';

it('renders without crashing', () => {
  shallow(<Tabular />);
});
