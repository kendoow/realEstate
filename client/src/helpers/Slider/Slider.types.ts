import { MouseEventHandler } from "react";

export type SliderProps = {
    children: React.ReactNode
}

export type ArrowProps = {
    className?:string;
    style?:React.HTMLAttributes<HTMLDivElement>;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

