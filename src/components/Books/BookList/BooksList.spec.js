import React from 'react';
import BooksList from './BooksList';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
  books:[{isbn:'1'}]
}

const component = shallow(<BooksList {...props}/>);

describe('<BooksList />', () => {

  it('should start', () => {
      expect(component.instance()).toBeTruthy()
  })

})
