import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom";

function filterData(sText,rest){
  const filteredData=rest.filter((res)=>res?.data?.name.toLowerCase().includes(sText.toLowerCase()))
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  // showing old data before api call
  // const [restaurants, setRestaurants] = useState(restaurantList);
  // this wont show any data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants,setAllRestaurants]=useState([]);
  
  useEffect(()=>{
    // api call
    getRestaurants()
  },[])

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.444980032351513&lng=78.35968963801861&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    // console.log(json);
    // use optional chaining
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // console.log("render");
  if (!allRestaurants) return null
  // we are showing shimmer UI if data is not loaded from api call
  return (allRestaurants.length===0)?<Shimmer/> :
  (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
         className="search-btn"
         onClick={()=>{
          //  filter data
          const data=filterData(searchText,allRestaurants)
          setFilteredRestaurants(data)
         }}
       >
        Search
        </button>
      </div>

        {/* here we are showing shimmer effect if there is no restaurant found in search and also search input is there if it shimmered */}
      <div className="restaurant-list">
        {(filteredRestaurants.length===0)? <h1>Oops!! No match found</h1> :filteredRestaurants.map((res) => {
          return (
            <Link to={"/restaurant/"+res.data.id} key={res.data.id} ><RestaurantCard {...res.data} /></Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
