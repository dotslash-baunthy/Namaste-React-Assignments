import { RestaurantCard } from "./RestaurantCard.jsx";
import { RESTAURANT_LIST } from "../constants.js";

export const RestaurantList = () => {
    return (
        <div className="restaurantList">
            {

                RESTAURANT_LIST.map((restaurant) => {
                    return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />);
                })
            }
        </div>
    )
}