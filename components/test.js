import React from "react";

class Form extends React.Component{
    state={
        title:"Md Mahadi Hasan",
    }
    clickHandler=(e)=>{
 
    if(e.target.type=='text'){
      
      this.setState({
        title:e.target.value,
      })
    }
    }
    submitHandler=(event)=>{
        const {title}=this.state;
        event.preventDefault();
        console.log(title);
    }

    render(){
        const {title}=this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <label>
                Name:
                 <input type="text" value={title} onChange={this.clickHandler} ></input>
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit"></input>
                </form>
              
            </div>
        )
    }
}
export default Form;