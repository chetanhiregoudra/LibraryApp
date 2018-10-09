import React from 'react';
import { BooksPage } from './Books';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
    fetchBooks: () => {},
    
    books: [{title:''}]
   
}

const component = shallow(<BooksPage {...props}/>);

describe('<BooksPage />', () => {

    it('should start', () => {
        component.instance().componentDidMount();
        //component.instance().componentWillMount();
        expect(component.instance()).toBeTruthy()
    })

})
