import { FC, useState } from "react";
import cn from 'classnames';

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import { CustomButtonBlockProps } from "./CustomButtonBlock.types";

import styles from './CustomButtonBlock.module.scss';
import { addSelectedFilters } from "../../../redux/Slices/FilterSlice/FilterSlice";

const CustomButtonBlock: FC<CustomButtonBlockProps> = ({ className,
    name,
    values,
    ...props }) => {
    const dispatch = useTypedDispatch()
    const [selectedButton, setSelectedButton] = useState<string | boolean>(false)

    const clickHandler = (value: string) => {
        if (value === selectedButton) setSelectedButton(false)
        else {
            dispatch(addSelectedFilters({
                [name]: value,
            }))
            setSelectedButton(value)
        }
    }

    return (
        <div

            className={cn(className, styles.Container)}
            {...props}>
            {values.map((v, i) => (
                <button
                    key={i}
                    className={cn(styles.Btn, {
                        [styles.Active]: v === selectedButton,
                    })}
                    onClick={() => clickHandler(v)}>
                    {v}
                </button>
            ))}
        </div>
    )
}

export default CustomButtonBlock;