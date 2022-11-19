
import Clock from "./Clock";

export default function Clocklist({serialNumber}){

    return(
        <div>
        {serialNumber.map((key)=><Clock key={Math.random()}/>)}
     
        </div>
    )
}







// import Clock from "./Clock";

// export default function ClockList({quantities=[]}){

//     return(
//         <div>
//         {quantities.map((key)=>(<Clock key={Math.random()}/> ))}
//         </div>
//     )
// }
