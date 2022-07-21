import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CatalogItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    image: string [],
    price: string,
    address: string,
    metro: string,
    description: string,
    rooms: string,
    id:string,
    className?: string
}