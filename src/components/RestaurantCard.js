import {IMG_CDN_URL} from "../constants"
const RestaurantCard=({name,cloudinaryImageId,cuisines,avgRating})=>{
    return (
      <div className="w-56 p-3 m-2 shadow-lg">
        <img src={IMG_CDN_URL+cloudinaryImageId} alt="food-image"/>
        <h2 className="font-bold text-xl">{name}</h2>
        <p>{cuisines?.join(",")}</p>
        <h5>{avgRating} stars</h5>
      </div>
    )
  }

export default RestaurantCard;