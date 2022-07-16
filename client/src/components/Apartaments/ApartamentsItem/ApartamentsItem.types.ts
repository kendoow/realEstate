import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ApartamentsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    image: string [],
    price: string,
    priceDay: string,
    priceMonth: string,
    rewiewsCount:string,
    rating:string,
    metro: string,
    address: string,
    apartamentsName:string,
    description: string,
    id:string;
}