import { useEffect, useState } from "react";
import { instance } from "libs/api/api";

function useGetRestaurantCostRank() {
  const [restaurantMenuCost, setRestaurantMenuCost] = useState<
    IGetMenuCostRankContent[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getRestaurantByCostRank() {
      setIsLoading(true);
      const responseMenu = await instance.get<{}, IGetMenuCostRank>(
        `/api/restaurants/menus?size=50&price=3100
        `
      );
      setRestaurantMenuCost(responseMenu.data.content);
      setIsLoading(false);
    }

    getRestaurantByCostRank();
  }, []);

  return {
    restaurantMenuCost,
    isLoading,
  };
}

export default useGetRestaurantCostRank;
