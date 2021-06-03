import { shallow } from "enzyme"
import TodoListItem from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../fixtures/demoTodos"



describe('Test in <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn()

    const wrapper = shallow( <TodoListItem 
        todo={ demoTodos[0] }
        index={ 11 }
        handleDelete= { handleDelete }
        handleToggle= { handleToggle }
    /> )

    test('should render correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('should call function handleDelete', () => {
        
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    })
    
    test('should call function handleToggle', () => {
        
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
        
    })

    test('should show the texto correctly', () => {
        
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( `12. ${ demoTodos[0].todo }`);
        
    })

    test('should have class complete if the TODO.done = true ', () => {
        
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow( <TodoListItem 
            todo={ todo }
        /> )

        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
    
    })
    
    
})
