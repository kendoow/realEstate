import { IProduct } from './../ProductsSlice/ProductsSlice.types';

export interface FavouriteStateTypes {
    loading: boolean,
    error: null | string,
    favourite: IProduct[],
}

export interface FavouriteFecth {
    userId: string,
    favourites: IProduct[],
}

export interface FavouriteAddArguments {
    userId: string,
    favourite: IProduct[],
    products: IProduct[],
    productId: string, 
}

export interface FavouriteDeleteArguments {
    userId: string,
    productId: string,
    favourite: IProduct[],
}