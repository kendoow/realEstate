import { IProduct } from './../ProductsSlice/ProductsSlice.types';


export interface FilterStateTypes {
    loading: boolean,
    error: null | string,
    filterProducts: IProduct[],
    selectedFilters: IFilter,
}

export interface IFilter {
    price?: string,
    rooms?: string,
    floor?: string,
    rating?: string,
    bedrooms?: string,

    // region?: number,

    fencedArea?: boolean,
    сoveredParking?: boolean,
    parkingSpace?: boolean,
    video?: boolean,

    // balcony?: boolean,
    // loggia?: boolean,

    animals?: boolean,
    
    russian?: boolean,
    german?: boolean,
    french?: boolean,
    japanese?: boolean,
    english?: boolean,
    
    swimmingPool?: boolean,
    freeSiteParking?: boolean,
    сrib?: boolean,
    barbecueArea?: boolean,
    fireplace?: boolean,
    jacuzzi?: boolean,
    electricСar?: boolean,
    gym?: boolean,
    breakfast?: boolean,
    smoke?: boolean,

    wifi?: boolean,
    washer?: boolean,
    сonditioner?: boolean,
    heating?: boolean,
    tv?: boolean,
    kitchen?: boolean,
    dryingMachine?: boolean,
    workingArea?: boolean,
}