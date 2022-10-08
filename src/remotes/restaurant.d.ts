interface IGetRestaurant {
  timestamp: string;
  status: number;
  statusDetail: string;
  code: string;
  message: string;
  data: IGetRestaurantData;
}

interface IGetRestaurantData {
  content: IGetRestaurantDataContent[];
  pageable: IPage;
  totalPage: number;
  totalElements: number;
  last: boolean;
  number: number;
  sort: ISort;
  size: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface IGetRestaurantDataContent {
  id: number;
  name: string;
  phone: string;
  time: string[];
  summary: string;
  location: string;
  longitude: number;
  latitude: number;
  outsideImage: IPhoto;
  insideImage: IPhoto;
  createDate: string;
  modifiedDate: string;
}
