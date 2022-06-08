import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    image: string,
    price: string,
    priceDay: string,
    address: string,
    metro: string,
    description: string,
    rooms: string,

    className?: string,
}