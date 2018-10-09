import React from 'react';
import LibraryMain from './LibraryMain';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
}

const component = shallow(<LibraryMain {...props}/>);

describe('<LibraryMain />', () => {

  it('should start', () => {
      expect(component.instance()).toBeTruthy()
  })

})
