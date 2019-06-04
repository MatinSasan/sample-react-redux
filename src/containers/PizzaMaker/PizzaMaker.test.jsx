import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PizzaMaker } from './PizzaMaker';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';

configure({ adapter: new Adapter() });

describe('<PizzaMaker />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PizzaMaker onInitIngredients={() => {}} />);
  });

  it('should render <PizzaMaker /> when receiving ingredients', () => {
    wrapper.setProps({ ings: { bacon: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
