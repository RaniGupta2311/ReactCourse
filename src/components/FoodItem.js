import {IMG_CDN_URL} from "../constants"

const FoodItem=({name,cloudinaryImageId,description,price})=>{
    return (
      <div className="w-56 p-3 m-2 shadow-lg">
        <img src={IMG_CDN_URL+cloudinaryImageId} alt="food-image"/>
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{description}</h3>
        <h4>Rs. {price/100}</h4>
      </div>
    )
  }

export default FoodItem;