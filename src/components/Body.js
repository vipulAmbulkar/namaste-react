// import { restList } from "../utils/mockData";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restList } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  //array destrcuturing
  //const arr = useState(resList);
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurant = arr[1];
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  //   let listOfRestaurants = [
  //     {
  //       id: "3436",
  //       name: "Nandhini Deluxe",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/147063cd-d445-4c26-a6ee-aef802e76f93_3436.jpg",
  //       costForTwo: "₹500 for two",
  //       cuisines: ["North Indian", "Chinese", "Andhra", "Biryani"],
  //       avgRating: 3.8,
  //       deliveryTime: 30,
  //     },
  //     {
  //       id: "30530",
  //       name: "Hotel Empire",
  //       cloudinaryImageId: "10f8b483521b9359d9c8fcd37f23c9d3",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Kebabs", "Biryani"],
  //       avgRating: 4.5,
  //       deliveryTime: 30,
  //     },
  //   ];
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("🚀 ~ fetchData ~ data:", json?.data?.card[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //Optional chaining
    setListOfRestaurant(json?.data?.card[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.card[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filtertedRes = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filtertedRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            console.log("🚀 ~ filterList:", filterList);
            setListOfRestaurant(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard
            resName="Meghana foods"
            cuisine="Biryani, North Indian, Asian"
          /> */}
        {/* <RestaurantCard resData={resObj} /> */}
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
