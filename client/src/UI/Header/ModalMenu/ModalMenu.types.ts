import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';


export interface ModalMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    loginHandler: () => void,
    registrationHandler: () => void,
}