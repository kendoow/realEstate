import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface CommentItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string,
    date: string,
    text: string,
    image: string,
}