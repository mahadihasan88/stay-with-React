import { useState } from "react";

function Todo(){

    const [todo,setTodo]=useState('');
    const [warning,setWarning]=useState(null);
    
   const  toChangeState=(e)=>{
    const inputValue=e.target.value;
    
    const Warning=inputValue.includes('HSTU')? 'HSTU is a  awesome  University':null;

    setTodo(inputValue);
     setWarning(Warning);

    }


    return (
        <div>
            <p> {todo}</p>
            <textarea  type="text"  value={todo} onChange={toChangeState} ></textarea>
            <p>{ warning || 'Goodwork'}</p>
        </div>
    )
}
export default Todo;