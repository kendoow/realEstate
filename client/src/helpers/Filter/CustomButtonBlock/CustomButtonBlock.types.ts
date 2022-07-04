import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CustomButtonBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    values: string[],
}