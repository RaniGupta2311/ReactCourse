import {useState,useContext} from "react";
import Logo from "../assets/img/foodvilla.png";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline"; 
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser=()=>{
  return true;
}
const Title=()=>{
    return (
      <a href="/"><img src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7?0" alt="logo" className="h-28 p-2"/></a>
      // loading image via importing image from locally
      // <a href="/"><img src={Logo} alt="logo" className="logo"/></a>
    )
  }

const Header=()=>{
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const isOnline=useOnline();
  // what is the output of below
  // console.log(useState());
  const {user} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
    return (
      <div className="flex justify-between bg-blue-200 drop-shadow-md sm:bg-amber-200">
        <Title/>
        <div className="nav-items">
          <ul className="flex py-10">
            <Link to="/"><li className="px-2">Home</li></Link>
            {/* <a href="/about"><li>About</li></a> */}
            <Link to="/about"><li className="px-2">About</li></Link>
            <Link to="/contact"><li className="px-2">Contact</li></Link>
            <Link to="/instamart"><li className="px-2">Instamart</li></Link>
            <Link to="/cart"><li className="px-2">Cart- {cartItems.length}</li></Link>
          </ul>
        </div>
      {/* here we are showing online offline status alongwith login */}

      <h2>{isOnline ? '✅' : '🛑'}</h2>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
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