import React, { useState } from 'react'
import Check from './Check';

const Odd = () => {
    const [input, setInput] = useState()
    // const [flag, setFlag] = useState(null)
    const handleCheck = () => {
        console.log('click');
        
        if (input%2 === 0) {
           return <Check res='even' />
           // setFlag(true)
        }
        else{
            return <Check res='odd' />
            // setFlag(false)
        }
    }

    return (
        <div>
        <h1>even,Odd</h1>
        <div>
            <input type="number" value={input || ''}  onChange={e => setInput(e.target.value)} />
            
            <div>
                <button onClick={handleCheck}> Check</button>
                <>{handleCheck()}</>
                <i>h</i>


                {/* <Check input={input} handleCheck={handleCheck}/> */}
            {/* <p>{flag ? 'even' : 'odd'}</p> */}
            </div>
        </div>
    </div>
)
}


export default Odd
