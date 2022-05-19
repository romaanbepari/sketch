import React,{useState} from "react"
const Sketch =()=>{
    const initial=0;
    const [count, setCount] = useState(initial)
    return(<>
    <h1>Count-- {count}</h1>
    <button onClick={()=>setCount(count+1)}>add</button>
    <button onClick={()=>setCount(initial)}>reset</button>
    <button onClick={()=>setCount(count-1)}>minus</button>
    
    </>)
} 

export default Sketch
