import React from 'react';
import Search from './Search';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
  
}

const component = shallow(<Search {...props}/>);

describe('<Search />', () => {

  it('should start', () => {
      expect(component.instance()).toBeTruthy()
  })

})
