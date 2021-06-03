import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../../../components/08-useReducer/TodoList'
import { demoTodos } from '../fixtures/demoTodos'
// import TodoListItem from '../../../components/08-useReducer/TodoListItem'


describe('Test in component <TodoList />', () => {
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow( 
        <TodoList 
            todos={ demoTodos }
            handleDelete= { handleDelete }
            handleToggle= { handleToggle }
        /> 
    )
    
    test('should render correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('should have two <TodoList />', () => {

        //  console.log(wrapper.find('TodoListItem').at(1).props())  
         expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length )
         expect( wrapper.find('TodoListItem').at(1).prop('handleDelete') ).toEqual( expect.any( Function ) )
    })
})
