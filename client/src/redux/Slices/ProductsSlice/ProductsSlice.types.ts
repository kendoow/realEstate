export interface ProductStateTypes {
    loading: boolean,
    error: null | string,
    products: IProduct[],
}

export interface IProduct {
    price: string,
    priceDay: string,
    metro: string,
    address: string,
    rooms: string,
    description: string,
    _id: string,
}