

function HoverCounter({count,countChangeEvent}){
    
    return <div> <h2 onMouseOver={countChangeEvent}>Mouse is hover for {count} Times</h2></div>

}
export default HoverCounter;