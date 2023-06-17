import {IMG_CDN_URL} from "../constants";
const MenuCard=({name,price,cloudinaryImageId,description})=>{
    return (
        <div className="menu-card">
            <div className="menu-info">
                <h4>{name}</h4>
                <p>Rs {price/100}</p>
                <p className="description">{description}</p>
            </div>
            <div className="menu-img">
                <img src={IMG_CDN_URL+cloudinaryImageId} alt="menu-img"
                 className="menu-food-img"/>
            </div>
        </div>
    )
}
export default MenuCard;