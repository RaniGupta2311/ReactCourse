import {useState,useEffect} from "react";
const Profile=(props)=>{
    const [count,setCount]=useState(0);
    // const [count2,setCount2]=useState(1);
    useEffect(()=>{
        // API call
        // console.log("useEffect")

        const timer=setInterval(()=>{
            console.log("NAMASTE REACT OP");
        },1000);

        // console.log("UseEffect")
        return ()=>{
            // this is called when you leave the page
            console.log("UseEffect Return");
            clearInterval(timer);
        }
    },[])
    // console.log("render");
    return (
        <div>
        <h2>Profile Functional Component</h2>
        <h3>name: {props.name}</h3>
        <h3>Count:{count}</h3>
        {/* <h3>Count2:{count2}</h3> */}
        <button onClick={()=>{
            setCount(1);
            // setCount2(2)
        }}>count</button>
        </div>
    )
}
export default Profile;