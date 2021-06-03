import React from 'react'
import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import useFetch from "../../../hooks/useFetch";

jest.mock( '../../../hooks/useFetch' );
jest.mock( '../../../hooks/useCounter' );



describe('Test in <MultipleCustomHooks/>', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    test('should render correctly', () => {
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show the information', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'THE MEMO',
                quote: 'soy el mejor'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks/>)
        // console.log(wrapper.html())

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-2').text().trim() ).toBe( 'soy el mejor' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'THE MEMO' );
    })
    
    
});
