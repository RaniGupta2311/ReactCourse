import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"

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

  // console.log("render-body")
  // console.log(restaurants)

  // this will be called only once (just initial render)
  // useEffect(()=>{
  //   console.log("call this when dependency is chaged")
  // },[])

  // this will be called when we enter anything in search input
  // useEffect(()=>{
  //   console.log("call this when dependency is chaged")
  // },[searchText])

  // empty dependency array=> once after render
  // dependency array [searchText]=> once after initial render + everytime after render(when searchText changes)
  // useEffect(()=>{
  //   console.log("useEffect Hook")
  // },[restaurants])

  // making api call
  useEffect(()=>{
    // api call
    getRestaurants()
  },[])

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.748163724143655&lng=84.38034899532796&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
    // use optional chaining
    // console.log(json?.data?.cards[0]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
  }

  console.log("render");
  if (!allRestaurants) return null
    // conditional rendering
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
            //   console.log(e.target.value)
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

      <div className="restaurant-list">
        {filteredRestaurants.map((res) => {
          return (filteredRestaurants.length===0)? <h1>No match found</h1> : (
            <RestaurantCard key={res.data.id} {...res.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
