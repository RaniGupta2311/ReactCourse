import {createContext} from "react";
const UserContext=createContext({
    user:{
        name:"Dummy Name",
        email:"support@gmail.com"
    },
})
export default UserContext;