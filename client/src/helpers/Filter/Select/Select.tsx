import { FC, useRef, useState } from "react";
import cn from 'classnames';

import useOnClickOutside from "../../../hooks/useOnClickOutside";

import { SelectProps } from "./Select.types";

import styles from './Select.module.scss';

const Select: FC<SelectProps> = ({ className,
    selectedValue,
    setSelectedValue,
    arrow,
    values,
    ...props }) => {

    const ref = useRef(null)
    const [active, setActive] = useState<boolean>(false)

    const activeHandler = () => {
        setActive(!active)
    }

    const selectedValueHandler = (v: string) => {
        setSelectedValue(v)
    }

    const closeHanlder = () => {
        setActive(false)
    }
    useOnClickOutside(ref, () => closeHanlder())

    return (
        <div
            ref={ref}
            className={cn(className, styles.Container)}
            {...props}>
            <button
                className={styles.SelectBtn}
                onClick={activeHandler}>
                {selectedValue}
                <img src={arrow} alt="Arrow Icon" />
            </button>
            <div className={cn(styles.BlockBtn, {
                [styles.Active]: active,
            })}>
                {values.filter(v => v !== selectedValue).map((v, i) => (
                    <button
                        key={i}
                        className={styles.Btn}
                        onClick={() => selectedValueHandler(v)}>
                        {v}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Select;