import { useEffect, useState } from "react";
import { instance } from "libs/api/api";

interface IGetRestaurantById {
  data: IGetRestaurantDataContent;
}

interface IGetRestaurantCategory {
  data: IGetRestaurantData;
}

interface UseGetRestaurantByIdProps {
  detailId: string | string[] | undefined;
}

function useGetRestaurantById({ detailId }: UseGetRestaurantByIdProps) {
  const [restaurant, setRestaurant] =
    useState<IGetRestaurantDataContent | null>(null);
  const [restaurantMenu, setRestaurantMenu] = useState<IMenuData[]>([]);
  const [restaurantCategory, setRestaurantCategory] = useState<
    IGetRestaurantDataContent[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getRestaurantById(id: string) {
      setIsLoading(true);
      const response = await instance.get<{}, IGetRestaurantById>(
        `/api/restaurants/${id}`
      );
      const responseMenu = await instance.get<{}, IGetMenu>(
        `/api/restaurants/${response.data.id}/menus`
      );
      const responseCategory = await instance.get<{}, IGetRestaurantCategory>(
        `/api/categories/${response.data.id}/restaurants`
      );

      setRestaurant(response.data);
      setRestaurantMenu(responseMenu.data);
      setRestaurantCategory(responseCategory.data.content);
      setIsLoading(false);
    }

    if (typeof detailId === "string") getRestaurantById(detailId);
  }, [detailId, setRestaurant]);

  return {
    restaurant,
    restaurantMenu,
    restaurantCategory,
    isLoading,
  };
}

export default useGetRestaurantById;
