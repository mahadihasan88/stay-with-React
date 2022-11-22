
function ClickCounter({count,countChangeEvent}){

    return <button type="button" onClick={countChangeEvent}>Button is Clicked for {count} Times</button>

}
export default ClickCounter;