
import React from "react";
import Button from "./Button";

class Clock extends React.Component{

    
    state={date:new Date(),
    locale:'bn-BD'};

    componentDidMount(){
      this.clockTimer=  setInterval(() => {this.tick()}, 1000);
        
    }
 componentWillUnmount(){
     clearInterval(this.clockTimer);
 }
    tick(){
        this.setState({date:new Date()});
    }
    handleClick=(locale)=> {
   
    this.setState({
        locale,
            });
    };
  
    render(){
       
        const {date,locale}=this.state;
        
  
        return(<div>
        
            <div className="clockRunning">
                <span ><h2>এখন সময় : {date.toLocaleTimeString(locale)}</h2></span>
            </div>
           {/* <button onClick={this.handleClick.bind(this,'us-EN')}>Click Here</button> */}
         
            { locale==='bn-BD' ?(
           <Button  chang  e={this.handleClick} 
            locale="en-US" show={false} enable={" "} >Click here
            </Button>):
            
             (<Button  change={this.handleClick} 
            locale="bn-BD" show={true} enable>Click here
            </Button>
            ) }
            </div>
        )
    }
}

export default Clock;






































// import React from "react";

// class Operation extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.state= {date: new Date()}
//     // }
//     state={date : new Date()};

//     componentDidMount(){
//        this.clockTimer= setInterval(() => {this.tick()}, 1000);
//     }

//     componentWillUnmount(){
//             clearInterval(this.clockTimer)
//     }
//     tick(){
//         this.setState({
//             date:new Date()
//         })
//     }
//   render(){
//     return (
//       <h1 className="contianer">
//         <span className="timeSection"> Now Bangladesh time  is {this.state.date.toLocaleTimeString(this.props.locale)}</span>
//           <br/>
//       <span> {this.props.children}</span>
       
//       </h1>
      
//     )
 
//   }
// }

// export default Operation;