import React from 'react'

const Todolist = (props) => {
    return (
        <div>
            {props.val}
            <button onClick={()=> props.handledelete(props.id)}>del</button>
        </div>
    )
}

export default Todolist
