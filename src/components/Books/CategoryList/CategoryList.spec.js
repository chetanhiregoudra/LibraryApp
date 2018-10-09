import React from 'react';
import CategoryList from './CategoryList';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
}

const component = shallow(<CategoryList {...props}/>);

describe('<App />', () => {

  it('should start', () => {
      expect(component.instance()).toBeTruthy()
  })

})
