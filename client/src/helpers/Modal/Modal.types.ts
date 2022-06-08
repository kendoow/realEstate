import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReactNode } from "react";
export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    active:any,
    children:ReactNode,
    setActive:any
}