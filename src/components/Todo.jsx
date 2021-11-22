import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState('')
    const [items, setItems] = useState([])
    const handleAdd = () => {
        // setItems((oditems)=> [...oditems,input])
        setItems([...items, {name: input, i: new Date().getTime()}]);
        setInput('')
        console.log(items);
    }
    const handleDelete = (i) => {
        
        setItems(items.filter(items => items.i !== i))
        console.log('delete');
    }
    return (
        <div>
            <h1>ToDo</h1>
            <div>
                <input type="text" placeholder="enter  ToDo..." value={input} onChange={ e => setInput(e.target.value)}/>
                <button onClick={handleAdd}>Add</button>
            </div>
        
            <div>
                {items.map((val,i)=> {
                    return <li  key={i}> 
                            {val.name}
                            <button  onClick={() =>handleDelete(val.i)}>delete</button>
                    </li>
                    
                })}
            </div>
            {/* <ol>
                {items.map((val , i) => {
                    return (<div>
                    <li  key={val.i}>{val}</li>
                    <button onClick={handleDelete}>X</button>
                    </div>
                    )
                })}
            </ol> */}
        </div>
    )
}

export default Todo
