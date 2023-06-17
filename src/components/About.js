import { Outlet } from "react-router-dom"
const About=()=>{
    return (
        <div>
            <h1>About us page</h1>
            <p>This is namaste live course</p>
            <Outlet/>
        </div>
    )
}
export default About