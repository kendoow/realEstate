import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';


export interface LoginProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    setActive: Dispatch<SetStateAction<boolean>>,
    setPage: Dispatch<SetStateAction<string>>,
}