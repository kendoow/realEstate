import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CustomSelectInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    arrow: string,
}