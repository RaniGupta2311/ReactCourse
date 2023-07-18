import { useDispatch } from "react-redux";
import {IMG_CDN_URL} from "../constants";
import { addItem } from "../utils/cartSlice";
const MenuCard=(props)=>{

    const dispatch=useDispatch();
    const handleFoodItem=(item)=>{
        dispatch(addItem(item));
    }

    return (
        <div className="menu-card flex m-2 p-2">
              <div className="menu-img">
                <img src={IMG_CDN_URL+props.item.cloudinaryImageId} alt="menu-img"
                 className="menu-food-img w-32 h-32"/>
              </div>
            <div className="menu-info ml-4">
                <h4>{props.item.name}</h4>
                <p>Rs {props.item.price/100}</p>
                <p className="description">{props.item.description}</p>
                <button className="bg-blue-200 sm:bg-amber-200 p-1 w-20" onClick={()=>handleFoodItem(props.item)}>Add + </button>
            </div>
          
        </div>
    )
}
export default MenuCard;