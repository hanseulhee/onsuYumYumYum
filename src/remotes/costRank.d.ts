interface IGetMenuCostRank {
  timestamp: string;
  status: number;
  statusDetail: string;
  code: string;
  message: string;
  data: IGetMenuCostRankData;
}

interface IGetMenuCostRankData {
  content: IGetMenuCostRankContent[];
  pageable: IPage;
  totalPages: number;
  totalElements: number;
  last: boolean;
  number: number;
  sort: ISort;
  size: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface IGetMenuCostRankContent {
  id: number;
  name: string;
  price: number;
  description: string;
  menuImage: IPhoto | null;
  createdDate: string;
  modifiedDate: string;
  restaurantId: number;
  restaurantName: string;
}
