import {useState, useEffect} from "react";
import { FETCH_URL_MENU } from "../constants";
const useRestaurant=(resId)=>{
    const [restaurant,setRestaurant]=useState(null);
    // get data from api
     useEffect(()=>{
        getMenuDetails();
    },[])
    // return restaurant data
    async function getMenuDetails(){
        const allMenu=await fetch(FETCH_URL_MENU+resId);
        const res=await allMenu.json();
        setRestaurant(res?.data)
    }
    return restaurant
}
export default useRestaurant;