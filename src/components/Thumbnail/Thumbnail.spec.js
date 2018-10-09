import React from 'react';
import Thumbnail from './Thumbnail';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
    book:[{picUrl:''}]
}

const component = shallow(<Thumbnail {...props}/>);
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
describe('<Thumbnail />', () => {

  it('should start', () => {
      expect(component).toBeTruthy()
  })

})
