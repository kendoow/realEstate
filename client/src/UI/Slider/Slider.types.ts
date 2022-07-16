import { MouseEventHandler } from "react";

export interface SliderProps {
    children: React.ReactNode
}

export interface ArrowProps {
    className?: string;
    style?: React.HTMLAttributes<HTMLDivElement>;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

