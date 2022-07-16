import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';


export interface ModalFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    resetHandler: () => void;
    searchHandler: () => void,

    rating: string,
    floor: string,
    setRating: Dispatch<SetStateAction<string>>,
    setFloor: Dispatch<SetStateAction<string>>,
    
    specifications: string[],
    necessary: string[],
    language: string[],
    home: string[],
    setSpecifications: Dispatch<SetStateAction<string[]>>,
    setNecessary: Dispatch<SetStateAction<string[]>>,
    setLanguage: Dispatch<SetStateAction<string[]>>,
    setHome: Dispatch<SetStateAction<string[]>>,

    balcony: string | boolean,
    animals: string | boolean,
    bedrooms: string | boolean,
    setBalcony: Dispatch<SetStateAction<string | boolean>>,
    setAnimals: Dispatch<SetStateAction<string | boolean>>,
    setBedrooms: Dispatch<SetStateAction<string | boolean>>,
}