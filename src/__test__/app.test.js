
//component/ __test__/App.test.js


import { shallow } from 'enzyme';
import App from './App.jsx'

describe('App', ()=> {
 it('renders correctly', ()=> {
   const wrapper = shallow(<App />);
 expect(wrapper).toMatchSnapshot()
                           });
});
