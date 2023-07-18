import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu=()=>{
    // how to read dynamic URL params
    const params=useParams();
    const {resId} = params;
    // const [restaurant,setRestaurant]=useState(null);
    // using our custome hook
    const restaurant=useRestaurant(resId);

    const dispatch = useDispatch();

    const handleAddItem=()=>{
        dispatch(addItem("Grapes"));
    };
  
    return (!restaurant) ? <Shimmer/> : (
        <div className="menu-main">
        <div>
            <h3>Restaurant Id:{resId}</h3>
        </div>

        {/* <div>
            <button className="p-2 m-2 bg-green-200" onClick={()=>handleAddItem()}>Add Item</button>
        </div> */}

        <div className="menu-container">
            <h2>Menu</h2>
            <div className="underline flex flex-wrap"></div>
                {/* {console.log(Object.values(restaurant.menu.items))} */}
                {
                    Object.values(restaurant?.menu?.items).map((item)=>(
                        /* <li key={item.id}>{item.name}</li> */
                        <MenuCard key={item.id} item={item}/>
                    ))
                }
        </div>
        </div>
    )
}
export default RestaurantMenu;