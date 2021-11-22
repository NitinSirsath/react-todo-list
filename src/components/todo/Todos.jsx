import React from 'react'
import Todolist from './Todolist'
import styled from 'styled-components'



const Todos = ({todos , setTodos, id}) => {
    return (
        <>
           <div>
               {todos.map(todo => { 
                   return <Todolist todo={todo} todos={todos} text ={todo.text} setTodos={setTodos} key={todo.id} />
               })}
               </div> 
        </>
    )
}

export default Todos
