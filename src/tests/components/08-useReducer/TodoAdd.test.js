import { shallow } from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";


describe('Test in <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow( 
        <TodoAdd 
           handleAddTodo={ handleAddTodo } 
        />
    )

    test('should render correctly ', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('shouldnt call handleAddTodo ', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} })
        
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    })

    test('should call handleAddTodo ', () => {

       const value = 'Aprender VUE';
       wrapper.find('input').simulate('change',{
           target:{
               value,
               name:'description'
           }
       })

       const formSubmit = wrapper.find('form').prop('onSubmit');

       formSubmit({ preventDefault(){} })
       
       expect( handleAddTodo ).toHaveBeenCalledTimes(1);
       expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); // { }
       expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
       })

       //despues de ejecutar todo esto el reset debe de limpiar el input
       expect( wrapper.find('input').prop('value') ).toBe('');
    })
});
