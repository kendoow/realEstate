import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CustomSelectCheckBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    className?: string,
    values: string[],
    arrow: string,
    confirmFilter: boolean,     
}