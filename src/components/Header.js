import {useState} from "react";
import Logo from "../assets/img/foodvilla.png";
import {Link} from "react-router-dom";
const loggedInUser=()=>{
  return true;
}
const Title=()=>{
    return (
      <a href="/"><img src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7?0" alt="logo" className="logo"/></a>
      // loading image via importing image from locally
      // <a href="/"><img src={Logo} alt="logo" className="logo"/></a>
    )
  }

const Header=()=>{
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  // what is the output of below
  // console.log(useState());
    return (
      <div className="header">
        <Title/>
        <div className="nav-items">
          <ul>
            <Link to="/home"><li>Home</li></Link>
            {/* <a href="/about"><li>About</li></a> */}
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
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