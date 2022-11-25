
const FinalRound=(props)=>{
    const {theme,ChangeTheme}=props;
   
   const   design=theme==='light'? 'green':'#f27446';
    
    return(
        <div>
           <h2 style={{backgroundColor:design}}>Hellow HSTU .This is Md Mahadi Hasan</h2>

           <button type="button" onClick={ChangeTheme}>Hit the Button</button>
        </div>
    )
}
export default FinalRound;