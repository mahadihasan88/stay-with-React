import React from 'react';

class Todo extends React.Component {
    state = {
     
        count:1
    };

   
    incrementChange=()=>{
        
        this.setState((prevState)=>({count:prevState.count+1} ))
        
    };

    render() {
        const { count} = this.state;

        return (
            <div>
            
                <hr/>
                <button type='button' value={count} onClick={this.incrementChange}>
                    Click {count} the button</button>
                    <h1> {count} </h1>
            </div>
        );
    }
}

export default Todo;