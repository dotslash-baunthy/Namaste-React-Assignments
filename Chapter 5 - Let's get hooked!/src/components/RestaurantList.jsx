import { RestaurantCard } from "./RestaurantCard.jsx";
import { restaurants } from "./Search.jsx";

export const RestaurantList = () => {
    return (
        <div className="restaurantList">
            {

                restaurants.map((restaurant) => {
                    return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />);
                })
            }
        </div>
    )
}