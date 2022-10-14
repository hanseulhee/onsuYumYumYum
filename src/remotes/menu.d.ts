interface IGetMenu {
  timestamp: string;
  status: number;
  statusDetail: string;
  code: string;
  message: string;
  data: IMenuData[];
}

interface IMenuData {
  id: number;
  name: string;
  price: number;
  description: string;
  menuImage: IPhoto | null;
  createdDate: string;
  modifiedDate: string;
}
