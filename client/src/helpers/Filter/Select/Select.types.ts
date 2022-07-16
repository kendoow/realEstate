import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';


export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    arrow: string,
    values: string[],
    selectedValue: string,
    setSelectedValue: Dispatch<SetStateAction<string>>,
}