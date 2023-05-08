import { useEffect,useState } from "react";

const  TextWrite=(props)=>{

    const[text,setText]=useState('');

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setText(props.text.substring(0,text.length+1));
        },100);
        return ()=> {clearTimeout(timer)}

    },[text,props.text]);



    return(
        <>
         {text}
        </>
           
        

    );

}


export default TextWrite;