import { useState } from "react";
import { RESTAURANT_LIST } from "../constants";
import { RestaurantList } from "./RestaurantList";

export const Search = () => {
    const [searchKey, setSearchKey] = useState();
    const [restaurants, setRestaurants] = useState(RESTAURANT_LIST);

    const filterRestaurants = () => {
        const filteredData = restaurants.filter((restaurant) => {
            return (restaurant.data.name.includes(searchKey));
        })
        return filteredData;
    }

    return (
        <>
            <input type="text" placeholder="Search..." onChange={(e) => {
                setSearchKey(e.target.value);
            }} value={searchKey}></input>
            <button onClick={() => {
                setRestaurants(RESTAURANT_LIST);
                const data = filterRestaurants();
                setRestaurants(data);
            }}>Search</button>
            <RestaurantList restaurantsList={restaurants} />
        </>
    )
}