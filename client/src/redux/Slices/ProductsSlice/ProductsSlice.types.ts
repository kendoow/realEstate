export interface ProductStateTypes {
  loading: boolean;
  error: null | string;
  products: IProduct[];
  recentProducts: IProduct[];
  selectedProduct: IProduct;
}

export interface IProduct {
  image: string[];
  price: string;
  priceMonth: string;
  rating: string;
  metro: string;
  address: string;
  apartamentsName: string;
  description: string;
  rooms: string;
  coordinates: string;
  _id: string;
}

export interface PaginationTypes {
  page: number;
  limit: number;
}

export interface RecommenededTypes {
  page: number;
  limit: number;
  id: string | undefined;
}
