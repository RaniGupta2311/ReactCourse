import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
const About=()=>{
    return (
        <div>
            <h1>About us page</h1>
            <p>This is namaste live course</p>
            {/* <Outlet/> */}
           <ProfileFunctionalComponent name="Rani"/>
            <Profile name="RaniClass" xyz="abc"/>
        </div>
    )
}
export default About