import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";

const Search = () => {

    const [searchKey, setSearchKey] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const filterRestaurants = () => {
        const filteredData = allRestaurants.filter((restaurant) => {
            return (restaurant.data?.name?.toLocaleLowerCase()?.includes(searchKey?.toLocaleLowerCase()));
        })
        setFilteredRestaurants(filteredData);
    }

    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5822999&lng=77.0499762&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if (filteredRestaurants.length === 0) {
        return (
            <>
                <input type="text" placeholder="Search..." onChange={(e) => {
                    setSearchKey(e.target.value);
                }} value={searchKey}></input>
                <button onClick={() => {
                    filterRestaurants();
                }}>Search</button>
                <Shimmer /></>
        )
    }
    else {
        return (
            <>
                <input type="text" placeholder="Search..." onChange={(e) => {
                    setSearchKey(e.target.value);
                }} value={searchKey}></input>
                <button onClick={() => {
                    filterRestaurants();
                }}>Search</button>
                <RestaurantList restaurantsList={filteredRestaurants} />
            </>)
    }

}

export default Search;