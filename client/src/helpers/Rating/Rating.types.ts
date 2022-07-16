import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    initialRating?: number,
    isEditable: boolean,
    filterRating?: string,
    setFilterRating?: Dispatch<SetStateAction<string>>,
}

