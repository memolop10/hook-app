import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../fixtures/demoTodos";


describe('Test in todoReducer', () => {
    
    // test('should return the state by default', () => {
       
    //     const state = todoReducer( demoTodos, {});
    //     console.log(state)
    //     expect( state ).toEqual( demoTodos )
    // })

    test('should add new TODO', () => {
       
        const newTodo ={
            id: 13,
            todo: 'Comprar huevo',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer( demoTodos, action);
        console.log(state)
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, newTodo] )
    })

    test('should delete a TODO', () => {
        
        const action = {
            type: 'delete',
            payload: 11
        }

        const state = todoReducer( demoTodos, action);
        console.log(state)
        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [demoTodos[1]] )
    })
    
    test('should do a TOOGLE of TODO', () => {
        
        const action = {
            type: 'toggle',
            payload: 11
        }

        const state = todoReducer( demoTodos, action);
        console.log(state)
        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] )
    })
});
