import { RestaurantCard } from "./RestaurantCard.jsx";

export const RestaurantList = (props) => {
    return (
        <div className="restaurantList">
            {
                props.restaurantsList.map((restaurant) => {
                    return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />);
                })
            }
        </div>
    )
}