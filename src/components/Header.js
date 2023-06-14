import {useState} from "react"
const loggedInUser=()=>{
  return true;
}
const Title=()=>{
    return (
      <a href="/"><img src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7?0" alt="logo" className="logo"/></a>
    )
  }

const Header=()=>{
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  // let title="Food Villa"
  const [title,setTitle]=useState("FoodVilla");
  // console.log("render");
    return (
      <div className="header">
        <Title/>
        <h1>{title}</h1>
        {/* it wont change the title on click */}
        <button onClick={()=>setTitle("New Food App")}>Change title</button>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        {
          isLoggedIn?(
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
          ):(
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
          )
        }
      </div>
    )
  }
  export default Header;