import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { restaurantState } from "store/Restaurant/restaurantState";
import { instance } from "libs/api/api";

function useGetRicefull() {
  const [babfullMenus, setBabfullMenus] = useState<IGetBabfulsMenuDataContent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getRestaurant() {
    setIsLoading(true);
    const response = await instance.get<{}, IGetBabfulsMenu>("/api/babfuls");

    setBabfullMenus(response.data.content);
    setIsLoading(false);
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  return { babfullMenus, isLoading };
}

export default useGetRicefull;
