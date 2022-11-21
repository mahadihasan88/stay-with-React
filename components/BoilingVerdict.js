export default function BoilingVerdict({temp}){
   if(temp>=100){
      return <p>Rich would cooked</p>
   }
   else{
      return <p>Rich would not cooked</p>
   }
}