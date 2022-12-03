import useWindowWidth from "../hooks/useWindowWidth";

function LayoutComponentOne(){
    const onSmallScreen=useWindowWidth(768);
    
    return (
        <div>
             <h1>You are browsing on {onSmallScreen? 'Small':'Large'} Device</h1>
        </div>
    )
}
export default LayoutComponentOne;