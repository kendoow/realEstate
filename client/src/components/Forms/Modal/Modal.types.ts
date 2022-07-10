import { DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction } from "react";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    active:boolean,
    setActive:Dispatch<SetStateAction<boolean>>,
    setPage:Dispatch<SetStateAction<string>>,
    page:string
}