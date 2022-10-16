interface IGetBabfulsMenu {
  timestamp: string;
  status: number;
  statusDetail: string;
  code: string;
  message: string;
  data: IGetBabfulsMenuData;
}

interface IGetBabfulsMenuData {
  content: IGetBabfulsMenuDataContent[];
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

interface IGetBabfulsMenuDataContent {
  id: number;
  menuDate: string;
  foods: string[];
  deliciousFood: string;
  createdDate: string;
  modifiedDate: string;
}
