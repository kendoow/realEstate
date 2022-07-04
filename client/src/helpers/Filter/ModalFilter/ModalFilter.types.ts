import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';


export interface ModalFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
}