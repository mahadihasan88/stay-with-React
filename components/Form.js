import React from "react";

class Form extends React.Component{
            
    state={
        title:"Javascript",
        comment:"javascript is highly used programing language",
        library:"React",
        isAwesome:true
    }
    clickHandle=(e)=>{
        //console.log(e.target.type);

        if(e.target.type==='text'){
        this.setState({
          title:e.target.value, 
        })}
        else if(e.target.type==='textarea'){
            this.setState({
                comment:e.target.value, 
              })
        }
        else if(e.target.type==='select-one'){
            this.setState({
               library:e.target.value, 
              })
        }
        
        
        else if(e.target.type==='checkbox'){
            this.setState({
                isAwesome:e.target.checked, 
              })
        }
        else{
            console.log("Nothing Here");
        }

    }
    submitHandler=(e)=>{
        const {title,comment,library,isAwesome}=this.state;
        e.preventDefault();
        console.log(title,comment,library,isAwesome);
    }
 
    render(){
        const {title,comment,library,isAwesome}=this.state;  //destructure

        return(<div>
             <form onSubmit={this.submitHandler}>
                
              <input type="text" value= {title}   onChange={this.clickHandle}/>
             </form>
             <br/>
            
             <textarea name="textarea" value={comment} onChange={this.clickHandle} ></textarea>
             <br/>
             <br/>
             <select value={library} onChange={this.clickHandle}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
             </select>
             <br/>
             <br/>
             <input type={"checkbox"} checked={isAwesome}onChange={this.clickHandle}></input>
             <br/>
             <br/>
             <input type="submit" value="Submit" onClick={this.submitHandler}/>

        </div>)
    }

}
export default Form;