import React from 'react';
import Header from './Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
    state :[ {
        collapse: false,
        isWideEnough: false,
        dropdownOpen: false
    }]
}

const component = shallow(<Header {...props}/>);
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
describe('<Header />', () => {

  it('should start', () => {
      expect(component.instance()).toBeTruthy()
  })

})
