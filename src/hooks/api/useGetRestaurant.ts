import { instance } from "libs/api/api";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { restaurantState } from "store/Restaurant/restaurantState";

function useGetRestaurant(page: number) {
  const [restaurants, setRestaurants] = useRecoilState(restaurantState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getRestaurant() {
    setIsLoading(true);
    const response = await instance.get<{}, IGetRestaurant>(
      `/api/restaurants?page=${page}`
    );

    if (response.data === undefined) {
      setIsLoading(false);
    } else {
      setRestaurants(response.data.content);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getRestaurant();
  }, [page]);

  return { restaurants, isLoading };
}

export default useGetRestaurant;
