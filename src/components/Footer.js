import {useContext} from "react"
import UserContext from "../utils/UserContext";
const Footer=()=>{
  const {user} = useContext(UserContext)
    return (
      <div>
        <h4>This Site is develope by {user.name} - {user.email}</h4>
      </div>
      
    )
  }

export default Footer;