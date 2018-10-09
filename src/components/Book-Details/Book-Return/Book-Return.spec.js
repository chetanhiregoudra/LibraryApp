import React from 'react';
import BookReturn from './Book-Return';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
    booklist:[{}]
}

const component = shallow(<BookReturn {...props}/>);

describe('<BookReturn />', () => {

  it('should start', () => {
      expect(component.instance()).toBeTruthy()
  })

})
