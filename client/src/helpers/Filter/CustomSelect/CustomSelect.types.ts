import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CustomSelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    arrow: string,
    values: string[],
    name: 'rooms' | 'floor',
}