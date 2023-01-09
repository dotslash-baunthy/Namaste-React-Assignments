import { useState } from "react";
import { RESTAURANT_LIST } from "../constants";

export const Search = () => {
    const [searchKey, setSearchKey] = useState();
    const [restaurants, setRestaurants] = useState(RESTAURANT_LIST);

    const filterRestaurants = (restaurants,searchKey) => {
        const filteredData = restaurants.filter((restaurant)=>{
            restaurant.data.name.includes(searchKey);
        })
        return filteredData;
    }

    return (
        <>
            <input type="text" placeholder="Search..." onChange={(e) => {
                setSearchKey(e.target.value);
            }} value={searchKey}></input>
            <button onClick={()=>{
                const data = filterRestaurants(restaurants,searchKey);
                setRestaurants(data);
            }}>Search</button>
        </>
    )
}