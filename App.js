import React from 'react';
import Emoji from './composition/Emoji';
import Text from './composition/Text';
import Bracket from './composition/Bracket';

function App(){
 
  return (
   <Emoji>
           
           {({addEmoji})=>(<Bracket>
            
            {({addBracket})=> <Text addBracket={addBracket} addEmoji={addEmoji}/>}
           
           </Bracket>)}
          
          
   </Emoji>
   
  );
}

export default App;