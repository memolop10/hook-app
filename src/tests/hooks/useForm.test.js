import  useForm  from '../../hooks/useForm'
import { renderHook, act } from '@testing-library/react-hooks'

describe('Test in useForm', () => {
    
    const initialForm = {
        name: 'guillermo',
        email: 'memo@gmail.com'
    }

    test('should return a form by default', () => {
        const { result } = renderHook( () => useForm( initialForm ))   
        
        const [ values, handleInputChange, reset ] = result.current;

        expect( values ).toEqual( initialForm )
        expect( typeof handleInputChange ).toBe( 'function' )
        expect( typeof reset ).toBe( 'function' )
    })

    test('should change the value of the form', () => {
        
        const { result } = renderHook( () => useForm( initialForm ))   
        const [ , handleInputChange ] = result.current;

        act( () => {

            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Melissa'
                }
            })
        })

        const [ values ] = result.current;
        expect( values ).toEqual( { ...initialForm, name: 'Melissa' } )

    })
    
    test('should reset the form', () => {
        const { result } = renderHook( () => useForm( initialForm ))   
        const [ , handleInputChange, reset ] = result.current;

        act( () => {

            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Melissa'
                }
            })

            reset();
        })

        const [ values ] = result.current;
        expect( values ).toEqual( initialForm )
 
    })
    
    
});
