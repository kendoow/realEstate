import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';


export interface SelectCheckBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    className?: string,
    values: string[],
    arrow: string,
    // confirmFilter: boolean,     
    selectedValues: string[],
    setSelectedValues: Dispatch<SetStateAction<string[]>>
}