import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface SelectButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    values: string[],
    selectedValue: string | boolean,
    setSelectedValue: Dispatch<SetStateAction<string | boolean>>,
}