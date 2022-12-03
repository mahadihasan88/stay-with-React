import useWindowWidth from "../hooks/useWindowWidth";

function LayoutComponentTwo(){
   
    const onSmallScreen=useWindowWidth();
    
    return (
        <div className={onSmallScreen? 'Small':'Large'}>
             <h1>This is another Component for browsing</h1>
        </div>
    )
}
export default LayoutComponentTwo;