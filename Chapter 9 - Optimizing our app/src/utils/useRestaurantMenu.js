import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState();
  const finalApi = `${RESTAURANT_MENU_API}${resId}`;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(finalApi);
    const json = await data.json();
    setRestaurantData(json.data);
  }

  return restaurantData;
};

export default useRestaurantMenu;