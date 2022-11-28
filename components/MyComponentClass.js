import React from "react";


class MyComponentClass extends React.Component{
    state={
        count:0,
        date:new Date(),
    }
    componentDidMount(){
        const {count}=this.state;
        document.title=`Clicked ${count} Times`
    }
    componentDidUpdate(){
        const {count}=this.state;
         document.title=`Clicked ${count} Times`;
         setInterval(this.Tick, 1000);

    }
   
    Tick=()=>{
        this.setState({date:new Date()})
    }
    addClick=()=>{
        this.setState(({count})=>({count: count+1}))
    }
    
    render(){
    const {date,count}=this.state;
        return(
            <div>
                <p>Time:{date.toLocaleTimeString()}</p>
                <p>
                    <button type="button" onClick={this.addClick}>Click {count}</button>
                </p>
            </div>
        )
    }

}
export default MyComponentClass;