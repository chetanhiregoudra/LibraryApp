import React from 'react';
import {BookDetails} from './Book-Details';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
    getBookDetails: () => {},
    bookdetails:[{}]
}

const component = shallow(<BookDetails {...props}/>);

describe('<BookDetails />', () => {

  it('should start', () => {
      expect(component.instance()).toBeTruthy()
  })

})
