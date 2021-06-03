import React from 'react';
import HookApp from '../HookApp'

import '@testing-library/jest-dom'
import { shallow } from 'enzyme';



describe('Test in HookApp', () => {

    test('should render corectly the component HookApp', () => {
        
        let wrapper = shallow( <HookApp /> )
        console.log(wrapper)
        expect( wrapper ).toMatchSnapshot();
       
    })
    
});
