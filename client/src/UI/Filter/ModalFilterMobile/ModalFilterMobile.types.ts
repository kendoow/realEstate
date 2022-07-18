import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";


export interface ModalFilterMobileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    resetHandler: () => void,
    searchHandler: () => void,

    rooms: string,
    floor: string,
    rating: string,

    setRooms: Dispatch<SetStateAction<string>>,
    setFloor: Dispatch<SetStateAction<string>>,
    setRating: Dispatch<SetStateAction<string>>,

    specifications: string[],
    necessary: string[],
    language: string[],
    home: string[],

    setSpecifications: Dispatch<SetStateAction<string[]>>,
    setNecessary: Dispatch<SetStateAction<string[]>>,
    setLanguage: Dispatch<SetStateAction<string[]>>,
    setHome: Dispatch<SetStateAction<string[]>>,

    price: string | boolean,
    balcony: string | boolean,
    animals: string | boolean,
    bedrooms: string | boolean,

    setPrice: Dispatch<SetStateAction<string | boolean>>,
    setBalcony: Dispatch<SetStateAction<string | boolean>>,
    setAnimals: Dispatch<SetStateAction<string | boolean>>,
    setBedrooms: Dispatch<SetStateAction<string | boolean>>,
}