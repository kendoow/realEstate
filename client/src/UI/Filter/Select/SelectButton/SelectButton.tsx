import { FC } from "react";
import cn from 'classnames';

import { SelectButtonProps } from "./SelectButton.types";

import styles from './SelectButton.module.scss';

const SelectButton: FC<SelectButtonProps> = ({ className,
    selectedValue,
    setSelectedValue,
    values,
    ...props }) => {

    const clickHandler = (value: string) => {
        value === selectedValue ? setSelectedValue(false)
                                : setSelectedValue(value)
    }

    return (
        <div

            className={cn(className, styles.Container)}
            {...props}>
            {values.map((v, i) => (
                <button
                    key={i}
                    className={cn(styles.Btn, {
                        [styles.Active]: v === selectedValue,
                    })}
                    onClick={() => clickHandler(v)}>
                    {v}
                </button>
            ))}
        </div>
    )
}

export default SelectButton;