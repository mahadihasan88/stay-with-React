

export default function Text({addBracket,addEmoji}){

    let text="Md Mahadi hasan";
    if(addEmoji){
        text=addEmoji(text,'love');
    }
    if(addBracket){
        text=addBracket(text);
    }

    return <div>{text}</div>
   
}