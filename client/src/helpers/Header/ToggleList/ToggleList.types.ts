import { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import { DetailedHTMLProps } from 'react';

export interface ToggleListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    values: ['Профиль', 'Избранное', 'Выйти'],
    valuesLink: ['/personal', '/favorite', '/'],
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
}