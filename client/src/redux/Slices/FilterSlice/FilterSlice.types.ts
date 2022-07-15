import { IProduct } from './../ProductsSlice/ProductsSlice.types';


export interface FilterStateTypes {
    loading: boolean,
    error: null | string,
    filterProducts: IProduct[],
}

// export interface IFilter {
//     productId: string,
//     price: number | boolean,
//     rooms: number | boolean,
//     floor: number | boolean,
//     rating: number | boolean,
//     bedrooms: number | boolean,

//     // region: number | boolean,

//     fencedArea: boolean,
//     сoveredParking: boolean,
//     parkingSpace: boolean,
//     video: boolean,

//     balcony: boolean,
//     loggia: boolean,

//     animals: boolean,
    
//     russian: boolean,
//     german: boolean,
//     french: boolean,
//     japanese: boolean,
//     english: boolean,
    
//     swimmingPool: boolean,
//     freeSiteParking: boolean,
//     сrib: boolean,
//     barbecueArea: boolean,
//     fireplace: boolean,
//     jacuzzi: boolean,
//     electricСar: boolean,
//     gym: boolean,
//     breakfast: boolean,
//     smoke: boolean,

//     wifi: boolean,
//     washer: boolean,
//     сonditioner: boolean,
//     heating: boolean,
//     tv: boolean,
//     kitchen: boolean,
//     dryingMachine: boolean,
//     workingArea: boolean,
// }