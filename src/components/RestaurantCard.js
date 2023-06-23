import {IMG_CDN_URL} from "../constants"
import {useContext} from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard=({name,cloudinaryImageId,cuisines,avgRating})=>{
  const {user}=useContext(UserContext);

    return (
      <div className="w-56 p-3 m-2 shadow-lg">
        <img src={IMG_CDN_URL+cloudinaryImageId} alt="food-image"/>
        <h2 className="font-bold text-xl">{name}</h2>
        <p>{cuisines?.join(",")}</p>
        <h5>{avgRating} stars</h5>
        <p>{user.name}-{user.email}</p>

      </div>
    )
  }

export default RestaurantCard;