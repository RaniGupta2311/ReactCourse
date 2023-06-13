import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText,restaurants){
    const filterdData=restaurants.filter((res)=>res.data.name.includes(searchText))
    return filterdData;
}
const Body = () => {
  //   let searchTxt = "KFC";
  // searchText is a local state variable
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //   console.log(e.target.value)
            setSearchText(e.target.value);
          }}
        />
        <button
         className="search-btn"
         onClick={()=>{
            //  filter data
            const data=filterData(searchText,restaurants);
            // update the state restaurannts
            setRestaurants(data);
         }}>
        Search
        </button>
        {/* <h4>{searchText}</h4>  */}

        {/* <button onClick={()=>{
            if(searchClicked==="true")
            setSearchClicked("false")
            else
            setSearchClicked("true")
        }}>Toggle</button>
        <h2>{searchClicked}</h2> */}
      </div>

      <div className="restaurant-list">
        {restaurants.map((res) => {
          return <RestaurantCard key={res.data.id} {...res.data} />;
        })}
      </div>
    </>
  );
};
export default Body;
