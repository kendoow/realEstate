import { DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction } from 'react';


export interface RegistrationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    setActive: Dispatch<SetStateAction<boolean>>
}