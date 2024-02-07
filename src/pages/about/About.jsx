import design from "./about.module.css";
import { useState } from "react";

function About(){
    const[a,setA]=useState(0);
    let b=0;

    return(<>

<h1>this is about page</h1><br />
    <h3 className={design.one}>A quotation is the repetition of a sentence, phrase, or passage from speech or text that someone has said or written. In oral speech, it is the representation of an utterance that is introduced by a quotative marker, such as a verb of saying.</h3> <br/>
        <h3 className={design.one} >For example: John said: I saw Mary today</h3>
    <a href="/contact">CONTACT</a>
    <div className={design.java}>  
    
    click to add 1:-{a} 
    <button onClick={()=>{setA(a+1)}} />
    </div>
    <div className={design.java}>
    click to add 2:-{b}
    <button onClick={()=>{b=b+1}}/>
    </div> 
    </>)
}
export default About;