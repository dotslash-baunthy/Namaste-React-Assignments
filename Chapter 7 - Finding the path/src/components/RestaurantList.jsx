import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard.jsx";

const RestaurantList = (props) => {
    return (
        <div className="restaurantList">
            {
                props.restaurantsList.map((restaurant) => {
                    return (
                        <Link to={`/restaurant/${restaurant.data.id}`}>
                            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default RestaurantList;