import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline"
const Body = () => {
  const [searchText, setSearchText] = useState("");
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

  // we are checking user is online or offline 
  const isOnline=useOnline();
  if(!isOnline) return <h1>🛑 Please Check your internet coonection. Lookslike you are offline</h1>

  // console.log("render");
  if (!allRestaurants) return null
  // we are showing shimmer UI if data is not loaded from api call
  return (allRestaurants.length===0)?<Shimmer/> :
  (
    <>
      <div className="p-5 my-5 bg-amber-200">
        <input
          type="text"
          className="focus:bg-green-50 p-1 m-1"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
         className="py-1 px-4 m-2 bg-purple-900 text-white rounded-md hover:bg-sky-700"
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
      <div className="flex flex-wrap">
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
