import { atom } from "recoil";

export const restaurantState = atom<IGetRestaurantDataContent[]>({
  key: "restaurantState",
  default: [],
});
