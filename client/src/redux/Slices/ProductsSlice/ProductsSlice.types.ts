export interface ProductStateTypes {
  loading: boolean;
  error: null | string;
  products: IProduct[];
  selectedApartament: IProduct;
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
