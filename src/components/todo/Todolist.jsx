import React from "react";
import check from './check1.png'
import trash from './remove.png'
import styled from "styled-components";

const Li = styled.div`
display: flex;
/* justify-content: space-around; */
justify-content: center;
align-items: center;
padding: 0px 200px;

    .outline{
      /* box-shadow: 0px 2px  3px grey; */
      width: 30rem;
      border-radius: 5px;
      margin: 5px 20px;
      
    }

    button{
      margin: 0px 5px;
      outline: none;
      border: none;
      backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    }
    
    
`


const Listitems =styled.li`
list-style: none;
  padding: 5px 10px;
  /* background-color: #e0dfdf; */
  backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(35, 46, 65, 0.75);
  color: white;

  `

const Todolist = ({ text, todos, setTodos, todo }) => {
  const handleDelete = (e) => {
    setTodos(todos.filter((ele) => ele.id !== todo.id));
   
    
  };

  const completeCheck =(e) => {
    e.preventDefault()
      setTodos(todos.map((items) => {
        if(items.id === todo.id){
          return{
            ...items , completed : !items.completed
          }
        }
        console.log(items);
        return items;
      }))
      console.log(todo.completed,'complete');
    }
  
  return (
    <Li className='legit'>
    <div className='outline'>
      <Listitems  className={todo.completed? 'checked' : 'unchecked'}>{text}</Listitems>
      </div>
      <div className="checkbox-buttons">
        <button onClick={completeCheck}><img src={check}  height='30px' alt="" /></button>
        <button onClick={handleDelete}><img src={trash} height='30px' alt="" /></button>
      </div>

    </Li>
  );
};

export default Todolist;
