import React, { useState } from 'react'
import Todolist from './Todolist'
import {v4 as uuidv4} from 'uuid'

const Todo2 = () => {
    const [input, setInput] = useState('')
    const [items , setItems] = useState([])
    const handleAdd = () => {
        // setItems((newItems)=> [...newItems , input])
        // setItems([...items,input ])
        setItems([...items, { name:input, id: uuidv4() }])
        // setItems((oditems)=> [...oditems,input])
        console.log(items,'items');
        setInput('')
    
    }
    const handledelete = (id) => {
        console.log('del',id)
        // const newItems = [...items]
    
        // setItems((id)=> {
        //     items.filter((i)=>{
        //         // return i.id !== id
        //     })
        // })
       
        setItems(items.filter(item=>item.id !== id))
        }

    return (
        <div>
            <h1>Todo</h1>
            <div>
                <input type="text" placeholder="enter todo" value={input}  onChange={e => setInput(e.target.value)}  />
                <button onClick={handleAdd}>add</button>
            </div>
            <ol>
                
                    {items.map((val , i) => {
                        return <Todolist val={val.name} key={i} id={val.id} handledelete={handledelete} />
                    })}
                
            </ol>
        </div>
    )
}

export default Todo2
