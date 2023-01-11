import { useState } from "react";
import { RESTAURANT_LIST } from "../constants";
import { RestaurantList } from "./RestaurantList";

export const Search = () => {
    const [searchKey, setSearchKey] = useState("");
    const [restaurants, setRestaurants] = useState(RESTAURANT_LIST);

    const filterRestaurants = () => {
        if (searchKey == "") {
            return RESTAURANT_LIST;
        } else {
            const filteredData = RESTAURANT_LIST.filter((restaurant) => {
                return (restaurant.data.name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()));
            })
            return filteredData;
        }
    }

    return (
        <>
            <input type="text" placeholder="Search..." onChange={(e) => {
                setSearchKey(e.target.value);
            }} value={searchKey}></input>
            <button onClick={() => {
                const data = filterRestaurants();
                setRestaurants(data);
            }}>Search</button>
            <RestaurantList restaurantsList={restaurants} />
        </>
    )
}