import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';


export interface SelectInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    arrow: string,
    selectedValue: string | boolean,
    setSelectedValue: Dispatch<SetStateAction<string | boolean>>,
}