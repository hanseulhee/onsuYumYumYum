import { useEffect, useState } from "react";
import { instance } from "libs/api/api";

interface UseGetRestaurantByIdProps {
  categoryId: string | string[] | undefined;
}

function useGetRestaurantByCategory({ categoryId }: UseGetRestaurantByIdProps) {
  const [restaurantCategory, setRestaurantCategory] = useState<
    IGetRestaurantDataContent[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getRestaurantById(id: string) {
      setIsLoading(true);
      const responseCategory = await instance.get<{}, IGetRestaurant>(
        `/api/categories/${categoryId}/restaurants`
      );

      setRestaurantCategory(responseCategory.data.content);
      setIsLoading(false);
    }

    if (typeof categoryId === "string") getRestaurantById(categoryId);
  }, [categoryId, setRestaurantCategory]);

  return {
    restaurantCategory,
    isLoading,
  };
}

export default useGetRestaurantByCategory;
