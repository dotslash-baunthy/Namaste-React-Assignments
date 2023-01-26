import { useParams } from "react-router";
import { IMG_CDN_URL } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const restaurantData = useRestaurantMenu(resId);

    return (
        !restaurantData ? (<Shimmer />) : (
            <div className="menu">
                <div>
                    <h2>{restaurantData?.name}</h2>
                    <img src={IMG_CDN_URL + restaurantData?.cloudinaryImageId} />
                    <h3>{restaurantData?.area}</h3>
                    <h3>{restaurantData?.city}</h3>
                    <h3>{restaurantData?.avgRating} stars</h3>
                    <h3>{restaurantData?.costForTwoMsg}</h3>
                </div>
                <div>
                    <h1>Menu</h1>
                    <ul>
                        {Object.values(restaurantData?.menu?.items).map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    )

}

export default RestaurantMenu;