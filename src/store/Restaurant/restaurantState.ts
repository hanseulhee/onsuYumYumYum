import { atom } from "recoil";
import { v1 } from "uuid";

export const restaurantState = atom<IGetRestaurantDataContent[]>({
  key: `restaurantState/${v1()}`,
  default: [],
});
