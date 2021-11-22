import React, { useState } from "react";
import Todos from "./Todos";
import styled from 'styled-components'

const Header = styled.h1`
text-align: center;
color : white;
font-weight: bolder;
margin: 20px ;

`
const Formwrapper = styled.form`
backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
/* border: black 2px solid; */
/* box-shadow: 5px  6px 9px #314e37; */
/* background-color: #eff5bb; */
height: 100%;
width: 100%;
height: 70vh;
border-radius: 10px;
margin-top: 20px;
/* background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */
`
const Inputselect = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 40px 0px 15px 0px;

    input{
      backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(35, 46, 65, 0.75);
    color: white;
    }
`
const Addbutton = styled.div`
display: flex;
justify-content: center;
align-items: center;


`
const Button = styled.button`
background-color: #4592f8;
border-radius: 3px;
padding: 7px 20px;
color: white;
border: none;
font-weight: bolder;
margin: 10px;
cursor: pointer;

  &:active{
    background-color: #1e4de9;
   
  }
`

const Main =styled.div`
border: 1px solid black;
min-height: calc(100vh - 0px);
padding: 0px 200px;
/* background-color: #CEE5D0; */
/* background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'); */
background-image: url('https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
/* background: rgb(2,0,36); */
/* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); */
/* background-color: #cfd0d1; */
/* display: flex;
flex-direction: column;
justify-content: center; */
`
const Day = styled.div`
font-size: 20px;
text-align: center;
color: #c4c3c2;
`

const Form = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filtered , setFiltered] = useState([]);
  
  // const filterHandler = () =>  {
  //   switch(status){
  //     case 'completed' :
  //       setFiltered(todos.filter(todo => todo.completed === true))
  //       break ;

  //       case 'uncompleted' :
  //         setFiltered(todos.filter(todo => todo.completed === false))
  //         break;

  //         default :
  //         setFiltered(todos)
  //         break;
  //       }
  // }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if(input !== ''){
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    console.log("click");
    setInput("");
  }
  };
  var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit' };
var prnDt =  new Date().toLocaleTimeString('en-us', options);

console.log(prnDt);

  return (
    <Main>
      <div>
        <Header>WHAT'S TODAY...</Header>
      </div>
      <Day>
        {prnDt}
      </Day>
      <Formwrapper >
        <Inputselect>
          
          <input
            type="text"
            placeholder="Start Writing..."
            value={input || ""}
            onChange={(e) => setInput(e.target.value)}
          />
          <select name="todos" onChange={statusHandler} id="">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
          
        
        </Inputselect>
        <Addbutton>
          <Button type="submit" onClick={handleAdd}>
            Add
          </Button>
        </Addbutton>
        <div>
          <Todos todos={todos} setTodos={setTodos} />
        </div>
      </Formwrapper>
    </Main>
  );
};

export default Form;
