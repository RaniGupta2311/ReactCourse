import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu=()=>{
    // how to read dynamic URL params
    const params=useParams();
    const {resId} = params;
    // const [restaurant,setRestaurant]=useState(null);
    // using our custome hook
    const restaurant=useRestaurant(resId);
  
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