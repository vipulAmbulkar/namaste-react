// import { restList } from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restList } from "../utils/mockData";

const Body = () => {
  //array destrcuturing
  //const arr = useState(resList);
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurant = arr[1];
  const [listOfRestaurants, setListOfRestaurant] = useState(restList);
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
  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
