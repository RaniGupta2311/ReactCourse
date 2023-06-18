import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
const RestaurantMenu=()=>{
    // how to read dynamic URL params
    const params=useParams();
    // console.log(params);
    const {resId} = params;
    // console.log(id);
    // rendering on the ui
    // const [restaurant,setRestaurant]=useState({});

    // we are getting error ,till the time our restaurant is not there in the initial render
    // it is empty object but still we are reading so many things

    const [restaurant,setRestaurant]=useState(null);
    

    useEffect(()=>{
        getMenuDetails();
    },[])

    async function getMenuDetails(){
        const allMenu=await fetch("https://www.swiggy.com/dapi/menu/quick?menuId="+resId);
        const res=await allMenu.json();
        // console.log(res?.data);
        // console.log(res?.data.menu.items);
        setRestaurant(res?.data)
    }

    return (!restaurant) ? <Shimmer/> : (
        <div className="menu-main">
        <div>
            <h3>Restaurant Id:{resId}</h3>
        </div>
        <div className="menu-container">
            <h2>Menu</h2>
            <div className="underline"></div>
                {/* {console.log(Object.values(restaurant.menu.items))} */}
                {
                    Object.values(restaurant?.menu?.items).map((item)=>(
                        /* <li key={item.id}>{item.name}</li> */
                        <MenuCard key={item.id} {...item}/>
                    ))
                }
        </div>
        </div>
    )
}
export default RestaurantMenu;