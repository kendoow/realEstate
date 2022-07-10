import { DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction } from 'react';

export interface RestoreProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    setActive: Dispatch<SetStateAction<boolean>>,
    setPage: Dispatch<SetStateAction<string>>
}