import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { restaurantState } from "store/Restaurant/restaurantState";
import { instance } from "libs/api/api";

function useGetRestaurant() {
  const [restaurants, setRestaurants] = useRecoilState(restaurantState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getRestaurant() {
    setIsLoading(true);
    const response = await instance.get<{}, IGetRestaurant>("/api/restaurants");
    
    setRestaurants(response.data.content);
    setIsLoading(false);
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  return { restaurants, isLoading };
}

export default useGetRestaurant;
