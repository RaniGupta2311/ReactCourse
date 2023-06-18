import {IMG_CDN_URL} from "../constants"
const RestaurantCard=({name,cloudinaryImageId,cuisines,avgRating})=>{
    return (
      <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} alt="food-image"/>
        <h3>{name}</h3>
        <p>{cuisines?.join(",")}</p>
        <h5>{avgRating} stars</h5>
      </div>
    )
  }

export default RestaurantCard;