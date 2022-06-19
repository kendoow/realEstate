export interface ProductStateTypes {
  loading: boolean;
  error: null | string;
  products: IProduct[];
  recommendedProducts: IProduct[];
  selectedProduct: IProduct;
}

export interface IProduct {
  image: string;
  price: string;
  priceDay: string;
  priceMonth: string;
  rewiewsCount: string;
  rating: string;
  metro: string;
  address: string;
  apartamentsName: string;
  description: string;
  rooms: string;
  _id: string;
}

export interface PaginationTypes {
  page: number,
  limit: number,
}

export interface RecommenededTypes {
    page: number,
    limit: number,
    id: string | undefined,
}